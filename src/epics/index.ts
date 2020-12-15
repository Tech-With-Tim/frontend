import { userEpics } from "./user.epic";
import {combineEpics} from "redux-observable";

const rootEpics = combineEpics(...userEpics);

export default rootEpics;
