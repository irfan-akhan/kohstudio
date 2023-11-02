"use client";

import Head from "next/head";
import {
	Box,
	Heading,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const introPictureVariants = {
	hide: {
		opacity: 0,
		x: 500,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 2,
		},
	},
};
const introHeaderVariants = {
	hide: {
		opacity: 0,
		x: -500,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 2,
		},
	},
};
export default function HeroBanner() {
	return (
		<Container
			mt="10vh"
			minH="90vh"
			minW="100vw"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			background="url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)"
		>
			{/* <Stack
				as={Box}
				textAlign={"center"}
				color={"white"}
				spacing={{ base: 8, md: 14 }}
				py={{ base: 20, md: 36 }}
			>
				<motion.div
					initial="hide"
					whileInView="show"
					exit="hide"
					variants={introHeaderVariants}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
						textTransform="uppercase"
					>
						Koh Studios <br />
						<Text as={"span"}>We realise your dreams</Text>
					</Heading>
				</motion.div>
				<motion.div
					initial="hide"
					whileInView="show"
					exit="hide"
					variants={introPictureVariants}
				>
					<Text maxW={{ base: "80vw", md: "60vw" }} mx="auto">
						Monetize your content by charging your most loyal
						readers and reward them loyalty points. Give back to
						your loyal readers by granting them access to your
						pre-releases and sneak-peaks.
					</Text>
				</motion.div>
			</Stack> */}
		</Container>
	);
}


