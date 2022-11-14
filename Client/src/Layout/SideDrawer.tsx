import React, { useState, useEffect, useRef } from "react";

// Router
import { Link } from "react-router-dom";

// Material UI
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

// Material Styles
import { ZIndex } from "@mui/material/styles/zIndex";
import { Spacing } from "@mui/system";
import { makeStyles } from "@mui/styles";

// Icons
import LightMode from "@mui/icons-material/Brightness4";
import DarkMode from "@mui/icons-material/BrightnessHigh";
import HomeIcon from "@mui/icons-material/Home";
import GithubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Public";
import InstallIcon from "@mui/icons-material/GetApp";
import TranslateIcon from "@mui/icons-material/Translate";
import SearchIcon from "@mui/icons-material/Search";
import QueueIcon from "@mui/icons-material/Queue";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer, toggleTheme } from "@Redux/ui/uiAction";
import { IAppState } from "@Redux/rootReducer";

// ========================================================================================================

type Anchor = "left";

const SideDrawer: React.FC = () => {
	const classes = useStyles();
	const [installable, setInstallable] = useState(false);

	let defferedPrompt: any = useRef(null);
	const dispatch = useDispatch();

	const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);
	const isSideDrawerOpen = useSelector((state: IAppState) => state.ui.isSideDrawerOpen);

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (event) => {
			event.preventDefault();
			defferedPrompt.current = event;
			setInstallable(true);
		});

		window.addEventListener("appinstalled", () => {
			console.log("INSTALL: Success");
		});
	}, [installable]);

	const handleInstallClick = () => {
		if (defferedPrompt) {
			defferedPrompt.current.prompt();

			defferedPrompt.current.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === "dismissed") {
					console.log("user cancelled installation");
				} else {
					console.log("user added to homescreen");
					defferedPrompt.current = null;
					setInstallable(false);
				}
			});
		}
	};

	const list = (anchor: Anchor) => (
		<div className={classes.list}>
			<CardMedia component={Link} to="/" className={classes.imdb} title="Contemplative Reptile" />
			<Divider />
			{
				<List subheader={<ListSubheader>Links</ListSubheader>}>
					<ListItem button component={Link} to="/">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>

					<ListItem button component={Link} to="/search">
						<ListItemIcon>
							<SearchIcon />
						</ListItemIcon>
						<ListItemText primary="Search" />
					</ListItem>

					<ListItem button component={Link} to="/watchlist">
						<ListItemIcon>
							<QueueIcon />
						</ListItemIcon>
						<ListItemText primary="Watch List" />
					</ListItem>
				</List>
			}

			<Divider />

			<List subheader={<ListSubheader>Settings</ListSubheader>}>
				<ListItem>
					<ListItemIcon>{isDarkTheme ? <DarkMode /> : <LightMode />}</ListItemIcon>
					<ListItemText id="switch-list-label-bluetooth" primary="Dark Mode" />
					<ListItemSecondaryAction>
						<Switch
							checked={isDarkTheme}
							onChange={() => dispatch(toggleTheme())}
							edge="end"
							inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
						/>
					</ListItemSecondaryAction>
				</ListItem>

				{installable && (
					<ListItem>
						<ListItemIcon>
							<InstallIcon />
						</ListItemIcon>
						<ListItemText id="switch-list-label-bluetooth" primary="Install PWA" />
						<ListItemSecondaryAction>
							<Switch
								onChange={handleInstallClick}
								edge="end"
								inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				)}

				<ListItem>
					<ListItemIcon>{<TranslateIcon />}</ListItemIcon>
					<FormControl className={classes.formControl}>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select" /* value={age} onChange={handleChange} */
						>
							<MenuItem value={10}>English</MenuItem>
							<MenuItem value={20}>Français</MenuItem>
							<MenuItem value={30}>Deutsch</MenuItem>
						</Select>
					</FormControl>
				</ListItem>
			</List>
			<Divider />

			<List subheader={<ListSubheader>Resources</ListSubheader>}>
				<ListItem button component={"a"} href="https://github.com/besSejrani">
					<ListItemIcon>
						<GithubIcon />
					</ListItemIcon>
					<ListItemText primary="Github" />
				</ListItem>

				<ListItem button component={"a"} href="https://www.themoviedb.org/">
					<ListItemIcon>
						<WebIcon />
					</ListItemIcon>
					<ListItemText primary="TMDB" />
				</ListItem>
			</List>
			<Divider />
		</div>
	);

	return (
		<div>
			{(["left"] as Anchor[]).map((anchor) => (
				<React.Fragment key={anchor}>
					<Drawer anchor={anchor} open={isSideDrawerOpen} onClose={() => dispatch(toggleSideDrawer())}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default SideDrawer;

// ========================================================================================================

interface MyTheme {
	zIndex: ZIndex;
	spacing: Spacing;
}

const useStyles = makeStyles((theme: MyTheme) => ({
	list: {
		width: 250,
		margin: "0px 250px 0px 0px",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 150,
	},
	imdb: {
		height: "53px",
		width: "50%",
		margin: "30px 20px",
	},
}));
