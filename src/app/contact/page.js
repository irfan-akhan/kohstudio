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
	Link,
	Divider,
} from "@chakra-ui/react";
import { MdPhone, MdFacebook, MdOutlineEmail } from "react-icons/md";
import { BsPerson, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useRef, useState } from "react";
import { EmailAlert } from "../../../components/EmailAlert";

export default function Contact() {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const phoneRef = useRef(null);
	const messageRef = useRef(null);
	const [emailError, setEmailError] = useState(false);
	const [alertState, setAlertState] = useState(false);
	function submitHandler(e) {
		e.preventDefault();
		const data = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			phone: phoneRef.current.value,
			message: messageRef.current.value,
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				if (res.status === 200) {
					console.log("Response succeeded!");
					setAlertState(true);
					setInterval(() => {
						setAlertState(false);
					}, 5000);
					emailRef.current.value = "";
					nameRef.current.value = "";
					phoneRef.current.value = "";
					messageRef.current.value = "";
				} else {
					setEmailError(true);
					console.log("err email");
					setAlertState(true);
					setInterval(() => {
						setEmailError(false);
						setAlertState(false);
					}, 5000);
				}
			})
			.catch((err) => {
				setEmailError(true);
				console.log("err email", err);
				setAlertState(true);
				setInterval(() => {
					setEmailError(false);
					setAlertState(false);
				}, 5000);
			});
	}

	return (
		<Container
			minW="100vw"
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			background="url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)"
			maxW="full"
			centerContent
			overflow="hidden"
			pb="10vh"
			data-aos="fade-up"
		>
			<Flex mt={"30vh"} direction="column" align="center" width="85vw">
				<Flex direction="column" align="center" m="6" color="white">
					<Heading textTransform="capitalize" as="h3" my="3">
						contact us
					</Heading>
					<Text as="p" fontWeight="medium">
						{`Let's talk about you project`}
					</Text>
				</Flex>
				<Box
					bg="#000"
					width={{ base: "full", md: "70%" }}
					data-aos="fade-up"
					data-aos-delay="150"
				>
					{alertState && (
						<EmailAlert
							status={emailError ? "error" : "success"}
							title={
								emailError
									? "Request failure"
									: "Application submitted!"
							}
							text={
								emailError
									? "Sorry something went wrong, Please again later"
									: "Thanks for submitting your application. Our team will get back to you soon."
							}
						/>
					)}
					<Wrap>
						<WrapItem width={{ base: "full", md: "70%" }}>
							<Box width="full" bg="white">
								<Box m={8} color="#0B0E3F">
									<VStack spacing={5}>
										<form
											onSubmit={submitHandler}
											style={{
												margin: 0,
												p: 0,
												width: "100%",
											}}
										>
											<FormControl isRequired id="name">
												<FormLabel>Your Name</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement pointerEvents="none">
														<BsPerson color="gray.800" />
													</InputLeftElement>
													<Input
														ref={nameRef}
														name="name"
														type="text"
														size="md"
													/>
												</InputGroup>
											</FormControl>
											<FormControl isRequired id="name">
												<FormLabel>Mail</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement pointerEvents="none">
														<MdOutlineEmail color="gray.800" />
													</InputLeftElement>
													<Input
														type="email"
														size="md"
														name="email"
														ref={emailRef}
													/>
												</InputGroup>
											</FormControl>
											<FormControl isRequired id="phone">
												<FormLabel>Phone</FormLabel>
												<InputGroup borderColor="#E0E1E7">
													<InputLeftElement pointerEvents="none">
														<MdPhone color="gray.800" />
													</InputLeftElement>
													<Input
														type="number"
														size="md"
														name="phone"
														ref={phoneRef}
													/>
												</InputGroup>
											</FormControl>
											<FormControl
												isRequired
												id="message"
											>
												<FormLabel>Message</FormLabel>
												<Textarea
													ref={messageRef}
													borderColor="gray.300"
													_hover={{
														borderRadius:
															"gray.300",
													}}
													name="message"
													placeholder="message"
												/>
											</FormControl>
											<FormControl id="name" my="5">
												<Button
													variant="solid"
													bg="#000"
													color="white"
													type="submit"
													_hover={{ bg: "gray.700" }}
												>
													Send
												</Button>
											</FormControl>
										</form>
									</VStack>
								</Box>
							</Box>
						</WrapItem>
						<WrapItem mt="2.5rem">
							<Box color="#fff" pl={{ base: "1rem", md: "2rem" }}>
								<Heading>Address</Heading>
								<Text
									mt={{ sm: 3, md: 3, lg: 5 }}
									color="gray.400"
								>
									Mandibal Nowshera <br />
									Srinagar 190011 <br />
								</Text>
								<Divider my="1.2rem" />
								<Flex
									align="center"
									_hover={{
										color: "#1C6FEB",
									}}
								>
									<MdOutlineEmail color="gray.800" />
									<Link
										ml="2"
										color="#DCE2FF"
										as="a"
										isExternal
										href="mailto:info@kohstudio.in"
										_hover={{
											color: "#1C6FEB",
										}}
									>
										info@kohstudio.in
									</Link>
								</Flex>
								<Divider my="2rem" />
								<HStack
									mt={{ lg: 5, md: 5 }}
									alignItems="flex-start"
								>
									<Link
										href="https://www.instagram.com/koharchitects"
										target="_blank"
									>
										<IconButton
											aria-label="facebook"
											variant="ghost"
											size="lg"
											isRound={true}
											_hover={{ bg: "#0D74FF" }}
											icon={
												<MdFacebook
													size="18px"
													color="white"
												/>
											}
										/>
									</Link>
									<Link
										href="https://www.instagram.com/koharchitects"
										target="_blank"
									>
										<IconButton
											aria-label="github"
											variant="ghost"
											size="lg"
											isRound={true}
											_hover={{ bg: "#0D74FF" }}
											icon={
												<BsLinkedin
													size="18px"
													color="white"
												/>
											}
										/>
									</Link>
									<Link
										href="https://www.instagram.com/koharchitects"
										target="_blank"
									>
										<IconButton
											aria-label="discord"
											variant="ghost"
											size="lg"
											isRound={true}
											_hover={{ bg: "#0D74FF" }}
											icon={
												<BsInstagram
													size="18px"
													color="white"
												/>
											}
										/>
									</Link>
								</HStack>
							</Box>
						</WrapItem>
					</Wrap>
				</Box>
				{/* </Box> */}
			</Flex>
		</Container>
	);
}
