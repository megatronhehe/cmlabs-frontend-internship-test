import { getMealDetails } from "@/actions";
import Link from "next/link";
import React from "react";
import { PiCaretRight, PiHouseFill } from "react-icons/pi";

export default async function page({
	params,
}: {
	params: { category: string; mealId: string };
}) {
	const meal = await getMealDetails(params.mealId);

	const { strMeal, idMeal } = meal;

	return (
		<main className="justify-between text-gray-600">
			<div className="bg-gray-100 w-full flex justify-center px-4">
				<div className="max-w-5xl w-full flex justify-center flex-col items-center  font-bold py-24 gap-6">
					<h1 className="text-4xl text-center">{strMeal}</h1>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="max-w-5xl flex gap-2 w-full mt-6 ">
					<Link href="/" className="flex gap-2 items-center">
						<PiHouseFill /> Home
					</Link>
					<Link
						href={`/${params.category}`}
						className="flex gap-2 items-center"
					>
						<PiCaretRight /> {params.category}
					</Link>
					<Link
						href={`/${params.category}/${idMeal}`}
						className="flex gap-2 items-center"
					>
						<PiCaretRight /> {strMeal}
					</Link>
				</div>
			</div>
		</main>
	);
}
