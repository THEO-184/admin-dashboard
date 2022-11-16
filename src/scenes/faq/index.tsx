import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const accordingStyles = {
		"& .MuiAccordion-root": {
			backgroundColor: colors.primary[400],
			mb: "10px",
		},
	};

	return (
		<Box m={"20px"} sx={{ ...accordingStyles }}>
			<Header title="FAQ" subtitle="Frequently Asked Questions Page" />
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						An Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
						earum?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Second Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
						earum?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Third Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
						earum?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Fourth Important question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
						earum?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default FAQ;
