import { Providers } from "./providers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "./globals.css";

export const metadata = {
	title: "Kohstudio",
	description: "Koh studio: One place architecture solutions",
};

export default function RootLayout({ children }) {
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
