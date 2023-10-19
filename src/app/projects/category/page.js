import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "../../../../styles/project.module.css";
import Image from "next/image";

export default function page() {
  return (
    <Container my={"9rem"} maxW={"70rem"}>
      <Heading textAlign={"center"} my={10}>
        Category
      </Heading>
      <Flex flexWrap={"wrap"} gap={20}>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
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
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className={styles.card__link}>
              <Link href="/">kaaz</Link>
              <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
            </div>
          </div>
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
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
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className={styles.card__link}>
              <Link href="/">kaaz</Link>
              <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
            </div>
          </div>
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
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
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className={styles.card__link}>
              <Link href="/">kaaz</Link>
              <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
            </div>
          </div>
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
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
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className={styles.card__link}>
              <Link href="/">kaaz</Link>
              <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
            </div>
          </div>
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
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
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className={styles.card__link}>
              <Link href="/">kaaz</Link>
              <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
            </div>
          </div>
        </div>
        <div
          className={styles.card}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80)",
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
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className={styles.card__link}>
              <Link href="/">kaaz</Link>
              <BsArrowRight fontSize={"2rem"} color="#e7eae6" />
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  );
}
