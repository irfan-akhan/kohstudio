"use client";

import {
	Box,
	Heading,
	Image,
	Text,
	Divider,
	HStack,
	Tag,
	Wrap,
	WrapItem,
	SpaceProps,
	useColorModeValue,
	Container,
	VStack,
	ButtonSpinner,
} from "@chakra-ui/react";
import ExpertiseCard from "./ExpertizeCard";

const Expertise = ({ order }) => {
	return (
		<Container maxW={"7xl"} p="12">
			<Heading as="h1" textAlign="center" textTransform="uppercase">
				Expertise
			</Heading>
			<ExpertiseCard heading="Commercial" order={1} />
			<ExpertiseCard heading="Residential" />
			<ExpertiseCard heading="hospitality" order={1} />
		</Container>
	);
};

export default Expertise;
