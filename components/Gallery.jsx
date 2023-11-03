"use client";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function ImageGrid() {
	return (
		<Container maxW={"100%"} my={20}>
			<Grid
				templateRows="repeat(6, 1fr)"
				templateColumns="repeat(6, 1fr)"
				gap={4}
				my={20}
				mx={{ base: "1", lg: "8rem" }}
				data-aos="fade-up"
				display={{ base: "block", md: "grid" }}
			>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					rowSpan={2}
					colSpan={2}
					backgroundImage="url(/gallery/confrence_room.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					minH="90vh"
				/>
				<GridItem
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={2}
					rowSpan={2}
					bg="url(/gallery/02.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					minH="90vh"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={2}
					rowSpan={2}
					backgroundImage="url(/gallery/harwan.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					colSpan={6}
					rowSpan={2}
					mt={{ base: 4, md: 4, lg: "none" }}
					backgroundImage="url(/gallery/khimber.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 4, md: 4, lg: "none" }}
					rowSpan={2}
					colSpan={3}
					backgroundImage="url(/gallery/shivpora.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 4, md: 4, lg: "none" }}
					colSpan={3}
					rowSpan={3}
					backgroundImage="url(/gallery/munawarabad.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 4, md: 4, lg: "none" }}
					colSpan={4}
					rowSpan={19}
					backgroundImage="url(/gallery/cie2.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 4, md: 4, lg: "none" }}
					colSpan={2}
					rowSpan={19}
					backgroundImage="url(/gallery/nishat_hut.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 4, md: 4, lg: "none" }}
					colSpan={2}
					rowSpan={19}
					backgroundImage="url(/gallery/ishber.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					minH="90vh"
					data-aos="fade-up"
					data-aos-delay="50"
					mt={{ base: 4, md: 4, lg: "none" }}
					colSpan={4}
					rowSpan={19}
					backgroundImage="url(/gallery/drawing4.jpg)"
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
