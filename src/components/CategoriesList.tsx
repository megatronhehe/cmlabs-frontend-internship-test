import { getCategories } from "@/actions";
import React from "react";
import CategoryCard from "./CategoryCard";

type Category = {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
	strCategoryDescription: string;
};

export default async function CategoriesList() {
	const categories = await getCategories();

	return (
		<div className="flex justify-center sm:mt-24 p-6">
			<div className="max-w-5xl w-full grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4">
				{categories.map((category: Category) => (
					<CategoryCard key={category.idCategory} category={category} />
				))}
			</div>
		</div>
	);
}
