import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

import Header from "../../components/Header";
import Badge from "../../components/Badge";

const Team = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns: GridColDef[] = [
		{
			field: "id",
			headerName: "ID",
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "phone",
			headerName: "phone Number",
			flex: 1,
		},
		{
			field: "access",
			headerName: "access Level",
			headerAlign: "center",
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return <Badge access={access} />;
			},
		},
	];

	return (
		<Box m={"20px"}>
			<Header title="TEAM" subtitle="Managing the Team Members" />
			<Box
				m={"40px 0 0 0"}
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						backgroundColor: colors.blueAccent[700],
						borderTop: "none",
					},
				}}
			>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
};

export default Team;
