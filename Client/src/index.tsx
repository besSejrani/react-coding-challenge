import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "@Redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Routes
import App from "./Routes/App";
import "./Routes/app.css";

// Progressive Web App
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// SEO
import reportWebVitals from "./reportWebVitals";

// ========================================================================================================

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
