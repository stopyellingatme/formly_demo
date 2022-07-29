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

  fields = demo_fields;
	// fields: FormlyFieldConfig[] = [
	// 	{
	// 		key: "email",
	// 		type: "input",
	// 		templateOptions: {
	// 			label: "Email address",
	// 			required: true,
	// 		},
	// 	},
	// 	{
	// 		key: "numberOfKeyboards",
	// 		type: "input",
	// 		templateOptions: {
	// 			label: "Number of Keyboards",
	// 			type: "number",
	// 			min: 10,
	// 		},
	// 	},
	// 	{
	// 		key: "ipAddress",
	// 		type: "input",
	// 		templateOptions: {
	// 			label: "IP Address",
	// 		},
	// 		validators: {
	// 			validation: ["ip"],
	// 		},
	// 	},
	// 	{
	// 		template: `<br/><hr/><br/>`,
	// 	},
	// 	{
	// 		key: "colorTypeId",
	// 		type: "select",
	// 		templateOptions: {
	// 			label: "Color Type",
	// 			options: this.appService.getColorTypes(),
	// 		},
	// 	},
	// 	{
	// 		key: "favoriteColorId",
	// 		type: "select",
	// 		templateOptions: {
	// 			label: "Favorite Color",
	// 			options: [],
	// 		},
	// 		expressionProperties: {
	// 			hide: "!model.colorTypeId && model.colorTypeId !== 0",
	// 			"model.favoriteColorId": "!model.colorTypeId && model.colorTypeId !== 0 ? null : model.favoriteColorId",
	// 			"templateOptions.options": "formState.selectOptionsData.colors",
	// 		},
	// 	},
	// 	{
	// 		template: `<br/><hr/><br/>`,
	// 	},
	// 	{
	// 		key: "likesMusic",
	// 		type: "radio",
	// 		templateOptions: {
	// 			label: "Likes Music?",
	// 			options: [
	// 				{ value: true, label: "Yes" },
	// 				{ value: false, label: "No" },
	// 			],
	// 		},
	// 	},
  //   {
  //     key: "favoriteGenreId",
  //     type: "autocomplete",
  //     templateOptions: {
  //       label: "Favorite Music",
  //       options: [],
  //     },
  //     expressionProperties: {
  //      "hide": "!model.likesMusic",
  //       "templateOptions.options": "formState.selectOptionsData.genres",
  //      "model.favoriteGenreId": "!model.likesMusic ? null : model.favoriteGenreId",
  //     },
  //   },
  //   {
  //     key: "address",
  //     wrappers: ["panel"],
  //     templateOptions: { label: "Address" },
  //     fieldGroup: [
  //       {
  //         key: "street",
  //         type: "input",
  //         templateOptions: {
  //           label: "Street",
  //         },
  //       },
  //       {
  //         key: "city",
  //         type: "input",
  //         templateOptions: {
  //           label: "City",
  //         },
  //       },
  //     ],
  //   },
	// ];

	options: FormlyFormOptions = {
		formState: {
			selectOptionsData: {
				colors: this.appService.getColors(this.model.colorTypeId),
				colorTypes: this.appService.getColorTypes(),
				genres: this.appService.getGenres(),
			},
		},
	};

	constructor(private readonly appService: AppService) {
		setTimeout(() => {
			this.onFieldChanges();
		}, 2000);
	}

	onFieldChanges() {
		this.form.get("colorTypeId").valueChanges.subscribe((colorTypeId) => {
			this.options.formState.selectOptionsData["colors"] = this.appService.getColors(colorTypeId);
		});
	}

	onSubmit(model: DemoFormComponent["model"]) {
		console.log(model);
	}
}
