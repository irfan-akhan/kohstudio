"use client";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
	FcAbout,
	FcAssistant,
	FcCollaboration,
	FcDonate,
	FcManager,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
	return (
		<Box
			maxW={{ base: "full", md: "275px" }}
			w={"full"}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			p={5}
		>
			<Stack align={"start"} spacing={2}>
				<Flex
					w={16}
					h={16}
					align={"center"}
					justify={"center"}
					color={"white"}
					rounded={"full"}
					bg={useColorModeValue("gray.900", "gray.700")}
				>
					{icon}
				</Flex>
				<Box mt={2}>
					<Heading mb="2" size="md">
						{heading}
					</Heading>
					<Text mt={1} fontSize={"md"}>
						{description}
					</Text>
				</Box>
			</Stack>
		</Box>
	);
};

export default function Why() {
	return (
		<Box p={4} my="10">
			<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
				<Heading
					fontSize={{ base: "2xl", sm: "4xl" }}
					fontWeight={"bold"}
				>
					Why KohStudio?
				</Heading>
				<Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
					Our Expertise and Commitment to Your Success Sets Us Apart
				</Text>
			</Stack>

			<Container minW={"100vw"} mt={12}>
				<Flex flexWrap="wrap" gridGap={2} justify="center">
					<Card
						heading={"SUSTAINABLE"}
						icon={<Icon as={FcCollaboration} w={10} h={10} />}
						description={
							"Buildings that consume upto 75% lesser energy"
						}
						href={"#"}
					/>
					<Card
						heading={"OPTIMISED"}
						icon={<Icon as={FcDonate} w={10} h={10} />}
						description={
							"Resource Optimization through Integrated Project Delivery"
						}
						href={"#"}
					/>
					<Card
						heading={"LIVEABLE"}
						icon={<Icon as={FcAbout} w={10} h={10} />}
						description={"Building user-centric Smart environments"}
						href={"#"}
					/>
					<Card
						heading={"UNIQUE"}
						icon={<Icon as={FcAbout} w={10} h={10} />}
						description={
							"Client, climate & context-responsive design"
						}
						href={"#"}
					/>
				</Flex>
			</Container>
		</Box>
	);
}
