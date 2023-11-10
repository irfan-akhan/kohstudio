import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { TfiBag } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";

export default function Card({ jobTittle, jobType, jobDomain, joblocation }) {
  return (
    <Box
      maxW={"500px"}
      minHheight={"160px"}
      border={"1px solid grey"}
      p={5}
      mt={10}
      borderRadius={10}
    >
      <Flex gap={8} alignItems={"center"}>
        <TfiBag />
        <Text fontSize={{ base: "16px", lg: "20px" }} fontWeight={500}>
          {jobTittle}
        </Text>
      </Flex>
      <Flex
        gap={{ base: "1rem", md: "2rem" }}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Flex gap={5} mt={10}>
          <Text>{jobType}</Text>
          <Text>{jobDomain}</Text>
          <Text>{joblocation}</Text>
        </Flex>
        <Button mt={10} bg={"#25D366"}>
          <Link href="https://wa.me/919149838291" target="_blank">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
              color={"white"}
            >
              {" "}
              <BsWhatsapp fontSize={"1.3rem"} color={"#fff"} />
              More Info{" "}
            </Box>
          </Link>
        </Button>
      </Flex>
    </Box>
  );
}
