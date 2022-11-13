import { combineReducers } from "redux";

// Persistance
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducer
import uiReducer from "./ui/uiReducer";

// ========================================================================================================

const persistConfig = {
  key: "planning",
  storage,
  whitelist: ["ui"],
};

const rootReducer = combineReducers({
  ui: uiReducer,
});

// ========================================================================================================

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
