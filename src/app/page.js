"use client";

import "@/styles/globals.css";

import { Navbar } from "@/components";

const Home = () => {
	return (
		<div className="home flex flex-col min-h-screen justify-between">
			<Navbar />
			<h1 className="text-white text-center text-[11rem] font-bebas">
				PEWTERLAND OFFICIAL
			</h1>
		</div>
	);
};

export default Home;
