import { Navbar } from "@/components";
import Footer from "@/components/footer";

const About = () => {
	return (
		<div className="about flex flex-col justify-between min-h-screen">
			<Navbar />
			<div className="grid grid-cols-2 min-h-full pb-25">
				<div className="">.</div>
				<div className="flex flex-col ps-10 gap-5">
					<p className="font-bebas font-bold text-white text-[5.5rem] leading-20">
						PEWTERLAND OFFICIAL
					</p>
					<div className="max-w-[40rem]">
						<span className="text-white text-sm">
							Pewterland Indonesia adalah perusahaan kerajinan logam yang
							berbasis di Bandung, Jawa Barat, yang mengkhususkan diri dalam
							pembuatan berbagai produk aksesori logam custom seperti buckle
							sabuk, medali, pin, gantungan kunci, dan merchandise lainnya.
							Dengan mengusung konsep desain eksklusif dan pengerjaan handmade,
							Pewterland menawarkan solusi kreatif bagi kebutuhan personal
							maupun korporat.
						</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
