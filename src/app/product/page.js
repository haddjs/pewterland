import { Navbar, ProductCard } from "@/components";
import React from "react";

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
						detailed="cincin"
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
						detailed="kalung"
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
						detailed="sabuk"
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
						detailed="medali"
					/>
				</div>
			</div>
		</div>
	);
};

export default Product;
