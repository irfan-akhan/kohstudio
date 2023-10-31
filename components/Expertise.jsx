"use client";

import {
	Heading,
	Container,
} from "@chakra-ui/react";
import ExpertiseCard from "./ExpertizeCard";

const Expertise = ({ order }) => {
	return (
		<Container maxW={"7xl"} p="12">
			<Heading as="h1" textAlign="center" textTransform="uppercase">
				Expertise
			</Heading>
			<ExpertiseCard
				heading="Commercial"
				order={1}
				animationType="fade-left"
			/>
			<ExpertiseCard heading="Residential" animationType="fade-right" />
			<ExpertiseCard
				heading="hospitality"
				order={1}
				animationType="fade-left"
			/>
		</Container>
	);
};

export default Expertise;
