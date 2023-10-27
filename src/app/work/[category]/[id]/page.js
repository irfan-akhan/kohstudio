"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
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
import { useParams, usePathname, useRouter } from "next/navigation";
import data from "../../../../../lib/data.json";
import React from "react";

const labelStyle = {
  textTransform: "capitalize",
  fontSize: "md",
  fontWeight: 300,
  marginBottom: "12px",
  fontSize: "18px",
};
const ValueStyle = {
  textTransform: "capitalize",
  fontSize: "large",
  fontWeight: 300,
  marginBottom: "12px",
  fontSize: "18px",
};
const ProjectDetails = () => {
  const { id, category } = useParams();
  const router = useRouter();
  const projectInfo = data[category].find(({ id }) => id == id);
  const onClickHandler = (e) => {
    let projectId = id;
    e.target.name == "next" ? projectId++ : projectId--;
    router.push(`/work/${category}/${projectId}`);
  };
  return (
    <Container mt={{ base: "6rem", md: "8rem" }} maxW={"80rem"}>
      <Breadcrumb
        spacing="8px"
        separator={<BiChevronRight color="gray.500" />}
        display={"grid"}
        placeItems={"center"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Work</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Link href="/">Category</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Link href="/">
              {projectInfo?.typology.charAt(0).toUpperCase() +
                projectInfo?.typology.slice(1)}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading
        as="h1"
        my={{ base: "5", md: "14" }}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="light"
        textAlign={"center"}
        textTransform="capitalize"
      >
        {projectInfo?.name}
      </Heading>
      <Flex gap={10} direction={{ base: "column", md: "initial" }}>
        <Box borderRight={"1px solid #030303"} borderRightWidth="small" pr="3">
          <Image
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            alt="project image"
            width={600}
            height={750}
            style={{
              height: "750px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box maxW={"500px"} height={"400px"}>
          <Flex gap={20} mb={"6rem"}>
            <Box alignItems={"stretch"}>
              <Text style={labelStyle}>project-</Text>
              <Text style={labelStyle}>typology-</Text>
              <Text style={labelStyle}>client-</Text>
              <Text style={labelStyle}>year-</Text>
              <Text style={labelStyle}>location-</Text>
              <Text style={labelStyle}>area-</Text>
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
            width={500}
            height={800}
            style={{
              width: "100%",
              height: "400px",
            }}
          />
        </Box>
      </Flex>
      {/* <VStack my="10">
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt={projectInfo.name}
          width={500}
          height={500}
          style={{
            maxHeight: { base: "85vh", md: "95vh" },
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt={projectInfo.name}
          width={500}
          height={500}
          style={{
            maxHeight: { base: "85vh", md: "95vh" },
            width: "100%",
            objectFit: "cover",
          }}
        />
      </VStack> */}
      <Flex
        direction={{ base: "column", md: "initial" }}
        justify="space-between"
        my="10"
      >
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt={projectInfo.name}
          width={700}
          height={700}
        />
        <Text
          mt={10}
          fontSize={"18px"}
          maxW={{ base: "initial", md: "35%" }}
          fontWeight={300}
        >
          {projectInfo?.description}
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column", md: "initial" }}
        justify="space-between"
        my={{ base: "10", md: "20" }}
      >
        <Text
          fontSize={"18px"}
          maxW={{ base: "initial", md: "35%" }}
          fontWeight={300}
        >
          {projectInfo?.description}
        </Text>
        <Image
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="project image"
          width={700}
          height={700}
        />
      </Flex>
      {/* <Image
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
        alt={projectInfo.name}
        width={500}
        height={500}
        style={{
          maxHeight: { base: "85vh", md: "95vh" },
          width: "100%",
          objectFit: "cover",
          marginTop: { base: "2rem", md: "7rem" },
        }}
      /> */}
      <Flex
        textAlign={"center"}
        my={{ base: 10, md: 20 }}
        fontSize={{ base: "md", md: "larger" }}
        justifyContent={"center"}
        gap={5}
        alignItems={"center"}
        mb="5"
      >
        <Button
          isDisabled={id == 1}
          onClick={onClickHandler}
          name="previous"
          fontWeight="hairline"
        >
          <BsArrowLeft />
          &nbsp; Previous
        </Button>
        <Button
          isDisabled={id == data[category].length}
          onClick={onClickHandler}
          name="next"
          fontWeight="hairline"
        >
          Next &nbsp; <BsArrowRight />
        </Button>
      </Flex>
    </Container>
  );
};

export default ProjectDetails;
