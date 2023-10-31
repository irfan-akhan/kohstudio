"use client";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function ImageGrid() {
	return (
		<Container maxW={"100%"} my={20}>
			<Grid
				h="1500px"
				templateRows="repeat(6, 1fr)"
				templateColumns="repeat(6, 1fr)"
				gap={4}
				my={20}
				mx={"8rem"}
				data-aos="fade-up"
			>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					rowSpan={2}
					colSpan={2}
					backgroundImage="url(/gallery/Drawing1.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={2}
					rowSpan={2}
					bg="url(/gallery/townsquare.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={2}
					rowSpan={2}
					backgroundImage="url(/gallery/Drawing2.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={6}
					rowSpan={2}
					backgroundImage="url(/gallery/Drawing3.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					rowSpan={2}
					colSpan={3}
					backgroundImage="url(/gallery/Drawing3.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={3}
					rowSpan={3}
					backgroundImage="url(/gallery/Drawing1.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={4}
					rowSpan={19}
					backgroundImage="url(/gallery/cie2.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={2}
					rowSpan={19}
					backgroundImage="url(/gallery/Drawing4.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
			</Grid>
			<Text
				textAlign={"center"}
				fontSize={"20px"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={3}
			>
				<Link href="/work">View All Projects</Link>
				<BsArrowRight />
			</Text>
		</Container>
	);
}
