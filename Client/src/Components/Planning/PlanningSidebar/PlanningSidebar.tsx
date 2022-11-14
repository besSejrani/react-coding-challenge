import React from "react";

// Router
import { Link } from "react-router-dom";

// Material-UI
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Material Styles
import { makeStyles } from "@mui/styles";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";

// ========================================================================================================

const PlanningSidebar = ({ id }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<a href={`/planning/${id}/#informations`}>
					<ListItem button>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary="Informations" />
					</ListItem>
				</a>

				<a href={`/planning/${id}/#job`}>
					<ListItem button>
						<ListItemIcon>
							<AccountBalanceWalletIcon />
						</ListItemIcon>
						<ListItemText primary="Job" />
					</ListItem>
				</a>

				<a href={`/planning/${id}/#manager`}>
					<ListItem button>
						<ListItemIcon>
							<LocalShippingIcon />
						</ListItemIcon>
						<ListItemText primary="Manager" />
					</ListItem>
				</a>

				<a href={`/planning/${id}/#skills`}>
					<ListItem button>
						<ListItemIcon>
							<LockIcon />
						</ListItemIcon>
						<ListItemText primary="Skills" />
					</ListItem>
				</a>
			</List>
		</Card>
	);
};

export default PlanningSidebar;

// ========================================================================================================

const useStyles = makeStyles(() => ({
	root: {
		position: "sticky",
		top: "85px",
		maxWidth: "250px",
		height: "100%",
		marginRight: "3.5rem",
		borderRadius: 10,
	},
}));
