"use client";

import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.800")}
      color={useColorModeValue("white", "white")}
    >
      <Container as={Flex} maxW={"80rem"} minH="60vh" py={20} gap={20}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={24}>
          <Stack align={"flex-start"}>
            <ListHeader>KOH Studio</ListHeader>
            <Box>
              <Text fontSize={"13px"} maxW={"250px"} textAlign={"justify"}>
              👉 Nestled in the picturesque landscapes of Srinagar, Kashmir, Koh
                Studio stands as a beacon of innovative design and architectural
                brilliance. Koh Studio has redefined the architectural landscape
                of the region through its unique blend of minimalistic
                aesthetics and industrial elegance.
              </Text>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"/aboutus"}>
              About Us
            </Box>
            <Box as="a" href={"/contact"}>
              Our office
            </Box>
            <Box as="a" href={"/contact"}>
              Contact Us
            </Box>
            <Box as="a" href={"/team"}>
              Team
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Box as="a" href={"/work"}>
              All Projects
            </Box>
            <Box as="a" href={"/careers"}>
              Careers
            </Box>
            <Box as="a" href={"/"}>
              Terms and Conditions
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Flex align="center" as="a" href={"#"}>
              <BsFacebook color="blue" />
              <Link
                href="https://www.instagram.com/koharchitects"
                target="_blank"
              >
                &nbsp; Facebook
              </Link>
            </Flex>
            <Flex align="center">
              <FiInstagram color="red" />
              <Link
                href="https://www.instagram.com/koharchitects"
                target="_blank"
              >
                &nbsp; Instagram
              </Link>
            </Flex>
            <Flex align="center">
              <BsLinkedin color="teal" />
              <Link
                referrerPolicy="no-referrer"
                href="https://www.instagram.com/koharchitects"
                target="_blank"
              ></Link>
              &nbsp; LinkedIn
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
