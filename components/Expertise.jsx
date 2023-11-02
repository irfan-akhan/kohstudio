"use client";

import { Heading, Container } from "@chakra-ui/react";
import ExpertiseCard from "./ExpertizeCard";

const Expertise = ({ order }) => {
	return (
		<Container maxW={"7xl"} p="12">
			<Heading as="h1" textAlign="center" textTransform="uppercase">
				Expertise
			</Heading>
			<ExpertiseCard
				heading="Commercial"
				order={1}
				text={`Integrating innovation with functionality, our recent commercial project stands as a testament to modern architectural excellence. The design embodies a dynamic space that harmonizes two essential commercial facets: a vibrant shopping mall and a state-of-the-art conference hall. These projects emphasizing our commitment to delivering multifaceted, purpose-driven designs that cater to the diverse needs of our clients and the community.`}
				animationType="fade-left"
			/>
			<ExpertiseCard
				heading="Residential"
				text={`Embracing the essence of comfort and serenity, our recent residential project presents a harmonious blend of nature and architecture. Nestled within an idyllic setting, this project embodies the tranquil charm of home stay vocational huts designed to offer an authentic and rejuvenating living experience. Each hut is meticulously crafted to reflect a seamless connection with the surrounding landscape, incorporating natural materials and eco-friendly designs that bring a sense of warmth and intimacy. `}
				animationType="fade-right"
			/>
			<ExpertiseCard
				heading="international"
				order={1}
				text={`Representing a global convergence of innovation and design, our recent international project stands as a testament to architectural grandeur and functionality. The exhibition hall stands as an icon of contemporary architecture, meticulously designed to host diverse and influential events on a global scale. This multipurpose space is a testament to versatility, offering a dynamic platform for a wide array of exhibitions, conventions, and cultural gatherings.`}
				animationType="fade-left"
			/>
		</Container>
	);
};

export default Expertise;
