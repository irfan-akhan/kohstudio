"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import data from "../../../../../lib/data.json";
import { useParams } from "next/navigation";

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
  const params = useParams();
  const { project } = params;
  const projectDetail = Object.values(data)?.flatMap((detail) => detail);
  console.log('projects', project);
  const projectInfo = projectDetail.find(({id}) => id == project);
  console.log(projectInfo?.name, "project id");

 return(

  <Container mt={"10rem"} maxW={"80rem"} height={"100vh"}>
    <Breadcrumb
      spacing="8px"
      separator={<BiChevronRight color="gray.500" />}
      display={"grid"}
      placeItems={"center"}
    >
      <BreadcrumbItem>
        <BreadcrumbLink>
          <Link href="/">Projects</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Link href="/">Category</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>
          <Link href="/">{projectInfo?.typology}</Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading
      as="h1"
      mt={"6rem"}
      fontSize={"60px"}
      fontWeight="light"
      textAlign={"center"}
      letterSpacing={"4px"}
    >
      {project?.name}
    </Heading>
    <Flex mt={20} gap={20}>
      <Image
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
        alt="project image"
        width={600}
        height={800}
        style={{
          height: "750px",
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
            <Text style={ValueStyle}>{projectInfo?.typology}</Text>
            <Text style={ValueStyle}>{projectInfo?.typology}</Text>
            <Text style={ValueStyle}>{projectInfo?.client}</Text>
            <Text style={ValueStyle}>{projectInfo?.startDate}</Text>
            <Text style={ValueStyle}>{projectInfo?.location}</Text>
            <Text style={ValueStyle}>{projectInfo?.area}</Text>
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
            height: "400px",
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
          height: "550px",
          objectFit: "cover",
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
          height: "550px",
          objectFit: "cover",
        }}
      />
    </VStack>
    <Flex mt={20}>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          sizes="100vw"
          width={500}
          height={500}
          style={{
            width: "500px",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <Text mt={20} w={"70%"} fontSize={"18px"} fontWeight={300}>
     {projectInfo?.description}
        </Text>
      </Box>
      <Box>
        <Text w={"70%"} fontSize={"18px"} fontWeight={300}>
        {projectInfo?.description}
        </Text>
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          sizes="100vw"
          width={500}
          height={500}
          style={{
            width: "500px",
            height: "300px",
            objectFit: "cover",
            marginTop: "7rem",
          }}
        />
      </Box>
    </Flex>
    <Image
      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      alt="project image"
      sizes="100vw"
      width={500}
      height={500}
      style={{
        width: "100%",
        height: "600px",
        objectFit: "cover",
        marginTop: "7rem",
      }}
    />
    <Text
      textAlign={"center"}
      mt={20}
      fontSize={"24px"}
      display={"flex"}
      justifyContent={"center"}
      gap={5}
      alignItems={"center"}
    >
      <BsArrowLeft />
      <Link href="/">Previous</Link>
      <Link href="/">Next</Link>
      <BsArrowRight />
    </Text>
  </Container>
 )
}

export default Project;
