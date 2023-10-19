"use client";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: `'Ubuntu', sans-serif`,
		body: `'Roboto', sans-serif`,
	},
});
export function Providers({ children }) {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	);
}
