import { Navbar } from "@/components";
import Footer from "@/components/footer";

const About = () => {
	return (
		<div className="about flex flex-col justify-between min-h-screen">
			<Navbar />
			<div className="flex min-h-full pb-35">
				<div className="w-1/2">.</div>
				<div className="w-1/2 flex flex-col justify-center gap-5">
					<h1 className="font-bebas text-white text-9xl">
						PEWTERLAND OFFICIAL
					</h1>
					<div className="max-w-4xl">
						<span className="text-white text-xl">
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
