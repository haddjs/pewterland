import { Navbar } from "@/components";
import { ecommerce } from "@/constants/data";
import Image from "next/image";

import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
	return (
		<div className="contact min-h-screen">
			<Navbar />
			<div className="flex-col pt-30">
				<div className="font-bebas text-center text-white text-[10rem]">
					<h1>E-COMMERCE</h1>
				</div>
				<div className="flex justify-center gap-15">
					{ecommerce.map((index) => (
						<Image
							key={index.id}
							alt={index.desc}
							src={index.src}
							width={250}
							height={100}
							className="cursor-pointer"
						/>
					))}
				</div>
				<div className="flex flex-col items-center pt-10 gap-5 text-2xl font-semibold">
					<span className="text-white">HUBUNGI KAMI</span>
					<div className="flex gap-2">
						<FontAwesomeIcon
							icon={faWhatsapp}
							width={60}
							className="bg-white p-2 rounded-xl cursor-pointer"
						/>
						<FontAwesomeIcon
							icon={faInstagram}
							width={60}
							className="bg-white p-2 rounded-xl cursor-pointer"
						/>
						<FontAwesomeIcon
							icon={faEnvelope}
							width={60}
							className="bg-white p-2 rounded-xl cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
