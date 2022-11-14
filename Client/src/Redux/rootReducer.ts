import { combineReducers } from "redux";

// Persistance
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducer
import uiReducer from "./ui/uiReducer";
import planningReducer from "./planning/planningReducer";

// ========================================================================================================

const persistConfig = {
	key: "planning",
	storage,
	whitelist: ["ui"],
};

const rootReducer = combineReducers({
	ui: uiReducer,
	planning: planningReducer,
});

// ========================================================================================================

export type IAppState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
