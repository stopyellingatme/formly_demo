import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AppService {
	getColorTypes() {
		return of([
			{ value: null, label: "--" },
			{ value: 0, label: "Polychrome" },
			{ value: 1, label: "Monochrome" },
		]);
	}

	getColors(type: number = null) {
		return of(
			[
				{ value: 0, label: "Blue", type: 0 },
				{ value: 1, label: "Green", type: 0 },
				{ value: 2, label: "Pink", type: 0 },
				{ value: 3, label: "Orange", type: 0 },
				{ value: 4, label: "Teal", type: 0 },
				{ value: 5, label: "Yellow", type: 0 },
				{ value: 6, label: "Red", type: 0 },
				{ value: 7, label: "Black", type: 1 },
				{ value: 8, label: "White", type: 1 },
				{ value: 9, label: "Gray", type: 1 },
			].filter((color) => color.type === type)
		);
	}

	getColorsWithGroups() {
		return of([
			{ value: 0, label: "Blue", group: "Polychrome" },
			{ value: 1, label: "Green", group: "Polychrome" },
			{ value: 2, label: "Pink", group: "Polychrome" },
			{ value: 3, label: "Orange", group: "Polychrome" },
			{ value: 4, label: "Teal", group: "Polychrome" },
			{ value: 5, label: "Yellow", group: "Polychrome" },
			{ value: 6, label: "Red", group: "Polychrome" },
			{ value: 7, label: "Black", group: "Monochrome" },
			{ value: 8, label: "White", group: "Monochrome" },
			{ value: 9, label: "Gray", group: "Monochrome" },
		]);
	}

	// Use this with Autocomplete template!
	getGenres() {
		return of([
			{ value: 0, label: "Rock" },
			{ value: 1, label: "Jazz" },
			{ value: 2, label: "Blues" },
			{ value: 3, label: "EDM" },
			{ value: 4, label: "Country" },
			{ value: 5, label: "Big Band" },
			{ value: 6, label: "Pop" },
		]);
	}

	getUserTypes() {
		return of([
			{ value: 0, label: "Admin" },
			{ value: 1, label: "Default" },
			{ value: 2, label: "🥶😇🥲" },
		]);
	}
}
