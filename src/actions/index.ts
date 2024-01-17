"use server";

export async function getCategories() {
	try {
		const response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/categories.php"
		);
		const data = await response.json();
		return data.categories;
	} catch (error) {
		console.log(error);
	}
}
