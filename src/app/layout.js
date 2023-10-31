"use client";
import { Providers } from "./providers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// export const metadata = {
// 	title: "Kohstudio",
// 	description: "Koh studio: One place architecture solutions",
// };

export default function RootLayout({ children }) {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
	}, []);
	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
