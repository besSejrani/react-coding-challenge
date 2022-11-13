import React, { MouseEventHandler } from "react";

// Material-UI
import Box from "@mui/material/Box";

// Material Styles
import { makeStyles } from "@mui/styles";

// ========================================================================================================

type ButtonHeaderActionType = {
	children?: JSX.Element;
	action?: MouseEventHandler;
};

const ButtonHeaderAction: React.FC<ButtonHeaderActionType> = ({ children, action }) => {
	const classes = useStyles();

	return (
		<Box color="inherit" aria-label="menu" onClick={action} className={classes.root} style={{}}>
			{children}
		</Box>
	);
};

export default ButtonHeaderAction;

// ========================================================================================================

const useStyles = makeStyles((theme) => ({
	root: {
		width: "31px",
		height: "31px",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",

		fontSize: "2rem",
		borderRadius: "10px",
		margin: "0px 0px 0px 10px",

		border: "1.5px solid rgb(229, 232, 236)",
		backgroundColor: "transparent",
		overflow: "visible",
	},
}));
