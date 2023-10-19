"use client";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
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
