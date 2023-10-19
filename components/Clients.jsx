"use client"
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import image from "../public/google.png";

export default function Clients() {
	return (
		<Container maxW={"55rem"} my={20}>
			<Heading my={20} textAlign={"center"} textTransform="uppercase">
				Our Clients
			</Heading>
			<Flex
				flexWrap="wrap"
				gap={"100px"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
				<Flex direction="column" justify="center" align="center">
					<Image src={image} alt="icon" width={100} height={100} />
					<Text mt="3">title here</Text>
				</Flex>
			</Flex>
		</Container>
	);
}
