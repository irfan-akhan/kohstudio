import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FeedCard from "./FeedCard";

const Feed = () => {
	return (
		<Box my="10" p="20" width="90vw" bgColor="blue">
			<Heading as="h2" textAlign="center">
				Social Feed
			</Heading>
			<Flex p="10" my="16">
				<FeedCard />
			</Flex>
		</Box>
	);
};

export default Feed;
