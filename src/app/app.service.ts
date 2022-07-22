import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AppService {
	constructor() {}

	getUserTypes() {
		return of([
			{ value: 0, label: "Admin" },
			{ value: 1, label: "Default" },
      { value: 2, label: "🥶😇🥲" },
		]);
	}

  getColors() {
		return of([
			{ value: 0, label: "Blue", group: "Polychome" },
			{ value: 1, label: "Green", group: "Polychome" },
      { value: 2, label: "Pink", group: "Polychome" },
      { value: 3, label: "Orange", group: "Polychome" },
			{ value: 4, label: "Teal", group: "Polychome" },
      { value: 5, label: "Yellow", group: "Polychome" },
      { value: 6, label: "Red", group: "Polychome" },
      { value: 7, label: "Black", group: "Monochrome" },
      { value: 8, label: "White", group: "Monochrome" },
      { value: 9, label: "Gray", group: "Monochrome" },
		]);
	}
}
