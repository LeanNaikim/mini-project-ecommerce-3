// import "@/styles/globals.css";
// import { Metadata, Viewport } from "next";
// import { siteConfig } from "@/config/site";
// import { fontSans } from "@/config/fonts";
// import { Navbar } from "@/components/navbar";
// import { Link } from "@nextui-org/link";
// import clsx from "clsx";
// import Footer from "@/components/footer";
// import StoreProvider from "../SessionProvider";
// import SessionWrapper from "../SessionProvider";
// import { SessionProvider } from "next-auth/react";
// import Provider from "../provider";

// export const metadata: Metadata = {
// 	title: "ISTAD Ecommerce Web",
// 	description: "ISTAD Ecommerce Web is a web application for selling products.",
// 	openGraph: {
// 		title: "ISTAD Ecommerce Web",
// 		description:
// 			"ISTAD Ecommerce Web is a web application for selling products.",
// 		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
// 	},
// };

// export const viewport: Viewport = {
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		// { media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// }

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en">
// 			<SessionWrapper>
// 				<body
// 					className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
// 				>
// 					<StoreProvider>
// 						<header>
// 							<NavbarComponent />
// 						</header>
// 						<ErrorBoundary errorComponent={Error}>
// 							<Suspense fallback={<Loading />}>{children}</Suspense>
// 						</ErrorBoundary>
// 					</StoreProvider>
// 				</body>
// 			</SessionWrapper>
// 		</html>
// 	);
// }

import { Suspense } from "react";
import "@/styles/globals.css";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";
import FooterComponent from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";

export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SessionWrapper>
				<body
					
				>
					<StoreProvider>
						<header>
							<NavbarComponent/>
						</header>
						<ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
						<FooterComponent/>
					</StoreProvider>
				</body>
			</SessionWrapper>
		</html>
	);
}

