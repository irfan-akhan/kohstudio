"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position="fixed" minW="full" zIndex={100}>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"80px"}
				py={{ base: 2 }}
				px={{ base: 10 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? (
								<AiOutlineClose w={3} h={3} />
							) : (
								<RxHamburgerMenu w={5} h={5} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: "center", md: "space-between" }}
				>
					<Box
						textAlign={useBreakpointValue({
							base: "center",
							md: "left",
						})}
						fontFamily={"heading"}
						color={useColorModeValue("gray.800", "white")}
						fontWeight={"700"}
						fontSize={"20px"}
					>
						<Link href="/">
							<Image src="/logo.png" height="30" width="40" />
						</Link>
					</Box>

					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                textTransform={"capitalize"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Link href={navItem.href ?? "#"} style={{textTransform: "capitalize"}}>{navItem.label}</Link>
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Box
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            <Link href={href} style={{textTransform: "capitalize"}}>{label}</Link>
          </Box>
          <Box fontSize={"sm"} >
            <Link href={href}> {subLabel}</Link>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        justifyContent="flex-start"
        gap={2}
        display={"flex"}
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Box fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          <Link href={href ?? "#"}> {label}</Link>
        </Box>
        {children && (
          <Icon
            as={MdOutlineKeyboardArrowDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2}>
                <Link href={child.href}>{child.label}</Link>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Architecture",
    children: [
      {
        label: "Hospitality",
        href: "/projects",
      },
      {
        label: "Residential",
        href: "#",
      },
      {
        label: "Commercial",
        href: "#",
      },
    ],
  },
  {
    label: "Interior",
    children: [
      {
        label: "Hotels",
        
        href: "#",
      },
      {
        label: "Homes",
        href: "#",
      },
      {
        label: "Workplace",
        href: "#",
      },
    ],
  },
  {
    label: "Landscape",
    href: "/contact",
  },
  {
    label: "Urban Design",
    href: "/contact",
  },

  {
    label: "Exhibition",
    href: "/contact",
  },
  {
    label: "Product Design",
    href: "/contact",
  },
  {
    label: "International",
    children: [
      {
        label: "Architecture",
        href: "/aboutus",
      },
      {
        label: "Interior",
        href: "#",
      },
      {
        label: "Exhibition",
        href: "#",
      },
    ],
  },
  {
    label: "Team",
    href: "/ourteam",
  },
  {
    label: "About",
    children: [
      {
        label: "Offices",
        href: "/aboutus",
      },
      {
        label: "Carrers",
        href: "/careers",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
