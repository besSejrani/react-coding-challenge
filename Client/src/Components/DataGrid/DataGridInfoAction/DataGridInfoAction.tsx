import React from "react";

// Next
import { useNavigate } from "react-router-dom";

// Material-UI
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MaterialLink from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

// Material Styles
import { makeStyles } from "@mui/styles";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { pageFilter, sortByFilter } from "@Redux/planning/planningAction";
import { IAppState } from "@Redux/rootReducer";

// ========================================================================================================

interface DataGridInfoActionType {
	title: string;
	action?: string;
	path?: string;
}

const itemsPerPage = [
	{
		value: "10",
		label: "10",
	},
	{
		value: "25",
		label: "25",
	},
	{
		value: "50",
		label: "50",
	},
	{
		value: "100",
		label: "100",
	},
];

const sort = [
	{
		value: "No Sorting",
		label: "No Sorting",
	},
	{
		value: "officeCity",
		label: "city",
	},
	{
		value: "industry",
		label: "industry",
	},
	{
		value: "talentGrade",
		label: "role",
	},
];

const DataGridInfoAction: React.FC<DataGridInfoActionType> = ({ title, action, path }) => {
	// Styling
	const classes = useStyles();

	// Router
	const navigate = useNavigate();

	// Redux
	const dispatch = useDispatch();
	const pageFilterState = useSelector((state: IAppState) => state.planning.pageFilter);
	const sortByFilterState = useSelector((state: IAppState) => state.planning.sortByFilter);

	// ==============================
	//          State
	// ==============================

	const [pages, setPages] = React.useState<string>(pageFilterState);
	const [sortBy, setSortBy] = React.useState<string>(sortByFilterState);

	// ==============================
	//          Events
	// ==============================

	const handleSort = async (event: React.ChangeEvent<HTMLInputElement>) => {
		await setSortBy(event.target.value);
		await dispatch(sortByFilter(sortBy));
		await navigate(`/planning?page=${pages}&sort=${sortBy}`);
	};

	const handlePages = async (event: React.ChangeEvent<HTMLInputElement>) => {
		await setPages(event.target.value);
		await dispatch(pageFilter(pages));
		await navigate(`/planning?page=${pages}&sort=${sortBy}`);
	};

	return (
		<Box className={classes.header}>
			<Box>
				<Typography variant="h5" style={{ margin: "0px 0px 10px 0px" }}>
					{title}
				</Typography>

				<Breadcrumbs aria-label="breadcrumb">
					<MaterialLink href="/">Administration</MaterialLink>
					<MaterialLink color="inherit" href="/components/breadcrumbs/" aria-current="page">
						{title}
					</MaterialLink>
				</Breadcrumbs>
			</Box>

			<Box>
				<TextField
					id="outlined-select-currency"
					select
					label="Sort by"
					value={sortBy}
					onChange={handleSort}
					sx={{ width: "10rem", margin: "0rem 1rem 0rem 0rem" }}
				>
					{sort.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>

				<TextField
					id="outlined-select-currency"
					select
					label="Items per page"
					value={pages}
					onChange={handlePages}
					sx={{ width: "10rem" }}
				>
					{itemsPerPage.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Box>
		</Box>
	);
};

export default DataGridInfoAction;

// ========================================================================================================

const useStyles = makeStyles(() => ({
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0px 0px 50px 0px",
	},
}));
