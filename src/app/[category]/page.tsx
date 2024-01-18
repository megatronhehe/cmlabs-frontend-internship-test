import MealsList from "@/components/MealsList";
import MealsSkeleton from "@/components/skeletons/MealsSkeleton";
import Link from "next/link";
import React, { Suspense } from "react";
import { PiCaretRight, PiHouseFill } from "react-icons/pi";

export default async function page({
	params,
}: {
	params: { category: string };
}) {
	const categoryName = params.category;

	return (
		<main className="text-gray-600">
			<div className="bg-gray-100 w-full flex justify-center px-4">
				<div className="max-w-5xl w-full flex justify-center flex-col items-center  font-bold py-24 gap-6">
					<h1 className="text-4xl text-center">{params.category}</h1>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<div className="max-w-5xl flex gap-2 w-full mt-6 ">
					<Link href="/" className="flex gap-2 items-center">
						<PiHouseFill /> Home
					</Link>
					<Link href={`/${categoryName}`} className="flex gap-2 items-center">
						<PiCaretRight /> {categoryName}
					</Link>
				</div>
			</div>

			<Suspense fallback={<MealsSkeleton />}>
				<MealsList categoryName={categoryName} />
			</Suspense>
		</main>
	);
}
