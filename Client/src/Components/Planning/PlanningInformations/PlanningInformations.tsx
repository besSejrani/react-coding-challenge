import React from "react";

// Material-UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

// Material Styles
import { makeStyles } from "@mui/styles";

// Material Icons
import PersonIcon from "@mui/icons-material/Person";

// ========================================================================================================

type Planning = {
	data: {
		talendId: string;
		talentName: string;
		talentGrade: string;
		totalHours: number;
	};
};

const PlanningInformations: React.FC<Planning> = ({ data }) => {
	const classes = useStyles();

	return (
		<>
			<Box id="informations" className={classes.root}>
				<Typography variant="h2" className={classes.title}>
					Informations
				</Typography>

				<Box>
					<List>
						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<PersonIcon />
								</Avatar>
							</ListItemAvatar>
							<Button
								variant="outlined"
								color="secondary"
								size="small"
								style={{ borderRadius: 20, color: "#ec691f", borderColor: "#ec691f" }}
							>
								ID:{data.talendId}
							</Button>
						</ListItem>

						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<PersonIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={data.talentName} />
						</ListItem>

						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<PersonIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={data.talentGrade} />
						</ListItem>

						<ListItem>
							<ListItemAvatar>
								<Avatar>
									<PersonIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={data.totalHours} />
						</ListItem>
					</List>
				</Box>
			</Box>

			<Divider className={classes.divider} />
		</>
	);
};

export default PlanningInformations;

// ========================================================================================================

const useStyles = makeStyles(() => ({
	root: {
		margin: "1rem 0rem 2rem 0rem",
	},

	title: {
		scrollMargin: "100rem 0px 0px 0px",
		margin: "0rem 0rem 2rem 0rem !important",
	},

	divider: {
		margin: "5rem 0rem",
	},
}));
