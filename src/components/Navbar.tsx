import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<nav className="flex border-b justify-between items-center p-6">
			<Link href="/" className="font-semibold text-xl">
				mealapp
			</Link>
			<ul className="flex gap-6 text-sm">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/">Foods</Link>
				</li>
				<li>
					<Link href="/">Ingredients</Link>
				</li>
				<li>
					<Link href="/">Local Culinary</Link>
				</li>
			</ul>
		</nav>
	);
}
