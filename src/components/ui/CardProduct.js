import Image from "next/image";
import Link from "next/link";

export function ProductCard({ title, description, image, cta, detailed }) {
	return (
		<div className="flex flex-col items-center border-0">
			<div className="card-header">
				<Image alt="product" src={image} width={320} height={50} />
			</div>
			<div className="card-content border-1 p-7 text-white bg-[#151515] w-[320px] h-[330px]">
				<h1 className="font-bebas text-7xl text-center">{title}</h1>
				<div className="w-[250px] text-sm overflow-hidden">
					<span>{description}</span>
				</div>
			</div>
			<Link href={`/product/${detailed}`}>
				<div className="relative w-[200px] cursor-pointer">
					<div className="absolute right-0 -translate-y-7/3 translate-x-8/9">
						<span className="flex bg-white text-black font-bebas py-2 px-4 rotate-270 origin-center cursor-pointer">
							{cta}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
}
