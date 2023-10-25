import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {BsArrowRight} from "react-icons/bs"
import Image1 from "../public/gallery/cie2.jpg"
import Image2 from "../public/gallery/Drawing1.jpg"
import Image3 from "../public/gallery/Drawing2.jpg"
import Image4 from "../public/gallery/Drawing3.jpg"
import Image5 from "../public/gallery/townsquare.jpg"


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
					backgroundImage="url(/gallery/Drawing1.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					colSpan={2}
					rowSpan={2}
					bg="url(/gallery/townsquare.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					colSpan={2}
					rowSpan={2}
					backgroundImage="url(/gallery/Drawing2.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					colSpan={6}
					rowSpan={2}
					backgroundImage="url(/gallery/Drawing3.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					rowSpan={2}
					colSpan={3}
					backgroundImage="url(/gallery/Drawing3.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
					colSpan={3}
					rowSpan={3}
					backgroundImage="url(/gallery/Drawing1.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>{" "}
				<GridItem
					colSpan={4}
					rowSpan={19}
					backgroundImage="url(/gallery/cie2.jpg)"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				/>
				<GridItem
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
				<Link href="/">View All Projects</Link>
				<BsArrowRight />
			</Text>
		</Container>
  );
}
