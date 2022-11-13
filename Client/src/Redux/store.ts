import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

// Asynchronous
import thunk from "redux-thunk";

// Persistance
import { persistStore } from "redux-persist";

// ========================================================================================================

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

//====================================================
// It only shows the redux-devtools in developpement
//====================================================

let composeEnhancers;

if (process.env.NODE_ENV === "production") {
  composeEnhancers = null || compose;
} else {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// ========================================================================================================

//====================================================
// Passing the data to the index.tsx file
//====================================================

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);

// ========================================================================================================
