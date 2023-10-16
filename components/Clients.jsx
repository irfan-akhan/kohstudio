"use client"
import {
  Center,
  Container,
  Flex,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import image from "../public/google.png";

export default function Clients() {
  return (
    <Container maxW={"55rem"} my={20}>
      <Heading my={20} textAlign={"center"}>
        Our Clients
      </Heading>
      <Flex flexWrap="wrap" gap={"100px"} alignItems={"center"} justifyContent={"center"}>
        <Image src={image} alt="icon" width={100} height={100} />
        <Image src={image} alt="icon" width={100} height={100} />
        <Image src={image} alt="icon" width={100} height={100} />
        <Image src={image} alt="icon" width={100} height={100} />
        <Image src={image} alt="icon" width={100} height={100} />
        <Image src={image} alt="icon" width={100} height={100} />
      </Flex>
    </Container>
  );
}
