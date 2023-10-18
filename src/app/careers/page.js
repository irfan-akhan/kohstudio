import { Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Card from '../../../components/CareersCard'

export default function page() {
  return (
    <Container my="8rem" maxW="70rem">
        <Heading textAlign="center" fontSize="3xl">
            Careers
        </Heading>
        <Flex gap={10} flexWrap={"wrap"}>
            <Card jobTittle="Senior Software Engineering" jobType="Fulltime" jobDomain="Engineering" joblocation="Srinagar" />
            <Card jobTittle="Senior Software Engineering" jobType="Fulltime" jobDomain="Engineering" joblocation="Srinagar" />
            <Card jobTittle="Senior Software Engineering" jobType="Fulltime" jobDomain="Engineering" joblocation="Srinagar" />
        </Flex>
    </Container>
  )
}
