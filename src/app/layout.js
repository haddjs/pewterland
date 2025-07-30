import { Bebas_Neue, Inter, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const bebasneue = Bebas_Neue({
	variable: "--font-bebas",
	subsets: ["latin"],
	weight: ["400"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["variable"],
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["variable"],
});

export const metadata = {
	title: "Pewterland Official",
	description: "Built with NextJS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${bebasneue.variable} ${inter.variable} ${montserrat.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
