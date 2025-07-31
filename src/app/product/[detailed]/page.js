import { detailedProduct } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = () => {
	return detailedProduct.map((product) => ({
		detailed: product.detailed,
	}));
};

const ProductDetail = ({ params }) => {
	const product = detailedProduct.find(
		(item) => item.detailed === params.detailed
	);

	if (!product) return <div>Product not Found!</div>;

	return (
		<div className="detailed flex justify-center items-center min-h-screen text-white">
			<div className="flex justify-center gap-7">
				<div className="flex flex-col items-center gap-7">
					<h1 className="flex justify-center pt-4 text-[9rem] leading-none font-bebas font-extrabold bg-white text-black rounded-[3rem] w-[500px]">
						{product.title}
					</h1>
					<Image
						alt="Main Product"
						src={product.mainPic}
						width={500}
						height={100}
					/>
				</div>
				<div className="flex flex-col justify-evenly bg-(--background) w-1/3 rounded-2xl text-xl/loose">
					<div className="p-9">
						<p>{product.description}</p>
					</div>
					<div className="flex justify-end">
						<Link href="/product">
							<span className="bg-white text-black font-bebas font-bold text-2xl py-1 px-10 cursor-pointer">
								KEMBALI
							</span>
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-5 items-center">
					<Image
						alt="Logo"
						src={product.pic1}
						width={230}
						height={100}
						className="bg-white rounded-3xl"
					/>
					<Image alt="Product" src={product.pic2} width={230} height={100} />
					<Image alt="Material" src={product.pic3} width={230} height={100} />
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
