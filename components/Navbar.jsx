"use client";

import {
	Box,
	Flex,
	IconButton,
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

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position="fixed" minW="full" zIndex={100}>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"80px"}
				py={{ base: 2 }}
				px={{ base: 2, md: 10 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
				width="100vw"
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					width="100vw"
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
					// flex={{ base: 1 }}
					align="center"
					width="100vw"
					justifyContent="space-between"
				>
					<Box
						textAlign={useBreakpointValue({
							base: "center",
							md: "left",
						})}
						marginLeft={{base:"auto", md: "0"}}
						fontFamily={"heading"}
						color={useColorModeValue("gray.800", "white")}
						fontWeight={"700"}
						fontSize={"20px"}
					>
						<Link href="/">KOH STUDIO</Link>
					</Box>

					<Flex display={{ base: "none", md: "flex" }}>
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
								<Link
									href={navItem.href ?? "#"}
									style={{ textTransform: "capitalize" }}
								>
									{navItem.label}
								</Link>
							</Box>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
								// minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
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
			_hover={{ bg: useColorModeValue("black", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box
					transition={"all .3s ease"}
					_groupHover={{ color: "white" }}
					fontWeight={500}
				>
					<Link href={href} style={{ textTransform: "capitalize" }}>
						{label}
					</Link>
				</Box>
				<Box fontSize={"sm"}>
					<Link href={href}> {subLabel}</Link>
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
				<Box
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
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

			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: "0!important" }}
			>
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
			// {
			// 	label: "Hospitality",
			// 	href: "/work",
			// },
			{
				label: "Residential",
				href: "/work/residential",
			},
			{
				label: "Commercial",
				href: "/work/commercial",
			},
		],
	},
	// {
	// 	label: "Interior",
	// 	children: [
	// 		{
	// 			label: "Hotels",

	// 			href: "#",
	// 		},
	// 		{
	// 			label: "Homes",
	// 			href: "#",
	// 		},
	// 		{
	// 			label: "Workplace",
	// 			href: "#",
	// 		},
	// 	],
	// },
	{
		label: "International",
		href: "/work/international",
	},
	// {
	// 	label: "Product Design",
	// 	href: "/contact",
	// },
	{
		label: "Team",
		href: "/ourteam",
	},
	{
		label: "About",
		href: "/aboutus",
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
