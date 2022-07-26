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
		fullName: "John Doe",
		colorTypeId: 0,
		favoriteColorId: 5,
		numberOfKeyboards: 32,
		likesMusic: true,
		favoriteGenreId: 3,
		ipAddress: "124.41.231.44",
		address: {
			city: "San Diego",
			street: "123 Main St",
			zip: "79018",
			state: "CA",
		},
	};

  //@ts-ignore
	fields: FormlyFieldConfig[] = demo_fields;

	constructor(private readonly appService: AppService) {}

	onSubmit(model: DemoFormComponent["model"]) {
		console.log(model);
	}
}
