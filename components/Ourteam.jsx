"use client";
import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Container,
} from "@chakra-ui/react";

const IMAGE =
	"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg";

export default function ProductSimple() {
	return (
		<Container maxW={"100vw"} my={20}>
			<Heading textAlign={"center"} my={10}>
				Our Team
			</Heading>

			<Center py={12} gap={20}>
				<Box
					role={"group"}
					p={6}
					maxW={"330px"}
					w={"full"}
					bg={useColorModeValue("white", "gray.800")}
					boxShadow={"2xl"}
					rounded={"lg"}
					pos={"relative"}
					zIndex={1}
				>
					<Box
						rounded={"lg"}
						mt={-12}
						pos={"relative"}
						height={"230px"}
						_after={{
							transition: "all .3s ease",
							content: '""',
							w: "full",
							h: "full",
							pos: "absolute",
							top: 5,
							left: 0,
							backgroundImage: `url(${IMAGE})`,
							filter: "blur(15px)",
							zIndex: -1,
						}}
						_groupHover={{
							_after: {
								filter: "blur(20px)",
							},
						}}
					>
						<Image
							rounded={"lg"}
							height={230}
							width={282}
							objectFit={"cover"}
							src={IMAGE}
							alt="#"
						/>
					</Box>
					<Stack pt={10} align={"center"}>
						<Text
							color={"gray.500"}
							fontSize={"sm"}
							textTransform={"uppercase"}
						>
							Danish
						</Text>
						<Heading
							fontSize={"2xl"}
							fontFamily={"body"}
							fontWeight={500}
						>
							Mandibal, Nowshehra
						</Heading>
					</Stack>
				</Box>
				<Box
					role={"group"}
					p={6}
					maxW={"330px"}
					w={"full"}
					bg={useColorModeValue("white", "gray.800")}
					boxShadow={"2xl"}
					rounded={"lg"}
					pos={"relative"}
					zIndex={1}
				>
					<Box
						rounded={"lg"}
						mt={-12}
						pos={"relative"}
						height={"230px"}
						_after={{
							transition: "all .3s ease",
							content: '""',
							w: "full",
							h: "full",
							pos: "absolute",
							top: 5,
							left: 0,
							backgroundImage: `url(${IMAGE})`,
							filter: "blur(15px)",
							zIndex: -1,
						}}
						_groupHover={{
							_after: {
								filter: "blur(20px)",
							},
						}}
					>
						<Image
							rounded={"lg"}
							height={230}
							width={282}
							objectFit={"cover"}
							src={IMAGE}
							alt="#"
						/>
					</Box>
					<Stack pt={10} align={"center"}>
						<Text
							color={"gray.500"}
							fontSize={"sm"}
							textTransform={"uppercase"}
						>
							Rakib
						</Text>
						<Heading
							fontSize={"2xl"}
							fontFamily={"body"}
							fontWeight={500}
						>
							Mandibal, Nowshehra
						</Heading>
					</Stack>
				</Box>
				<Box
					role={"group"}
					p={6}
					maxW={"330px"}
					w={"full"}
					bg={useColorModeValue("white", "gray.800")}
					boxShadow={"2xl"}
					rounded={"lg"}
					pos={"relative"}
					zIndex={1}
				>
					<Box
						rounded={"lg"}
						mt={-12}
						pos={"relative"}
						height={"230px"}
						_after={{
							transition: "all .3s ease",
							content: '""',
							w: "full",
							h: "full",
							pos: "absolute",
							top: 5,
							left: 0,
							backgroundImage: `url(${IMAGE})`,
							filter: "blur(15px)",
							zIndex: -1,
						}}
						_groupHover={{
							_after: {
								filter: "blur(20px)",
							},
						}}
					>
						<Image
							rounded={"lg"}
							height={230}
							width={282}
							objectFit={"cover"}
							src={IMAGE}
							alt="#"
						/>
					</Box>
					<Stack pt={10} align={"center"}>
						<Text
							color={"gray.500"}
							fontSize={"sm"}
							textTransform={"uppercase"}
						>
							Aqib
						</Text>
						<Heading
							fontSize={"2xl"}
							fontFamily={"body"}
							fontWeight={500}
						>
							Mandibal, Nowshehra
						</Heading>
					</Stack>
				</Box>
			</Center>
		</Container>
	);
}
