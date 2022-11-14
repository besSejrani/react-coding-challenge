import React, { useState } from "react";

// Material-UI
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MaterialLink from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// Material Styles
import { makeStyles } from "@mui/styles";

// Charts
import Area from "@Components/Charts/Area/Area";
import Pie from "@Components/Charts/Pie/Pie";
import HorizontalBar from "@Components/Charts/HorizontalBar/HorizontalBar";

// ========================================================================================================

const Dashboard = () => {
	const classes = useStyles();

	// ==============================
	//          State
	// ==============================
	const [open, setOpen] = useState(false);
	const [product, setProduct] = useState(null);

	// ==============================
	//          Events
	// ==============================
	const handleClickOpen = (params) => {
		setOpen(true);

		setProduct(params);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box className={classes.root}>
			<Box style={{ width: "100%" }}>
				<Box className={classes.header}>
					<Box>
						<Typography variant="h5" style={{ margin: "0px 0px 10px 0px" }}>
							Dashboard
						</Typography>

						<Breadcrumbs aria-label="breadcrumb">
							<MaterialLink>Administration</MaterialLink>
							<MaterialLink color="inherit" aria-current="page">
								Dashboard
							</MaterialLink>
						</Breadcrumbs>
					</Box>
				</Box>

				<Paper className={classes.dataGroup}>
					<Box className={classes.data}>
						<Typography variant="h5">Fake</Typography>
					</Box>
					<Box className={classes.data} style={{ borderLeft: "1px solid #d4d4d4", borderRight: "1px solid #d4d4d4" }}>
						<Typography variant="h5">Fake</Typography>
					</Box>
					<Box className={classes.data}>
						<Typography variant="h5">Fake</Typography>
					</Box>
				</Paper>

				<Box className={classes.chartGroup}>
					<Paper className={classes.chartLeft}>
						<Box className={classes.chart}>
							<Box style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
								<Typography variant="h5" style={{ margin: 20 }}>
									Fake
								</Typography>
								<Area />
							</Box>
						</Box>
					</Paper>
					<Paper className={classes.chartRight}>
						<Box className={classes.chart}>
							<Box style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "100%" }}>
								<Typography variant="h5" style={{ margin: 20 }}>
									Fake
								</Typography>
								<Pie />
							</Box>
						</Box>
					</Paper>
				</Box>

				<Box className={classes.chartGroup}>
					<Paper className={classes.chartLeft}>
						<Box className={classes.chart}>
							<Box style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
								<Typography variant="h5" style={{ margin: 20 }}>
									Fake
								</Typography>
								<HorizontalBar />
							</Box>
						</Box>
					</Paper>
					<Paper className={classes.chartRight}>
						<Box className={classes.chart}>
							<Box style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
								<Typography variant="h5" style={{ margin: 20 }}>
									Fake
								</Typography>
								<HorizontalBar />
							</Box>
						</Box>
					</Paper>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;

// ========================================================================================================

const useStyles = makeStyles(() => ({
	root: {
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		display: "flex",
		margin: "0px 0px 50px 0px",
		justifyContent: "space-between",
	},

	dataGroup: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr 1fr",
		margin: "20px 0px",
		borderRadius: 20,
	},

	data: {
		display: "flex",
		width: "100%",
		height: "100px",
		justifyContent: "center",
		alignItems: "center",
	},

	chartGroup: {
		display: "grid",
		gridTemplateColumns: "3fr 2fr",
		rowGap: 20,
		columnGap: 20,
		margin: "20px 0px",
	},

	chartLeft: {
		height: 600,
		borderRadius: 20,
	},

	chartRight: {
		height: 600,
		borderRadius: 20,
	},

	chart: {
		display: "flex",
		width: "100%",
		height: "100%",
	},
}));
