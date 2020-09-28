import { combineReducers } from "redux";

import { fetchReducer } from "./fetchReducer";

const reducer = combineReducers({
  fetch: fetchReducer,
});

export type AppState = ReturnType<typeof reducer>;
export default reducer;
