import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Aboutus() {
  return (
    <Container maxW={"70rem"} my={"8rem"}>
      <Heading fontSize={"3xl"} textAlign={"center"} my={10}>About Us</Heading>
      <Text fontWeight={300} textAlign={"center"} fontSize={"18px"} letterSpacing={"1px"}>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
      <Text fontWeight={300} textAlign={"center"} fontSize={"18px"} letterSpacing={"1px"} mt={16}>lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
    </Container>
  )
}
