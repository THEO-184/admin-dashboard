import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../theme";

const Badge = ({ access }: { access: string }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box
			width={"60%"}
			m="0 auto"
			p="5px"
			display={"flex"}
			justifyContent="center"
			sx={{
				backgroundColor: () =>
					access === "admin"
						? colors.greenAccent[600]
						: colors.greenAccent[700],
			}}
			borderRadius="4px"
		>
			{access === "admin" && <AdminPanelSettingsOutlinedIcon />}
			{access === "manager" && <SecurityOutlinedIcon />}
			{access === "user" && <LockOpenOutlinedIcon />}
			<Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
				{access}
			</Typography>
		</Box>
	);
};

export default Badge;
