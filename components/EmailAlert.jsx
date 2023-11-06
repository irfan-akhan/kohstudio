import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
} from "@chakra-ui/react";
import React from "react";

export const EmailAlert = ({ status, title, text }) => {
	return (
		<Alert status={status}>
			<AlertIcon />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{text}</AlertDescription>
		</Alert>
	);
};
