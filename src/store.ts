import {applyMiddleware, createStore, compose} from "redux";
import { baseReducer } from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import epics from "./epics";
import {ajax} from "rxjs/ajax";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore(initialState = {}) {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      get: ajax.get,
      post: ajax.post,
      delete: ajax.delete,
      put: ajax.put,
    }
  });
  const middlewares = [epicMiddleware];

  const STORE = createStore(baseReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  epicMiddleware.run(epics);

  return STORE;
}

export default configureStore;
