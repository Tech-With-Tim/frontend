import React from "react";
import configureStore from "./store";
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

function render(
  ui,
  {
    initialState = {},
    store = configureStore(initialState)
  } = {}
){
  return rtlRender(<Provider store={store}>
    {ui}
  </Provider>);
}

export * from '@testing-library/react'
export { render }
