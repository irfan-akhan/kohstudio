import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {BsArrowRight} from "react-icons/bs"

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
			>
				<GridItem
					rowSpan={2}
					colSpan={2}
					bg="tomato"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					// background="url(https://studiolotus.in/uploads/SPIN/projects/115/B-960-X-720.jpg?7162)"
				/>
				<GridItem
					colSpan={2}
					rowSpan={2}
					bg="papayawhip"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					// background="url(https://www.abaxial.org/wp-content/uploads/2017/05/parker_legris_img2.jpg)"
				/>
				<GridItem
					colSpan={2}
					rowSpan={2}
					bg="papayawhip"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					// background="url(/townsquare.jpg)"
				/>
				<GridItem
					colSpan={6}
					rowSpan={2}
					bg="tomato"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					// background="url(https://studiolotus.in/uploads/SPIN/projects/115/C-1920-X-1080.jpg?2180)"
					// background="url(/khimber.jpg)"
				/>
				<GridItem
					rowSpan={2}
					colSpan={3}
					bg="tomato"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					background="url(/cie2.jpg)"
					// background="url(https://www.abaxial.org/wp-content/uploads/2017/04/IMG_8347-e1539156945551.jpg)"
				/>
				<GridItem
					colSpan={3}
					rowSpan={3}
					bg="papayawhip"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					background="url(/cie3.jpg)"
				/>{" "}
				<GridItem
					colSpan={4}
					rowSpan={19}
					bg="tomato"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					// background="url(https://studiolotus.in/uploads/SPIN/projects/158/Earth-and-Glass-House-2.jpg?6802)"
				/>
				<GridItem
					colSpan={2}
					rowSpan={19}
					bg="tomato"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					// background="url(https://studiolotus.in/uploads/SPIN/projects/158/Earth-and-Glass-House-4.jpg?9333)"
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
				<Link href="/">View All Projects</Link>
				<BsArrowRight />
			</Text>
		</Container>
  );
}
