import { colors, Typography } from "@mui/material";
import React from "react";
import {
	Sidebar as ProSideBar,
	Menu,
	MenuItem,
	SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
	title: string;
	to: string;
	icon: React.ReactNode;
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item = ({ title, to, icon, selected, setSelected }: Props) => {
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}
		>
			<Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
				{" "}
				<Typography>{title}</Typography>
			</Link>
		</MenuItem>
	);
};

export default Item;
