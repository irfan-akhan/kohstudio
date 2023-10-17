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
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem colSpan={2} rowSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} rowSpan={2} bg="papayawhip" />
        <GridItem colSpan={6} rowSpan={2} bg="tomato" />

        <GridItem rowSpan={2} colSpan={3} bg="tomato" />
        <GridItem colSpan={3} rowSpan={3} bg="papayawhip" />
        <GridItem colSpan={4} rowSpan={19} bg="tomato" />
        <GridItem colSpan={2} rowSpan={19} bg="tomato" />
      </Grid>
      <Text textAlign={"center"} fontSize={"20px"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={3}>
        <Link href="/">
        View All Projects
        </Link>
        <BsArrowRight />
      </Text>
    </Container>
  );
}
