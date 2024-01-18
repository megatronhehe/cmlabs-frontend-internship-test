"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Meal = {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
};

export default function MealCard({ meal }: { meal: Meal }) {
	const { strMealThumb, strMeal, idMeal } = meal;

	const pathname = usePathname();
	const categoryName = pathname.split("/")[1];

	return (
		<Link
			href={`/${categoryName}/${idMeal}`}
			className="relative flex items-center rounded-3xl justify-center overflow-hidden h-32 w-full"
		>
			<Image
				src={strMealThumb}
				width={200}
				height={150}
				alt={`thumbnail picture of ${strMeal} meal`}
				style={{ width: "auto", height: "auto" }}
			/>
			<div className="absolute w-full h-full flex items-center justify-center  bg-black text-white font-bold">
				<h1>{strMeal}</h1>
			</div>
		</Link>
	);
}
