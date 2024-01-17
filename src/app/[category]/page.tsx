import MealsList from "@/components/MealsList";
import React, { Suspense } from "react";

export default async function page({
	params,
}: {
	params: { category: string };
}) {
	const categoryName = params.category;

	return (
		<main className="justify-between text-gray-600">
			<div className="bg-gray-100 w-full flex justify-center px-4">
				<div className="max-w-5xl w-full flex justify-center flex-col items-center  font-bold py-24 gap-6">
					<h1 className="text-4xl text-center">{params.category}</h1>
				</div>
			</div>

			<Suspense fallback={<>Loading...</>}>
				<MealsList categoryName={categoryName} />
			</Suspense>
		</main>
	);
}
