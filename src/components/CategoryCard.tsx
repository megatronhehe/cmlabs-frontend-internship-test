import Image from "next/image";
import Link from "next/link";

type Category = {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
	strCategoryDescription: string;
};

type CategoryCardProps = {
	category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
	const { strCategory, strCategoryThumb } = category;

	return (
		<Link
			href={`/${strCategory}`}
			className="relative flex items-center rounded-3xl justify-center overflow-hidden h-32 w-full"
		>
			<Image
				src={strCategoryThumb}
				width={200}
				height={150}
				alt={`thumbnail picture of ${strCategory} category`}
				style={{ width: "auto", height: "auto" }}
			/>
			<div className="absolute w-full h-full flex items-center justify-center bg-opacity-45 bg-black text-white font-bold">
				<h1>{strCategory}</h1>
			</div>
		</Link>
	);
}
