declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV: "development" | "production";
		REACT_APP_SERVER: string;
	}
}
