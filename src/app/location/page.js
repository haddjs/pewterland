import { Navbar } from "@/components";
import { pics } from "@/constants/data";
import Image from "next/image";
import Footer from "@/components/footer";

const Location = () => {
	return (
		<div className="location flex flex-col justify-between min-h-full min-w-full lg:min-h-screen lg:min-w-screen">
			<Navbar />
			<div className="flex justify-center gap-10">
				{pics.reverse().map((item) => (
					<Image
						key={item.id}
						alt={item.desc}
						src={item.src}
						width={300}
						height={100}
					/>
				))}
			</div>
			<div className="flex flex-col gap-10 pt-10 px-[21rem]">
				<div className="flex justify-center items-center">
					<h1 className="font-bebas text-white text-8xl font-bold">LOKASI</h1>
				</div>
				<div className="items-center">
					<span className="text-white text-xs">
						Saat ini,{" "}
						<span className="font-bold italic">Pewterland Official</span> belum
						memiliki toko offline permanen, namun kami melayani pemesanan dan
						konsultasi secara online penuh melalui media sosial resmi, website,
						dan platform marketplace. Meski begitu, Pewterland kerap hadir
						secara eksklusif di berbagai event kreatif, pameran seni, maupun
						bazar kolaborasi untuk menampilkan produk secara langsung. Bagi Anda
						yang ingin berkonsultasi langsung terkait desain custom atau melihat
						sampel produk secara fisik, Pewterland menyediakan opsi janji temu
						terbatas di studio/workshop berdasarkan permintaan dan ketersediaan
						waktu. Informasi lebih lanjut dapat diperoleh melalui kontak resmi
						atau DM Instagram kami.
					</span>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Location;
