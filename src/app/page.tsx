import CategoriesList from "@/components/CategoriesList";
import { Suspense } from "react";

export default async function Home() {
	return (
		<main className="justify-between text-gray-600">
			<div className="bg-gray-100 w-full flex justify-center px-4">
				<div className="max-w-5xl w-full flex justify-center flex-col items-center  font-bold py-24 gap-6">
					<p className="text-sm">mealapp API website</p>
					<h1 className="text-4xl text-center">See All The Delicious Foods</h1>
				</div>
			</div>

			<Suspense fallback={<h1>loading</h1>}>
				<CategoriesList />
			</Suspense>
		</main>
	);
}
