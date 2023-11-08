import {
	Container,
	Flex,
	Card,
	CardHeader,
	CardBody,
	Heading,
	Text,
} from "@chakra-ui/react";
import React from "react";
// import Card from "../../../components/CareersCard";

export default function page() {
	return (
		<Container my="8rem" maxW="70rem" centerContent>
			<Heading textAlign="center" fontSize="3xl">
				Careers
			</Heading>
      <Card>
					<CardHeader>
						{/* <Heading size="md">Join our team</Heading> */}
					</CardHeader>
					<CardBody>
						<Text>No Openings at the moment</Text>
					</CardBody>
				</Card>
			<Flex gap={10} flexWrap={"wrap"}>
				
				{/* <Card jobTittle="Senior Software Engineering" jobType="Fulltime" jobDomain="Engineering" joblocation="Srinagar" />
            <Card jobTittle="Senior Software Engineering" jobType="Fulltime" jobDomain="Engineering" joblocation="Srinagar" />
            <Card jobTittle="Senior Software Engineering" jobType="Fulltime" jobDomain="Engineering" joblocation="Srinagar" /> */}
			</Flex>
		</Container>
	);
}
