import { getCategoryDetails } from "@/actions";
import React from "react";
import MealCard from "./MealCard";

type Meal = {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
};

export default async function MealsList({
	categoryName,
}: {
	categoryName: string;
}) {
	const meals = await getCategoryDetails(categoryName);

	return (
		<div className="flex justify-center sm:mt-24 p-6">
			<div className="max-w-5xl w-full grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4">
				{meals.map((meal: Meal) => (
					<MealCard key={meal.idMeal} meal={meal} />
				))}
			</div>
		</div>
	);
}
