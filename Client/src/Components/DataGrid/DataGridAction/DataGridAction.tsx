import React from "react";

// Next
// import { useRouter } from "next/router";

// Material-UI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import ModifyIcon from "@mui/icons-material/Create";

// ========================================================================================================

interface DataGridActionType {
	handleClickOpen: () => void;
	path?: string;
	deleteOnly?: boolean;
}

const DataGridAction: React.FC<DataGridActionType> = ({ path, handleClickOpen, deleteOnly = false }) => {
	// const router = useRouter();

	return (
		<>
			{deleteOnly ? (
				<Box>
					<IconButton edge="start" onClick={() => handleClickOpen()} size="large">
						<DeleteIcon />
					</IconButton>
				</Box>
			) : (
				<Box>
					<IconButton
						edge="start"
						// onClick={() => router.push(`${path}`)}
						size="large"
					>
						<ModifyIcon />
					</IconButton>

					<IconButton onClick={() => handleClickOpen()} size="large">
						<DeleteIcon />
					</IconButton>
				</Box>
			)}
		</>
	);
};

export default DataGridAction;
