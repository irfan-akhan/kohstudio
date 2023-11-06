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
	Image,
	VStack,
} from "@chakra-ui/react";

import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useParams, useRouter, notFound } from "next/navigation";
import data from "../../../../../lib/data.json";
import React, { useEffect, useState } from "react";

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
	const [projectInfo, setProjectInfo] = useState(null);
	const router = useRouter();
	useEffect(() => {
		const projectInfo =
			data[category]?.find((project) => project.id == id) || null;
		if (!projectInfo) {
			return notFound();
		}
		setProjectInfo(projectInfo);
	}, [category, id]);

	const onClickHandler = (e) => {
		let projectId = id;
		e.target.name == "next" ? projectId++ : projectId--;
		router.push(`/work/${category}/${projectId}`);
	};
	return (
		<Container
			data-aos="zoom-in"
			mt={{ base: "6rem", md: "8rem" }}
			maxW={"80rem"}
		>
			<Breadcrumb
				spacing="8px"
				separator={<BiChevronRight color="gray.500" />}
				display={"grid"}
				placeItems={"center"}
			>
				<BreadcrumbItem>
					<BreadcrumbLink>
						<Link href="/work">Work</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>
						<Link href={`/work/${projectInfo?.typology}`}>
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
				<Box
					borderRight={"1px solid #030303"}
					borderRightWidth="small"
					pr="3"
				>
					<Image
						src={projectInfo?.banner}
						alt={projectInfo?.name + "_banner"}
						width={600}
						height={750}
						style={{
							height: "750px",
							objectFit: "cover",
						}}
					/>
				</Box>
				<Box maxW={"500px"} height={{ md: "400px" }}>
					<Flex gap={20} mb={"6rem"} data-aos="fade-right">
						<Box alignItems={"stretch"}>
							<Text style={labelStyle}>project-</Text>
							<Text style={labelStyle}>typology-</Text>
							<Text style={labelStyle}>client-</Text>
							<Text style={labelStyle}>year-</Text>
							<Text style={labelStyle}>location-</Text>
							<Text style={labelStyle}>area-</Text>
						</Box>
						<Box>
							<Text style={ValueStyle}>{projectInfo?.name}</Text>
							<Text style={ValueStyle} textTransform="capitalize">
								{projectInfo?.typology}
							</Text>
							<Text style={ValueStyle}>
								{projectInfo?.client}
							</Text>
							<Text style={ValueStyle}>
								{projectInfo?.startDate}
							</Text>
							<Text style={ValueStyle}>
								{projectInfo?.location}
							</Text>
							<Text style={ValueStyle}>{projectInfo?.area}</Text>
						</Box>
					</Flex>
					<Image
						data-aos="fade-left"
						src={projectInfo?.banner}
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
			{projectInfo?.images?.length && (
				<VStack my="10">
					{projectInfo?.images?.map((imageUrl, idx) => (
						<Image
							data-aos="zoom-in-up"
							key={idx}
							src={imageUrl}
							alt={projectInfo.name}
							width="90vw"
							height="90vh"
							objectFit="cover"
						/>
					))}
				</VStack>
			)}
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
					style={{ background: "black", color: "white" }}
				>
					<BsArrowLeft />
					&nbsp; Previous
				</Button>
				<Button
					isDisabled={id == data[category]?.length}
					onClick={onClickHandler}
					name="next"
					fontWeight="hairline"
					style={{ background: "black", color: "white" }}
				>
					Next &nbsp; <BsArrowRight />
				</Button>
			</Flex>
		</Container>
	);
};

export default ProjectDetails;
