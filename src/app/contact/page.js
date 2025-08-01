import { Navbar } from "@/components";
import { ecommerce } from "@/constants/data";
import Image from "next/image";
import Footer from "@/components/footer";

import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
	return (
		<>
			<div className="contact flex flex-col justify-between min-h-screen">
				<Navbar />
				<div className="flex-col pt-20">
					<div className="font-bebas text-center text-white text-9xl">
						<h1>E-COMMERCE</h1>
					</div>
					<div className="flex justify-center gap-15">
						{ecommerce.map((index) => (
							<a key={index.id} href={index.url} target="_blank">
								<Image
									alt={index.desc}
									src={index.src}
									width={200}
									height={100}
									className="cursor-pointer"
								/>
							</a>
						))}
					</div>
					<div className="flex flex-col items-center pt-10 gap-5 text-xl font-semibold">
						<span className="text-white">HUBUNGI KAMI</span>
						<div className="flex gap-2">
							<a href="https://wa.me/6282262212257/" target="_blank">
								<FontAwesomeIcon
									icon={faWhatsapp}
									width={50}
									height={50}
									className="bg-white p-2 rounded-xl cursor-pointer"
								/>
							</a>
							<a
								href="https://www.instagram.com/pewterlandofficial/"
								target="_blank">
								<FontAwesomeIcon
									icon={faInstagram}
									width={50}
									height={50}
									className="bg-white p-2 rounded-xl cursor-pointer"
								/>
							</a>
							<a href="mailto:pewterland.official@gmail.com" target="_self">
								<FontAwesomeIcon
									icon={faEnvelope}
									width={50}
									height={50}
									className="bg-white p-2 rounded-xl cursor-pointer"
								/>
							</a>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Contact;
