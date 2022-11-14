import React, { useEffect, useState } from "react";

// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Data Tables
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

// Components
import DataGridInfoAction from "@Components/DataGrid/DataGridInfoAction/DataGridInfoAction";
import DataGridAction from "@Components/DataGrid/DataGridAction/DataGridAction";
import DataGridToolbar from "@Components/DataGrid/DataGridToolbar/DataGridToolbar";
import DataGridPagination from "@Components/DataGrid/DataGridPagination/DataGridPagination";

// Date Manipulation
import moment from "moment";

// HTTP
import axios from "axios";

// Redux
import { useSelector } from "react-redux";
import { IAppState } from "@Redux/rootReducer";

// ========================================================================================================

const columns = [
	{
		field: "idRow",
		headerName: "ID",
		flex: 0.3,
	},
	{
		field: "talentName",
		headerName: "Name",
		flex: 1.3,
		renderCell: ({ row, value }: GridCellParams) => {
			return (
				<>
					{row.talentName === "" ? (
						<Button
							variant="outlined"
							color="secondary"
							size="small"
							style={{ borderRadius: 20, color: "#ec691f", borderColor: "#ec691f" }}
						>
							Open Position
						</Button>
					) : (
						value
					)}
				</>
			);
		},
	},
	{
		field: "talentGrade",
		headerName: "Role",
		flex: 0.8,
		renderCell: ({ row, value }: GridCellParams) => {
			return (
				<>
					{row.talentName === "" ? (
						<Button
							variant="outlined"
							color="secondary"
							size="small"
							style={{ borderRadius: 20, color: "#ec691f", borderColor: "#ec691f" }}
						>
							Open Position
						</Button>
					) : (
						value
					)}
				</>
			);
		},
	},
	{
		field: "officeCity",
		headerName: "City",
		flex: 0.5,
	},
	{
		field: "officePostalCode",
		headerName: "Postal Code",
		flex: 0.5,
	},
	{
		field: "jobManagerName",
		headerName: "Manager",
		flex: 1,
	},
	{
		field: "clientName",
		headerName: "Client",
		flex: 0.5,
	},
	{
		field: "industry",
		headerName: "Industry",
		flex: 0.8,
	},
	{
		field: "totalHours",
		headerName: "Hours",
		flex: 0.4,
	},
	{
		field: "startDate",
		headerName: "Start Date",
		flex: 0.9,
	},
	{
		field: "endDate",
		headerName: "End Date",
		flex: 0.9,
	},
	{
		field: "action",
		headerName: "Action",
		flex: 0.6,
		renderCell: (params: GridCellParams) => (
			<DataGridAction
				// handleClickOpen={() => handleClickOpen(params)}
				handleClickOpen={() => console.log("hi")}
			/>
		),
	},
];

const Planning = () => {
	const pageFilterState = useSelector((state: IAppState) => state.planning.pageFilter);
	const sortByFilterState = useSelector((state: IAppState) => state.planning.sortByFilter);

	// ==============================
	//          State
	// ==============================

	const [dataResult, setDataResult] = useState([]);

	// ==============================
	//          Events
	// ==============================

	const getData = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/v1/plannings`, {
			params: {
				page: Number(pageFilterState),
				sort: sortByFilterState,
			},
		});
		setDataResult(data);
	};

	useEffect(() => {
		getData();
	}, [pageFilterState, sortByFilterState]);

	const rows = dataResult.map((result, index) => {
		return {
			id: result?._id,
			idRow: ++index,
			talentName: result?.talentName,
			talentGrade: result?.talentGrade,
			officeCity: result?.officeCity,
			officePostalCode: result?.officePostalCode,
			jobManagerName: result?.jobManagerName,
			clientName: result?.clientName,
			industry: result?.industry,
			totalHours: result?.totalHours,
			startDate: moment(result?.startDate).format("DD.MM.yyyy HH:mm"),
			endDate: moment(result?.endDate).format("DD.MM.yyyy HH:mm"),
		};
	});

	return (
		<Box style={{ height: 680, width: "100%" }}>
			<DataGridInfoAction title="Planning" path="/" action="hello" />

			<DataGrid
				columns={columns}
				rows={rows}
				components={{ Toolbar: DataGridToolbar, Pagination: DataGridPagination }}
			/>
		</Box>
	);
};

export default Planning;
