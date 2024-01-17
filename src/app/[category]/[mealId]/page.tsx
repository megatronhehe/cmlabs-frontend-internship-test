import { getMealDetails } from "@/actions";
import React from "react";

export default async function page({
	params,
}: {
	params: { category: string; mealId: string };
}) {
	const meal = await getMealDetails(params.mealId);

	console.log(meal);

	const { strMeal } = meal;

	return (
		<main className="justify-between text-gray-600">
			<div className="bg-gray-100 w-full flex justify-center px-4">
				<div className="max-w-5xl w-full flex justify-center flex-col items-center  font-bold py-24 gap-6">
					<h1 className="text-4xl text-center">{strMeal}</h1>
				</div>
			</div>
		</main>
	);
}
