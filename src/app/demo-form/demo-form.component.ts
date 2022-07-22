import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { AppService } from "../app.service";
import demo_fields from "../formly/demo.fields.json";

@Component({
	selector: "app-demo-form",
	templateUrl: "./demo-form.component.html",
	styleUrls: ["./demo-form.component.scss"],
})
export class DemoFormComponent {
	form = new FormGroup({});
	options: FormlyFormOptions = {
		// Use with JSON powered forms
		// No need to hydrate reference data on directly on field config
		formState: {
			selectOptionsData: {
				genres: [
					{ id: 0, name: "Rock" },
					{ id: 1, name: "Jazz" },
					{ id: 2, name: "Blues" },
					{ id: 3, name: "EDM" },
					{ id: 4, name: "Country" },
					{ id: 5, name: "Big Band" },
					{ id: 6, name: "Pop" },
				],
        userTypes: this.appService.getUserTypes(),
        colors: this.appService.getColors(),
			},
		},
	};

	model = {
		email: "email@gmail.com",
		userId: 290,
		fullName: "John Doe",
		favoriteColorId: 5,
		typeId: 0,
		ipAddress: "124.41.231.44",
		numberOfKeyboards: 32,
		likesMusic: true,
		favoriteGenreId: 3,
    address: {
      town: "London",
    }
	};

  fields: FormlyFieldConfig[] = demo_fields;
	// fields: FormlyFieldConfig[] = [
	// 	{
	// 		key: "email",
	// 		type: "input",
	// 		templateOptions: {
	// 			label: "Email address",
	// 			placeholder: "Enter email",
	// 			type: "email",
	// 			required: true,
	// 		},
	// 	},
	// 	{
	// 		key: "fullName",
	// 		type: "input",
	// 		templateOptions: {
	// 			label: "Full Name",
	// 		},
	// 	},
	// 	{
	// 		key: "numberOfKeyboards",
	// 		type: "input",
	// 		templateOptions: {
	// 			label: "Number of Keyboards",
	// 			type: "number",
	// 			min: 31,
	// 		},
	// 	},
	// 	{
	// 		template: `<hr/><hr/><hr/><br/>`,
	// 	},
	// 	{
	// 		key: "typeId",
	// 		type: "select",
	// 		templateOptions: {
	// 			label: "User Type",
	// 			options: this.appService.getUserTypes(),
	// 		},
	// 	},
	// 	{
	// 		key: "favoriteColorId",
	// 		type: "select",
	// 		templateOptions: {
	// 			label: "Favorite Color",
	// 			options: this.appService.getColors(),
	// 		},
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
	// 	{
	// 		key: "favoriteGenreId",
	// 		type: "select",
	// 		templateOptions: {
	// 			label: "Favorite Music",
	// 			options: [],
	// 			valueProp: "id",
	// 			labelProp: "name",
	// 		},
	// 		hideExpression: "!model.likesMusic",
	// 		expressionProperties: {
	// 			"templateOptions.options": "formState.selectOptionsData.genres",
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
  //   {
  //     key: 'address',
  //     wrappers: ['panel'],
  //     templateOptions: { label: 'Address' },
  //     fieldGroup: [{
  //       key: 'town',
  //       type: 'input',
  //       templateOptions: {
  //         required: true,
  //         type: 'text',
  //         label: 'Town',
  //       },
  //     }],
  //   },
	// ];

	constructor(private readonly appService: AppService) {}

	onSubmit(model: DemoFormComponent["model"]) {
		console.log(model);
	}
}
