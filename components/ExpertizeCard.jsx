"use client";

import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Image,
	Tag,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import data from "../lib/data.json";
import { useRouter } from "next/navigation";
const BlogTags = (props) => {
	const { marginTop = 0, tags } = props;

	return (
		<HStack spacing={2} marginTop={marginTop}>
			{tags.map((tag) => {
				return (
					<Tag
						textTransform="capitalize"
						size={"md"}
						variant="solid"
						bgColor="#000"
						key={tag}
					>
						{tag}
					</Tag>
				);
			})}
		</HStack>
	);
};
export default function ExpertiseCard({
	order,
	heading,
	text,
	showLinkButton = true,
	animationType,
}) {
	const router = useRouter();
	return (
		<Flex
			data-aos={animationType}
			data-aos-anchor-placement="top-center"
			marginTop={{ base: "1", sm: "5" }}
			display="flex"
			padding="4"
			flexDirection={{
				base: "column",
				sm: order ? "row-reverse" : "row",
			}}
			justifyContent="space-between"
		>
			<Box
				display="flex"
				flex="1"
				marginRight="3"
				position="relative"
				alignItems="center"
			>
				<Box
					width={{ base: "100%", sm: "85%" }}
					zIndex="2"
					marginLeft={{ base: "0", sm: "5%" }}
					marginTop="5%"
				>
					<Box
						data-aos={animationType}
						data-aos-delay="400"
						textDecoration="none"
						_hover={{ textDecoration: "none" }}
					>
						<Image
							borderRadius="lg"
							src={
								data?.[heading?.toLowerCase()][0]
									? data?.[heading?.toLowerCase()][0].banner
									: ""
							}
							alt="some good alt text"
							objectFit="contain"
						/>
					</Box>
				</Box>
				<Box zIndex="1" width="100%" position="absolute" height="100%">
					<Box
						bgGradient={useColorModeValue(
							"radial(orange.600 1px, transparent 1px)",
							"radial(orange.300 1px, transparent 1px)"
						)}
						backgroundSize="20px 20px"
						opacity="0.4"
						height="100%"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				flex="1"
				flexDirection="column"
				justifyContent="center"
				marginTop={{ base: "3", sm: "0" }}
			>
				<BlogTags tags={["Engineering", heading]} />
				<Heading
					marginTop="4"
					textTransform={"uppercase"}
					textDecoration="none"
					fontWeight="400"
					letterSpacing="-0.5px"
					_hover={{ textDecoration: "none" }}
				>
					{heading}
				</Heading>
				<Text
					marginTop="2"
					color={useColorModeValue("gray.700", "gray.200")}
					fontSize="lg"
					width={{base:"100%"}}
					padding={{base:"0"}}
				>
					{text
						? text
						: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry &apos;s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
				</Text>
				{showLinkButton && (
					<Button
						size="md"
						my="5"
						color="#fff"
						bg="#000"
						fontWeight={"light"}
						width={{ base: "50%" }}
						onClick={() => {
							router.push(`/work/${heading.toLowerCase()}`);
						}}
						_hover={{ bg: "black.500" }}
					>
						View
					</Button>
				)}
			</Box>
		</Flex>
	);
}
