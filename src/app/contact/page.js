import {
	Container,
	Flex,
	Heading,
	VStack,
	HStack,
	Text,
	Divider,
	Link,
	FormControl,
	InputLeftElement,
	InputGroup,
	FormLabel,
	Input,
	Textarea,
	Button,
} from "@chakra-ui/react";
import React from "react";
import Page from "./pagee";
import { BsFacebook, BsLinkedin, BsPerson } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const Contact = () => {
	return (
		<Container
			mt="15vh"
			minH="150vh"
			minW="100vw"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			background="url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)"
		>
			<Flex position="relative" minH="100vh" justify="center">
				<Flex
					position={"absolute"}
					width="85%"
					borderRadius="2xl"
					// background="#f1f2f6"
					top="20vh"
					p="2rem"
					minH="100vh"
				>
					<Flex width={"80%"} direction="column" m="auto">
						<Flex direction="column" color="whitesmoke">
							<Heading fontWeight="normal" as="h2">
								for business
							</Heading>
							<Text as="p" py="3">
								We are an award-winning interdisciplinary design
								practice that believes in delivering enriching
								design solutions through a value–driven process
								empowering all stakeholders and the environment
							</Text>
						</Flex>
						<Flex
							my="5"
							justify="stretch"
							// alignItems="center"
							background="white"
							// placeItems="center"
						>
							<Flex
								direction="column"
								p="5"
								width={{ base: "100%", sm: "70%" }}
							>
								<Text
									as="p"
									pl="2rem"
									mt="5"
									fontWeight="semibold"
								>
									Contact Us
								</Text>
								<VStack spacing={2} p="2rem">
									<FormControl id="name">
										<FormLabel>Your Name</FormLabel>
										<InputGroup borderColor="#E0E1E7">
											<InputLeftElement pointerEvents="none">
												<BsPerson color="gray.800" />
											</InputLeftElement>
											<Input type="text" size="md" />
										</InputGroup>
									</FormControl>
									<FormControl id="name">
										<FormLabel>Mail</FormLabel>
										<InputGroup borderColor="#E0E1E7">
											<InputLeftElement pointerEvents="none">
												<MdOutlineEmail color="gray.800" />
											</InputLeftElement>
											<Input type="text" size="md" />
										</InputGroup>
									</FormControl>
									<FormControl id="name">
										<FormLabel>Phone</FormLabel>
										<InputGroup borderColor="#E0E1E7">
											<InputLeftElement pointerEvents="none">
												<MdOutlinePhone color="gray.800" />
											</InputLeftElement>
											<Input type="number" size="md" />
										</InputGroup>
									</FormControl>
									<FormControl id="name">
										<FormLabel>Message</FormLabel>
										<Textarea
											borderColor="gray.300"
											_hover={{
												borderRadius: "gray.300",
											}}
											placeholder="message"
										/>
									</FormControl>
									<FormControl id="name" float="right">
										<Button
											size="lg"
											// width={"100%"}
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
							</Flex>
							<Flex
								direction="column"
								p="2"
								mt="6rem"
								// background="gray.400"
								width={{ base: "100%", sm: "40%" }}
							>
								<Text as="h3" fontWeight="semibold">
									Address
								</Text>
								<Text as="p">
									F 301 First Floor <br />
									Mandibal Hawal
									<br />
									Srinagar 190011
								</Text>
								<Divider my="1.5rem" color="black" />
								<Text as="p">Email</Text>
								<Text>
									<Link href="mailto:info@kohstudio.in">
										info@kohstudio.in
									</Link>
								</Text>
								<Divider my="1rem" color="black" />
								<HStack>
									<Link
										href="https://facebook.com"
										isExternal
									>
										{/* Facebook */}
										<BsFacebook
											fontSize="1.5rem"
											color="blue"
											mx="6px"
										/>
									</Link>
									<Link
										href="https://instagram.com"
										isExternal
									>
										{/* Instagram */}
										<FiInstagram
											fontSize="1.5rem"
											color="red"
											mx="6px"
										/>
									</Link>
									<Link
										href="https://instagram.com"
										isExternal
									>
										{/* facebook */}
										<BsLinkedin
											color="blue"
											mx="6px"
											fontSize="1.5rem"
										/>
									</Link>
								</HStack>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Contact;
