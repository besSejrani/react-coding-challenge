import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// Icon
import DashboardIcon from "@mui/icons-material/ShowChart";
import PeopleIcon from "@mui/icons-material/PeopleSharp";
import EventIcon from "@mui/icons-material/Event";

// ========================================================================================================

const drawerWidth = 200;

const SidebarAdmin = () => (
	<Box>
		<CssBaseline />
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar />

			<List subheader={<ListSubheader>Dashboard</ListSubheader>} sx={{ bgcolor: "background.paper" }}>
				<Link to="/">
					<ListItem key="statistics" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography component="span" variant="body1" color="text.primary">
										Statistics
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				</Link>
			</List>

			<List subheader={<ListSubheader>Management</ListSubheader>} sx={{ bgcolor: "background.paper" }}>
				<Link to="/planning">
					<ListItem key="planning" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<EventIcon />
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography component="span" variant="body1" color="text.primary">
										Planning
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				</Link>
			</List>
		</Drawer>
	</Box>
);

export default SidebarAdmin;
