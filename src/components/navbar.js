"use client";

import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/data";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<div className="flex px-20 pt-17 justify-between">
			<div>
				<Link href="/">
					<Image alt="logo" src="/images/logo.svg" width={90} height={30} />
				</Link>
			</div>
			<div className="flex gap-8">
				{navItems.map((item, index) => {
					const isActive = pathname === item.url;

					return (
						<Link key={index} href={item.url}>
							<span
								className={`transition ${
									isActive
										? "border-1 py-2 px-5 rounded-3xl bg-white text-black text-xs"
										: "border-1 py-2 px-5 rounded-3xl bg-none text-white hover:text-black hover:bg-white text-xs"
								} font-inter`}>
								{item.title}
							</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
