import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { TfiBag } from "react-icons/tfi";

export default function Card({ jobTittle, jobType, jobDomain, joblocation }) {
  return (
    <Box maxW={"500px"} minHheight={"160px"} border={"1px solid grey"} p={5} mt={10} borderRadius={10}>
      <Flex gap={8} alignItems={"center"}>
        <TfiBag />
        <Text fontSize={{base:"16px", lg:"20px"}} fontWeight={500}>{jobTittle}</Text>
      </Flex>
      <Flex gap={{base:"1rem", md:"2rem"}} justifyContent={"space-between"} flexWrap={"wrap"}>
        <Flex gap={5} mt={10}>
        <Text>{jobType}</Text>
        <Text>{jobDomain}</Text>
        <Text>{joblocation}</Text>
        </Flex>
        <Button mt={10} style={{backgroundColor:"black", color:"white", fontWeight: "500"}}>
            <Link href="/contact">More Info</Link></Button>
      </Flex>
    </Box>
  );
}
