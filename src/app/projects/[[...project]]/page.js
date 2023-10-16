import { Box, Container, Flex, Heading, Text, VStack, background } from "@chakra-ui/react";
import Image from "next/image";

const labelStyle = {
  textTransform: "capitalize",
  fontSize: "20px",
  fontWeight: 300,
  marginBottom: "12px",
};
const ValueStyle = {
  textTransform: "capitalize",
  fontSize: "20px",
  fontWeight: 400,
  marginBottom: "12px",
};

function Project() {
  return (
    <Container mt={20} maxW={"80rem"} height={"500vh"}>
      <Heading
        mt={30}
        fontSize={"70px"}
        fontWeight={"300"}
        textAlign={"center"}
        letterSpacing={"4px"}
      >
        MISAL RESIDENCE, WHEN A PLAN MAKES A PIVOT ALONG THE BLUE{" "}
      </Heading>
      <Flex mt={20} gap={20}>
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          width={600}
          height={800}
          style={{
            height:"750px"
          }}
        />
        <Box maxW={"500px"} height={"400px"}>
          <Flex gap={20} mb={"6rem"}>
            <Box alignItems={"stretch"}>
              <Text style={labelStyle}>project:-</Text>
              <Text style={labelStyle}>typology:-</Text>
              <Text style={labelStyle}>client:-</Text>
              <Text style={labelStyle}>year:-</Text>
              <Text style={labelStyle}>location:-</Text>
              <Text style={labelStyle}>area:-</Text>
            </Box>
            <Box>
              <Text style={ValueStyle}>misal house</Text>
              <Text style={ValueStyle}>residential</Text>
              <Text style={ValueStyle}>mr rakib</Text>
              <Text style={ValueStyle}>2022</Text>
              <Text style={ValueStyle}>srinagr</Text>
              <Text style={ValueStyle}>7,000ft</Text>
            </Box>
          </Flex>
          <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          sizes="100vw"
          width={500}
          height={800}
          style={{
            width: "100%",
            height:"400px"
          }}
        />
        </Box>
      </Flex>
      <VStack mt={20}>
      <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          sizes="100vw"
          width={500}
          height={800}
          style={{
            width: "100%",
            height:"550px",
            objectFit:"cover"
          }}
        />
         <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          sizes="100vw"
          width={500}
          height={500}
          style={{
            width: "100%",
            height:"550px",
            objectFit:"cover"
          }}
        />
      </VStack>
    </Container>
  );
}

export default Project;
