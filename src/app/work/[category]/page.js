"use client";
import { Container, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../../styles/project.module.css";
// import Image from "next/image";
import data from "../../../../lib/data.json";
import { useRouter, useParams, notFound } from "next/navigation";
import { useEffect } from "react";

export default function page() {
	const { category } = useParams();
	const router = useRouter();
	const projects = data[category] || [];
	useEffect(() => {
		if (!projects?.length) {
			return notFound();
		}
	}, [projects]);
	return (
		<Container my={"9rem"} maxW={"70rem"}>
			<Heading textAlign={"center"} my={10} textTransform="uppercase">
				{category}
			</Heading>
			<Flex flexWrap={"wrap"} gap={20}>
				{projects?.map((item, index) => (
					<div
						data-aos="fade-right"
						data-aos-delay={50 * (index + 1)}
						key={index}
						className={styles.card}
						style={{
							backgroundImage: `url(${item.banner})`,
							backgroundSize: "cover",
							objectFit: "cover",
						}}
						onClick={() => {
							router.push(`/work/${item.typology}/${item?.id}`);
						}}
					>
						<div className={styles.card__content}>
							<Image
								src={
									item?.images ? item.images[0] : item?.banner
								}
								width="300px"
								height="200px"
								objectFit="cover"
								alt="project_banner"
								style={{ borderRadius: "10px" }}
							/>
							<p className={styles.card__title}>{item?.name}</p>
							<p className={styles.card__description}>
								{item?.description}
							</p>
							<div>
								<Link href="#" className={styles.card__link}>
									More Info
									<BsArrowRight
										fontSize={"2rem"}
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
