import React, { useState } from "react";
import {
	Sidebar as ProSideBar,
	Menu,
	MenuItem,
	SubMenu,
} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import UserProfile from "../../assets/user.jpeg";
import { tokens } from "../../theme";
import Item from "../../components/Item";

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");
	return (
		<Box
			sx={{
				// overflowY: "auto",
				// overflowX: "hidden",
				background: "#1f2a40 !important",
				fontFamily: "Source Sans Pro",
				"& .menu-item.active": {
					background: "transparent !important",
				},
				"& .menu-anchor": {
					background: "transparent !important",
				},
				"& .menu-anchor:hover": {
					background: "transparent !important",
					color: "#868dfb !important",
				},
				"& .sidebar-inner": {
					minHeight: "100% !important",
					background: "#1f2a40 !important",
				},
			}}
		>
			<ProSideBar defaultCollapsed={isCollapsed}>
				<Menu>
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: "#fcfcfc",
						}}
					>
						{!isCollapsed && (
							<Box
								display={"flex"}
								justifyContent="space-between"
								alignItems={"center"}
								ml="15px"
							>
								<Typography style={{ color: "#fcfcfc" }}>ADMIN</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>

					{/* USER */}
					{!isCollapsed && (
						<Box mb={"25px"}>
							<Box
								display={"flex"}
								justifyContent="center"
								alignItems={"center"}
							>
								<img
									src={UserProfile}
									alt="profile-user"
									width={"100px"}
									height="100px"
									style={{ cursor: "pointer", borderRadius: "50%" }}
								/>
							</Box>
							<Box textAlign={"center"}>
								<Typography
									variant="h2"
									color={"#fcfcfc"}
									fontWeight="bold"
									sx={{ m: "10px 0 0 0" }}
								>
									Theo Boakye
								</Typography>
								<Typography variant="h5" color={colors.greenAccent[500]}>
									Frontend Developer
								</Typography>
							</Box>
						</Box>
					)}

					{/* MENU ITEMS */}
					<Box paddingLeft={isCollapsed ? undefined : "10px"}>
						<Item
							icon={<HomeOutlinedIcon />}
							title={"Dashboard"}
							to={"/"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color="#c2c2c2"
							sx={{ m: "15px 0 5px 20px" }}
						>
							Data
						</Typography>
						<Item
							icon={<PeopleOutlinedIcon />}
							title={"Manage Team"}
							to={"/team"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							icon={<ContactsOutlinedIcon />}
							title={"Contacts Information"}
							to={"/contacts"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							icon={<ReceiptOutlinedIcon />}
							title={"Invoices Balances"}
							to={"/invoices"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color="#c2c2c2"
							sx={{ m: "15px 0 5px 20px" }}
						>
							Pages
						</Typography>
						<Item
							icon={<PeopleOutlinedIcon />}
							title={"Profile Form"}
							to={"/form"}
							selected={selected}
							setSelected={setSelected}
						/>

						<Item
							icon={<CalendarTodayOutlinedIcon />}
							title={"Calender"}
							to={"/calender"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							icon={<HelpOutlinedIcon />}
							title={"FAQ Page"}
							to={"/faq"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							icon={<BarChartOutlinedIcon />}
							title={"Bar Chart"}
							to={"/bar"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant="h6"
							color="#c2c2c2"
							sx={{ m: "15px 0 5px 20px" }}
						>
							Charts
						</Typography>
						<Item
							icon={<PieChartOutlineOutlinedIcon />}
							title={"Pie Chart"}
							to={"/pie"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							icon={<TimelineOutlinedIcon />}
							title={"Line Chart"}
							to={"/line"}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							icon={<TimelineOutlinedIcon />}
							title={"Geopgraphy Chart"}
							to={"/geography"}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSideBar>
		</Box>
	);
};

export default Sidebar;
