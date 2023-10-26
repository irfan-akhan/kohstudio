"use client";
import { Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import data from "../../../../lib/data.json";
import { useRouter } from "next/navigation";
import styles from "../../../../styles/project.module.css";

export default function page() {
  const router = useRouter();
  const projects = Object?.values(data)?.flatMap((item) => item);
  return (
    <Container my={"9rem"} maxW={"70rem"}>
      <Heading textAlign={"center"} my={10}>
      { `Category ${projects?.typology || ""} `}
      </Heading>
      <Flex flexWrap={"wrap"} gap={20}>
        {projects?.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
            }}
            onClick={() => {
              router.push(`/projects/category/${item?.id}`);
            }}
          >
            <div className={styles.card__content}>
              <Image
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80"
                height={300}
                width={300}
                alt="project_banner"
                style={{ borderRadius: "10px" }}
              />
              <p className={styles.card__title}>{item?.name}</p>
              <p className={styles.card__description}>{item?.description}</p>
              <div>
                <Link href="/" className={styles.card__link}>
                  More Info <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Flex>
    </Container>
  );
}
