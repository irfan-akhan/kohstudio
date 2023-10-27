"use client";

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Hakim Danish.",
    role: "Principal Architect",
    content: `With a strong academic background in urban regeneration, Hakim Danish possesses a deep understanding of revitalizing urban spaces, breathing new life into existing structures, and transforming communities through thoughtful design interventions. His academic journey has equipped him with the skills to envision spaces that not only serve their functional purpose but also contribute significantly to the social fabric of the surroundings.
      Hakim Danish is celebrated for his minimalist approach to design, a philosophy that resonates deeply with the ethos of Koh Studio. His design ethos revolves around the idea that simplicity is the ultimate sophistication. By stripping away the unnecessary, he crafts spaces that exude elegance and serenity. Every line, every curve, and every material choice is meticulously curated, reflecting his commitment to creating environments that are both visually appealing and highly functional.
      `,
    avatar: "/team/danish.jpg",
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
    name: "Abrar Ahmad",
    role: "Project Manager",
    content: `Abrar Ahmad is a dedicated and accomplished professional with a strong background in civil engineering and project management. With a passion for shaping the built environment, Ahmad has made significant contributions to the field through his expertise and leadership skills.
      As a Project Manager at Koh Studio, Ahmad has played a pivotal role in the successful execution of various projects. His meticulous planning, attention to detail, and ability to navigate through intricate project requirements have earned him recognition among clients and peers alike. Under his guidance, projects have not only been completed efficiently but have also consistently exceeded expectations
      Furthermore, Ahmad holds the esteemed title of being a founding member of Koh Studio, showcasing his entrepreneurial spirit and innovative mindset. His vision and determination have been instrumental in shaping the studio's identity and establishing its reputation as a leading force in the field of civil engineering and architectural design.`,
    avatar: "/team/abrar.jpg",
  },
  {
    name: "Vikas",
    role: "Architect",
    content: ` Vikas is a dynamic and innovative young architect, whose passion for design and expertise in construction detailing have made a significant mark in the architectural industry. With a keen eye for detail and a creative mind, Vikas has become a prominent figure in the field, renowned for his exceptional skills in crafting intricate and well-thought-out architectural designs.
    Vikas's portfolio boasts a diverse range of projects, each reflecting his unique design sensibilities and commitment to quality. Whether it's a modern urban residence, a commercial complex, or a public institution, Vikas infuses his designs with creativity and practicality, ensuring that they not only captivate the eye but also serve the needs of the occupants seamlessly.`,
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
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
      w={"85rem"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      // _after={{
      //   content: '""',
      //   position: "absolute",
      //   height: "21px",
      //   width: "29px",
      //   left: "35px",
      //   top: "-10px",
      //   backgroundSize: "cover",
      //   backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      // }}
      // _before={{
      //   content: '""',
      //   position: "absolute",
      //   zIndex: "-1",
      //   height: "full",
      //   maxW: "640px",
      //   width: "full",
      //   filter: "blur(40px)",
      //   transform: "scale(0.98)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   top: 0,
      //   left: 0,
      //   // backgroundImage: backgrounds[index % 4],
      // }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
          maxW={"40rem"}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={"gray.500"}
          >
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Image
        src={avatar}
        height={200}
        width={200}
        alignSelf={"center"}
        style={{borderRadius:"50%"}}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <VStack
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          You&apos;re in good company
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150,000+
          </chakra.strong>{' '}
          influencers use EEZY to manage their social media content!
        </chakra.h2>
      </Box> */}
      <VStack
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </VStack>
      {/* <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
          <path
            fill={'currentColor'}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box> */}
    </VStack>
  );
}
