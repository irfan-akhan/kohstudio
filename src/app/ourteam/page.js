"use client";

import {
	Box,
	chakra,
	Container,
	Flex,
	Heading,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const testimonials = [
	{
		name: "Hakim Danish",
		role: "Principal Architect",
		content: `With a strong academic background in urban regeneration, Hakim Danish possesses a deep understanding of revitalizing urban spaces, breathing new life into existing structures, and transforming communities through thoughtful design interventions. His academic journey has equipped him with the skills to envision spaces that not only serve their functional purpose but also contribute significantly to the social fabric of the surroundings.
      Hakim Danish is celebrated for his minimalist approach to design, a philosophy that resonates deeply with the ethos of Koh Studio. His design ethos revolves around the idea that simplicity is the ultimate sophistication. By stripping away the unnecessary, he crafts spaces that exude elegance and serenity. Every line, every curve, and every material choice is meticulously curated, reflecting his commitment to creating environments that are both visually appealing and highly functional.
      `,
		avatar: "/team/danish.jpg",
	},
	{
		name: "Abrar Ahmad",
		role: "Project Manager",
		content: `Abrar Ahmad is a dedicated and accomplished professional with a strong background in civil engineering and project management. With a passion for shaping the built environment, Ahmad has made significant contributions to the field through his expertise and leadership skills.
      As a Project Manager at Koh Studio, Ahmad has played a pivotal role in the successful execution of various projects. His meticulous planning, attention to detail, and ability to navigate through intricate project requirements have earned him recognition among clients and peers alike. Under his guidance, projects have not only been completed efficiently but have also consistently exceeded expectations
      Furthermore, Ahmad holds the esteemed title of being a founding member of Koh Studio, showcasing his entrepreneurial spirit and innovative mindset. His vision and determination have been instrumental in shaping the studio's identity and establishing its reputation as a leading force in the field of civil engineering and architectural design.`,
		avatar: "/team/abrar.jpg",
	},
	{
		name: "Lokesh Khati",
		role: "Architect",
		content: `Lokesh stands as a revered figure within Koh Studio, where he serves as a Senior Architect known for his exceptional expertise in construction and master planning. With a wealth of experience and a deep passion for architectural innovation, Lokesh has become a driving force behind some of the studio's most remarkable and visionary projects.
    Lokesh's journey in the architectural world began with a profound fascination for shaping spaces that harmonize seamlessly with the environment and cater to the needs of the community. Armed with a solid educational background and an insatiable curiosity, he quickly ascended through the ranks, earning a reputation for his keen eye for detail and his ability to transform concepts into tangible, awe-inspiring structures.
    `,
		avatar: "/team/vikas.jpg",
	},
	{
		name: "Hakim Saqib",
		role: "Site Engineer",
		content: `Saqib is a highly skilled and dedicated professional with a strong background in construction and project management. With a wealth of knowledge in execution and site management, Saqib has proven himself to be an invaluable asset in the field. His expertise and hands-on experience make him a key player in Koh Studio, a renowned construction and design firm.
      As a key player in Koh Studio, Saqib has contributed significantly to the firm's success. His ability to tackle challenges head-on, coupled with his innovative problem-solving skills, has led to the successful completion of numerous high-profile projects. Clients and colleagues alike admire his dedication, professionalism, and unwavering commitment to excellence.`,
		avatar: "/team/saqib.jpg",
	},
	{
		name: "Zubair Khan",
		role: "Visualizer",
		content: `From a young age, Zubair exhibited a keen interest in the intersection of technology and design. His journey into the world of architecture began with a deep fascination for spatial structures and a curiosity about how they could be brought to life through digital means. Excelling in his academic pursuits, Zubair earned his degree in architecture, laying the foundation for his future endeavors.
      Zubair possesses an extraordinary talent for 3D modelling and visualization, transforming abstract ideas and blueprints into stunning, lifelike visual representations. His mastery of advanced software tools allows him to create intricate, detailed models that breathe life into architectural concepts. Whether it's a futuristic skyscraper, a sustainable residential complex, or a culturally rich heritage site, Zubair's 3D models are characterized by their precision, realism, and attention to every minute detail.`,
		avatar: "/team/zubair.jpg",
	},

	{
		name: "Vikas",
		role: "Architect",
		content: ` Vikas is a dynamic and innovative young architect, whose passion for design and expertise in construction detailing have made a significant mark in the architectural industry. With a keen eye for detail and a creative mind, Vikas has become a prominent figure in the field, renowned for his exceptional skills in crafting intricate and well-thought-out architectural designs.{" "}
    Vikas's portfolio boasts a diverse range of projects, each reflecting his unique design sensibilities and commitment to quality. Whether it's a modern urban residence, a commercial complex, or a public institution, Vikas infuses his designs with creativity and practicality, ensuring that they not only captivate the eye but also serve the needs of the occupants seamlessly.`,
		avatar: "/team/vikas.jpg",
	},

	{
		name: "Rakib Abbas",
		role: "IT Manager",
		content: `Raqib is a highly skilled IT manager at Koh Studio, playing a pivotal role in the company's functioning. With a robust background in information technology and a keen understanding of the unique IT needs within the architecture and construction industry, Raqib has become an indispensable asset to Koh Studio.
    Raqib's expertise lies in aligning technology solutions with the strategic goals of Koh Studio. He is responsible for implementing and managing IT systems that streamline workflows, enhance communication, and ensure data security. His proactive approach to IT management ensures that the studio remains at the forefront of technological advancements, giving them a competitive edge in the industry.`,
		avatar: "/team/rakib.jpg",
	},
];

function TestimonialCard(props) {
	const { name, role, content, avatar, index } = props;
	return (
		<Flex
			maxW={"70rem"}
			direction={{ base: "column-reverse", md: "row" }}
			width={"full"}
			p={{ base: 4, xl: 10 }}
			alignItems={"center"}
			justifyContent={"space-between"}
			position={"relative"}
			bg={useColorModeValue("white", "gray.800")}
			data-aos="fade-up"
			data-aos-offset="30"
		>
			<Flex
				direction={"column"}
				textAlign={"left"}
				justifyContent={"space-between"}
			>
				<chakra.p
					fontWeight={"light"}
					fontSize={"14px"}
					pb={4}
					maxW={{ base: "100%", xl: "40rem" }}
					textAlign={"justify"}
				>
					{content}
				</chakra.p>
				<chakra.p
					data-aos-anchor-placement="center-center"
					fontWeight={"bold"}
					fontSize={16}
				>
					{name}
				</chakra.p>
				<chakra.p
					data-aos-anchor-placement="center-center"
					fontWeight={"light"}
					fontSize={14}
				>
					{role}
				</chakra.p>
			</Flex>
			<Box mb={{ base: 5 }}>
				<Image
					src={avatar}
					height={250}
					width={250}
					style={{ overflow: "hidden" }}
					m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
				/>
			</Box>
		</Flex>
	);
}

export default function GridBlurredBackdrop() {
	return (
		<Container
			textAlign={"center"}
			pt={10}
			justifyContent={"center"}
			direction={"column"}
			maxW={"75rem"}
			overflow={"hidden"}
		>
			<Heading fontSize={"3xl"} mt={20}>
				Our Team
			</Heading>
			<VStack columns={{ base: 1, xl: 2 }} spacing={"10"} mx={"auto"}>
				{testimonials.map((cardInfo, index) => (
					<TestimonialCard key={index} {...cardInfo} index={index} />
				))}
			</VStack>
		</Container>
	);
}
