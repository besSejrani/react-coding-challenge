import React, { useState, useEffect } from "react";

// Material-UI
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MaterialLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// Material Styles
import { makeStyles } from "@mui/styles";

// Charts
import Area from "@Components/Charts/Area/Area";
import Pie from "@Components/Charts/Pie/Pie";
import HorizontalBar from "@Components/Charts/HorizontalBar/HorizontalBar";

// HTTP
import axios from "axios";

// Types
import { Dasboard } from "@Types/types";

// ========================================================================================================

const initialState = {
	industry: [
		{
			_id: "",
			total: 0,
		},
	],
	client: [
		{
			_id: "",
			total: 0,
		},
	],
	totalPlannings: 0,
	totalHours: 0,
	openPositions: 0,
};

const Dashboard = () => {
	const classes = useStyles();

	// ==============================
	//           State
	// ==============================
	const [dataResult, setDataResult] = useState<Dasboard>(initialState);

	// ==============================
	//          Events
	// ==============================

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/dashboard`);
		setDataResult(data);
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

				<Box className={classes.dataGroup}>
					<Paper>
						<Box className={classes.data}>
							<Typography variant="h5">{dataResult?.totalPlannings} Plannings</Typography>
						</Box>
					</Paper>
					<Paper>
						<Box className={classes.data}>
							<Typography variant="h5">{dataResult?.totalHours} Hours</Typography>
						</Box>
					</Paper>
					<Paper>
						<Box className={classes.data}>
							<Typography variant="h5">{dataResult?.openPositions} Open Positions</Typography>
						</Box>
					</Paper>
				</Box>

				<Box className={classes.chartGroup}>
					<Paper className={classes.chartRight}>
						<Box className={classes.chart}>
							<Box style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "100%" }}>
								<Typography variant="h5" style={{ margin: 20 }}>
									Top 10 Clients
								</Typography>

								<Box style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
									<Pie fetchedData={dataResult?.client} />
								</Box>
							</Box>
						</Box>
					</Paper>

					<Paper className={classes.chartRight}>
						<Box className={classes.chart}>
							<Box style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "100%" }}>
								<Typography variant="h5" style={{ margin: 20 }}>
									Top 5 Industries
								</Typography>

								<Box style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
									<Pie fetchedData={dataResult?.industry} />
								</Box>
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
		gridColumnGap: "2rem",
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
