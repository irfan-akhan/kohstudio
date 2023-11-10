import {
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Card from "../../../components/CareersCard";

export default function page() {
  return (
    <Container my="8rem" maxW="70rem" centerContent>
      <Heading textAlign="center" fontSize="3xl">
        Careers
      </Heading>
      <Flex gap={10} flexWrap={"wrap"}>
        <Card
          jobTittle="Architech"
          jobType="Fulltime"
          jobDomain="Engineering"
          joblocation="1-2 years of experience"
        />
      </Flex>
    </Container>
  );
}
