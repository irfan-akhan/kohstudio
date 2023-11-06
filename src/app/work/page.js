"use client";
import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../styles/project.module.css";
import data from "../../../lib/data.json";
import { useRouter } from "next/navigation";

export default function page() {
	const router = useRouter();
	const projects = Object?.values(data)?.flatMap((item) => item);
	return (
		<Container my={"9rem"} maxW={{ base: "100%", lg: "70rem" }}>
			<Heading textAlign={"center"} my={10}>
				WORK
			</Heading>
			<Flex flexWrap={"wrap"} gap={20}>
				{projects?.map((item, index) => (
					<div
						data-aos="fade-right"
						data-aos-delay={50 * (index + 1)}
						key={index}
						className={styles.card}
						style={{
							backgroundImage: `url(${item?.banner})`,
							backgroundSize: "cover",
							objectFit: "cover",
						}}
						onClick={() => {
							router.push(`/work/${item.typology}/${item?.id}`);
						}}
					>
						<div className={styles.card__content}>
							<div>
								<Image
									src={
										data?.[item.typology][0]
											? data?.[item.typology][0].images[0]
											: data?.[item.typology][0].banner
									}
									height={300}
									width={300}
									mb="5"
									alt="project_banner"
									style={{
										borderRadius: "10px",
										width: "300px",
										height: "200px",
									}}
								/>

								<p className={styles.card__title}>
									{item?.name}
								</p>
								<p className={styles.card__description}>
									{item?.typology}
								</p>
							</div>

							<div>
								<Link href="#" className={styles.card__link}>
									View Project&nbsp;
									<BsArrowRight
										fontSize={"1rem"}
										color="#e7eae6"
									/>
								</Link>
							</div>
						</div>
					</div>
				))}
			</Flex>
		</Container>
	);
}
