import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { of, startWith, switchMap } from "rxjs";
import { AppService } from "../app.service";
import demo_fields from "../formly/demo.fields.json";

@Component({
	selector: "app-demo-form",
	templateUrl: "./demo-form.component.html",
	styleUrls: ["./demo-form.component.scss"],
})
export class DemoFormComponent {
	form = new FormGroup({});

	model = {
		email: "email@gmail.com",
		numberOfKeyboards: null,
		ipAddress: "124.41.231.44",
		colorTypeId: 0,
		favoriteColorId: 5,
		likesMusic: true,
		favoriteGenreId: 3,
		address: {
			city: "San Diego",
			street: "123 Main St",
			zip: "79018",
			state: "CA",
		},
	};

	fields: FormlyFieldConfig[] = [];

	constructor(private readonly appService: AppService) {
	}

	onSubmit(model: DemoFormComponent["model"]) {
		console.log(model);
	}
}
