import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";

// =================================================================

const getDesignTokens = (mode: PaletteMode) => ({
	typography: {
		fontFamily: "Roboto",
	},

	palette: {
		mode,
		// palette values for light mode
		...(mode === "light"
			? {
					primary: {
						main: "#171717",
					},
					secondary: {
						main: "#13b061",
					},
					background: {
						background: "#ffffff",
						icon: "#c4c4c4",
						footer: "#171717",
						header: "#171717",
						mark: "#eeeeee",
					},
					text: {
						primary: grey[900],
						secondary: grey[800],
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: "#ffffff",
					},
					secondary: {
						main: "#13b061",
					},

					background: {
						background: "#1b1b1b",
						paper: "#262626",
						icon: "#252525",
						button: "#ffffff",
						footer: "#171717",
						header: "#171717",
						mark: "#494321",
					},
					text: {
						primary: "#ffffff",
						secondary: "#ffffff",
					},
			  }),
	},
});

// ========================================================================================================

interface ITheme {
	children: JSX.Element[] | JSX.Element;
}

export const Theme: React.FC<ITheme> = ({ children }) => {
	// Redux
	const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);

	const theme = createTheme(getDesignTokens(isDarkTheme ? "light" : "dark"));
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// ========================================================================================================

export const withTheme = (Component) => (props) =>
	(
		<Theme>
			<Component {...props} />
		</Theme>
	);
