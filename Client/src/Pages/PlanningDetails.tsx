import React, { useEffect, useState } from "react";

// Router
import { useParams } from "react-router-dom";

// Material UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";

// Material Lab
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Material Styles
import { makeStyles } from "@mui/styles";

// HTTP
import axios from "axios";

// Types
import { DataResult } from "@Types/types";

// Planning
import PlanningSidebar from "@Components/Planning/PlanningSidebar/PlanningSidebar";
import PlanningJob from "@Components/Planning/PlanningJob/PlanningJob";
import PlanningInformations from "@Components/Planning/PlanningInformations/PlanningInformations";
import PlanningManager from "@Components/Planning/PlanningManager/PlanningManager";
import PlanningSkills from "@Components/Planning/PlanningSkills/PlanningSkills";

// ========================================================================================================

const initialState = {
	bookingGrade: "",
	clientId: "",
	clientName: "",
	createdAt: "",
	endDate: "",
	industry: "",
	isUnassigned: false,
	jobManagerId: "",
	jobManagerName: "",
	officeCity: "",
	officePostalCode: "",
	operatingUnit: "",
	optionalSkills: [
		{
			name: "",
			category: "",
			_id: "",
		},
	],
	originalId: "",
	requiredSkills: [
		{
			name: "",
			category: "",
			_id: "",
		},
	],
	startDate: "",
	talentGrade: "",
	talentId: "",
	talentName: "",
	totalHours: 0,
	updatedAt: "",
	__v: 0,
	_id: "",
};

const PlanningDetails = () => {
	const classes = useStyles();

	// Router
	const { id } = useParams();

	// ==============================
	//           State
	// ==============================
	const [dataResult, setDataResult] = useState<DataResult>(initialState);
	const [value, setValue] = React.useState("1");

	// ==============================
	//          Events
	// ==============================
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/planning/${id}`, {
			params: {
				id,
			},
		});
		setDataResult(data);
	};

	const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};

	console.log("data", dataResult);

	return (
		<Container maxWidth="xl">
			<Box className={classes.root}>
				<PlanningSidebar id={id} />

				<Card className={classes.userDataCard}>
					<PlanningInformations
						data={{
							talendId: dataResult.talentId,
							talentName: dataResult.talentName,
							talentGrade: dataResult.talentGrade,
							totalHours: dataResult.totalHours,
						}}
					/>

					<PlanningJob
						data={{
							clientId: dataResult.clientId,
							clientName: dataResult.clientName,
							industry: dataResult.industry,
							isUnassigned: dataResult.isUnassigned,
							operatingUnit: dataResult.operatingUnit,
							officeCity: dataResult.officeCity,
							officePostalCode: dataResult.officePostalCode,
						}}
					/>

					<PlanningManager
						data={{
							jobManagerId: dataResult.jobManagerId,
							jobManagerName: dataResult.jobManagerName,
						}}
					/>

					<PlanningSkills
						data={{
							requiredSkills: dataResult.requiredSkills,
							optionalSkills: dataResult.optionalSkills,
						}}
					/>
				</Card>
			</Box>
		</Container>
	);
};

export default PlanningDetails;

// ========================================================================================================

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		justifyContent: "center",
		height: "100%",
		margin: "0px 0px 50px 0px",
	},

	userDataCard: {
		borderRadius: 15,
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "60%",
		padding: "2rem",
		boxSizing: "border-box",
	},
}));
