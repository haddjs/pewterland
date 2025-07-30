import Image from "next/image";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogHeader,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";

export function ProductCard({
	title,
	description,
	image,
	cta,
	cardDescription,
}) {
	return (
		<Dialog>
			<DialogContent>
				<DialogHeader>
					<DialogTitle></DialogTitle>
					<DialogDescription className="p-8">
						{cardDescription}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<span className="absolute bg-white text-black font-bebas font-bold text-2xl py-1 px-10 cursor-pointer">
							KEMBALI
						</span>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
			<div className="flex flex-col items-center border-0">
				<div className="card-header">
					<Image alt="product" src={image} width={450} height={50} />
				</div>
				<div className="card-content border-1 p-7 text-white bg-[#151515] w-[450px] h-[300px] relative">
					<h1 className="font-bebas text-7xl pb-3 text-center">{title}</h1>
					<div className="w-[350px]">
						<span>{description}</span>
					</div>
					<div className="relative cursor-pointer">
						<div className="absolute right-0 -translate-y-7/3 translate-x-1/2">
							<DialogTrigger asChild>
								<span className="flex bg-white text-black font-bebas text-2xl py-2 px-4 rotate-270 origin-center cursor-pointer">
									{cta}
								</span>
							</DialogTrigger>
						</div>
					</div>
				</div>
			</div>
		</Dialog>
	);
}
