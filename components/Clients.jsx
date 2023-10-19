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
				<Flex direction="column" align="center">
					<Image
						src="/clients/cie.png"
						alt="icon"
						width={100}
						height={100}
					/>
					<Text mt="3">CIE</Text>
				</Flex>
				<Flex direction="column" align="center">
					<Image
						src="/clients/alpine.png"
						alt="icon"
						width={100}
						height={100}
					/>
					<Text mt="3">Hotel Alpine Ridge</Text>
				</Flex>
				<Flex direction="column" align="center">
					<Image
						src="/clients/pahalgam_hotel.jpg"
						alt="icon"
						width={100}
						height={100}
					/>
					<Text mt="3">The Pahalgam Hotel</Text>
				</Flex>
				<Flex direction="column" align="center">
					<Image
						src="/clients/ia.png"
						alt="icon"
						width={70}
						height={70}
					/>
					<Text mt="3">IA Multiventures</Text>
				</Flex>
				<Flex direction="column" align="center">
					<Image
						src="/clients/rawafid.jpg"
						alt="icon"
						width={100}
						height={100}
					/>
					<Text mt="3">Rawafid Synergy</Text>
				</Flex>
				<Flex direction="column" align="center">
					<Image
						src="/clients/shaw.webp"
						alt="icon"
						width={100}
						height={100}
					/>
					<Text mt="3">The Shaw</Text>
				</Flex>
			</Flex>
		</Container>
	);
}
