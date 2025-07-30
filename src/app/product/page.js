import { Navbar, ProductCard } from "@/components";
import React from "react";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
} from "@/components/ui/dialog";

const Product = () => {
	return (
		<div className="product min-h-screen">
			<Navbar />
			<div className="flex justify-center">
				<div className="translate-y-1/14">
					<ProductCard
						title="CINCIN"
						description={
							<>
								<strong>
									<i>Cincin Pewterland Official</i>
								</strong>{" "}
								adalah perhiasan logam eksklusif yang dirancang dengan detail
								artistik dan sentuhan personal. Terbuat dari bahan pewter
								berkualitas, cincin ini bukan sekadar aksesori, tapi simbol
								karakter, keberanian, dan identitas.
							</>
						}
						image="/images/product/cincin.jpg"
						cta="LEBIH BANYAK"
						cardDescription={
							<>
								<strong>
									<i>Cincin Pewterland Official</i>
								</strong>{" "}
								adalah karya seni logam yang menggabungkan estetika klasik
								dengan pesan personal yang kuat. Dibuat dari bahan pewter
								berkualitas tinggi, setiap cincin dipahat secara detail dengan
								sentuhan handmade yang menjadikannya unik dan berkarakter. Lebih
								dari sekadar perhiasan, cincin ini menjadi simbol harga diri,
								kekuatan, dan identitas personal. Desainnya terinspirasi dari
								elemen maskulin, simbolik, hingga gaya gothic-modern, cocok
								untuk mereka yang ingin tampil beda dan punya makna dalam setiap
								benda yang dikenakan.
							</>
						}
					/>
				</div>
				<div>
					<ProductCard
						title="KALUNG"
						description={
							<>
								<strong>
									<i>Kalung Pewterland Official</i>
								</strong>{" "}
								aksesori logam berkualitas tinggi yang dirancang dengan detail
								artistik dan sentuhan personal.
							</>
						}
						image="/images/product/kalung.jpg"
						cta="LEBIH BANYAK"
						cardDescription={
							<>
								<strong>
									<i>Kalung Pewterland Official</i>
								</strong>{" "}
								adalah perhiasan logam yang dirancang sebagai simbol identitas
								dan ekspresi diri. Dibuat dari bahan pewter berkualitas tinggi,
								setiap kalung dipahat secara detail dengan pendekatan handmade,
								menghasilkan tampilan yang elegan, kuat, dan bermakna. Desainnya
								memadukan unsur klasik dan kontemporer dari motif simbolik,
								gothic, hingga geometris yang cocok untuk pemakai yang ingin
								tampil berkarakter dan tak biasa. Kalung ini bukan sekadar
								aksesori, tapi representasi nilai, prinsip, atau kenangan yang
								ingin dikenakan dengan bangga.
							</>
						}
					/>
				</div>
				<div className="translate-y-1/14">
					<ProductCard
						title="SABUK"
						description={
							<>
								<strong>
									<i>Sabuk Pewterland Indonesia</i>
								</strong>{" "}
								adalah aksesori bergaya maskulin yang menggabungkan kekuatan
								desain logam pewter dengan detail artistik yang khas.
							</>
						}
						image="/images/product/sabuk.jpg"
						cta="LEBIH BANYAK"
						cardDescription={
							<>
								<strong>
									<i>Sabuk Pewterland Official</i>
								</strong>{" "}
								adalah lebih dari sekadar aksesori fungsional—ini adalah
								pernyataan gaya dan simbol harga diri. Menggabungkan material
								logam pewter berkualitas tinggi pada kepala sabuk dengan desain
								yang maskulin dan detail ukiran artistik, setiap sabuk dirancang
								untuk mencerminkan karakter kuat dan elegan pemakainya. Dengan
								sentuhan handmade dan pendekatan desain yang simbolik, sabuk ini
								cocok untuk mereka yang menghargai keunikan, ketegasan, dan
								keindahan dalam satu bentuk.
							</>
						}
					/>
				</div>
				<div>
					<ProductCard
						title="MEDALI"
						description={
							<>
								<strong>
									<i>Medali Pewterland Official</i>
								</strong>{" "}
								adalah simbol kehormatan yang dirancang dengan detail artistik
								dan filosofi mendalam. Terbuat dari logam pewter berkualitas
								tinggi, setiap medali diproses secara handmade untuk menciptakan
								bentuk yang unik, solid, dan penuh nilai estetika.
							</>
						}
						image="/images/product/medali.jpg"
						cta="LEBIH BANYAK"
						cardDescription={
							<>
								<strong>
									<i>Medali Pewterland Official</i>
								</strong>{" "}
								adalah simbol kehormatan yang dirancang dengan detail artistik
								dan filosofi mendalam. Terbuat dari logam pewter berkualitas
								tinggi, setiap medali diproses secara handmade untuk menciptakan
								bentuk yang unik, solid, dan penuh nilai estetika. Lebih dari
								sekadar tanda pencapaian, medali ini menjadi representasi dari
								perjuangan, dedikasi, dan kebanggaan. Cocok digunakan dalam
								acara penghargaan, kompetisi bergengsi, hingga momen-momen
								istimewa yang layak diabadikan dalam bentuk fisik yang bermakna.
							</>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Product;
