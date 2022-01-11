import { combineReducers } from "redux";
import { imagesReducer } from "./reducer";

const rootReducer = combineReducers({
  images: imagesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
