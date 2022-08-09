import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { feedReducer } from "./feeds/feed.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
// if (window.Cypress) {
//   window.store = store;
// }
