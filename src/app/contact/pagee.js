"use client";

import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from "@chakra-ui/react";
import {
	MdPhone,
	MdEmail,
	MdLocationOn,
	MdFacebook,
	MdOutlineEmail,
	MdOutlinePhone,
} from "react-icons/md";
import {
	BsGithub,
	BsDiscord,
	BsPerson,
	BsLinkedin,
	BsFacebook,
} from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};
export default function Contact() {
	return (
		<Container
			bg="#fff"
			maxW="full"
			mt={{ base: "15vh", sm: "8vh" }}
			centerContent
			overflow="hidden"
		>
			<Flex>
				<Flex
					align="center"
					bg="gray.200"
					minW={{ base: " 80vw", sm: "80vw" }}
					color="white"
					borderRadius="lg"
					m={{ sm: 4, md: 16, lg: 10 }}
					p={{ sm: 5, md: 5, lg: 16 }}
				>
					<Box p={4}>
						<Wrap
							spacing={{ base: 15, sm: 3, md: 5, lg: 40 }}
							margin="auto"
						>
							<WrapItem>
								<Box color="black">
									<Heading
										textTransform="uppercase"
										fontWeight="hairline"
									>
										Contact
									</Heading>

									<Box
										display={"flex"}
										align="center"
										justify={"start"}
										py={{ base: 5, sm: 5, md: 8, lg: 10 }}
									>
										<HStack
											pl={0}
											color="gray.500"
											display={"flex"}
											align="flex-start"
											justify={"start"}
											// alignItems="flex-start"
										>
											<Button
												size="sm"
												variant="ghost"
												justifyContent="start"
												transition={"all .5s  ease"}
												border={"1px solid transparent"}
												// color="#DCE2FF"
												_hover={{
													border: "1px solid #000",
												}}
												as="a"
												href="mailto:info@kohstudio.in"
												leftIcon={
													<MdEmail
														color="#1970F1"
														size="20px"
													/>
												}
											>
												info@kohstudio.in
											</Button>

											<Button
												as="a"
												href={"#"}
												size="sm"
												justifyContent="start"
												transition={"all .5s  ease"}
												variant="ghost"
												border={"1px solid transparent"}
												// color="#DCE2FF"
												_hover={{
													border: "1px solid #000",
												}}
												leftIcon={
													<BsFacebook color="blue" />
												}
											>
												Facebook
											</Button>

											<Button
												transition={"all .5s  ease"}
												as="a"
												href={"#"}
												justifyContent="start"
												size="sm"
												border={"1px solid transparent"}
												variant="ghost"
												// color="#DCE2FF"
												_hover={{
													border: "1px solid #000",
												}}
												leftIcon={
													<FiInstagram color="red" />
												}
											>
												Instagram
											</Button>

											<Button
												as="a"
												href={"#"}
												size="sm"
												transition={"all .5s  ease"}
												justifyContent="start"
												border={"1px solid transparent"}
												variant="ghost"
												// color="#DCE2FF"
												_hover={{
													border: "1px solid #000",
												}}
												leftIcon={
													<BsLinkedin color="teal" />
												}
											>
												LinkedIn
											</Button>
										</HStack>
									</Box>
								</Box>
							</WrapItem>
							<WrapItem>
								<Box
									bg="white"
									width={{ base: "300px", sm: "400px" }}
									borderRadius="lg"
								>
									<Box m={8} width="80%" color="#0B0E3F">
										<VStack spacing={2}>
											<FormControl id="name">
												<FormLabel>Your Name</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement pointerEvents="none">
														<BsPerson color="gray.800" />
													</InputLeftElement>
													<Input
														type="text"
														size="md"
													/>
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Mail</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement pointerEvents="none">
														<MdOutlineEmail color="gray.800" />
													</InputLeftElement>
													<Input
														type="text"
														size="md"
													/>
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Phone</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement pointerEvents="none">
														<MdOutlinePhone color="gray.800" />
													</InputLeftElement>
													<Input
														type="number"
														size="md"
													/>
												</InputGroup>
											</FormControl>
											<FormControl id="name">
												<FormLabel>Message</FormLabel>
												<Textarea
													borderColor="gray.300"
													_hover={{
														borderRadius:
															"gray.300",
													}}
													placeholder="message"
												/>
											</FormControl>
											<FormControl
												id="name"
												float="right"
											>
												<Button
													size="lg"
													width={"100%"}
													variant="solid"
													bg="black"
													color="white"
													_hover={{
														background: "gray.800",
													}}
												>
													Submit
												</Button>
											</FormControl>
										</VStack>
									</Box>
								</Box>
							</WrapItem>
						</Wrap>
					</Box>
				</Flex>
			</Flex>
		</Container>
	);
}
