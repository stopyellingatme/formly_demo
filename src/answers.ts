/**
  Make sure to go over the app.module inpprts and setting up the formly.config file
 */

// Easy and simple. Just an input field.
// Defaults to text.
// Main thing is to ensure the Key and Modal[key] are the same.
// * Go over the different ways to add validation
// Field is prepopulated with model value as long as keys match
// {
// 	key: "email",
// 	type: "input",
// 	templateOptions: {
// 		label: "Email address",
// 	},
// },
// 		required: true,

// Number input field... with validation
// {
// 	key: "numberOfKeyboards",
// 	type: "input",
// 	templateOptions: {
// 		label: "Number of Keyboards",
// 		type: "number",
// 		min: 10,
// 	},
// },

// We can add custom validators to our config and display the error however we want
// {
// 	key: "ipAddress",
// 	type: "input",
// 	templateOptions: {
// 		label: "IP Address",
// 	},
// 	validators: {
// 		validation: ["ip"],
// 	},
// },

// {
//   key: 'ip',
//   type: 'input',
//   templateOptions: {
//     label: 'IP Address (custom validation message through `validation` property)',
//     required: true,
//     pattern: /(\d{1,3}\.){3}\d{1,3}/,
//   },
//   validation: {
//     messages: {
//       pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid IP Address`,
//     },
//   },
// },

// Little different... we can add plain html elements to template
// {
// 	template: `<br/><hr/><br/>`,
// },

// Alright, now we're using a dropdown box... getting complicated
/**
We're going to go over how to get ref data in different ways
- We can hide/disable a dropdown based on the value of another field
- Filtering can be done in a couple of different ways...
*/

// {
//   key: "colorTypeId",
//   type: "select",
//   templateOptions: {
//     label: "Color Type",
//     options: [
//        { value: null, label: "--" },
//        { value: 0, label: "Polychrome" },
//        { value: 1, label: "Monochrome" },
//      ],
//   },
// },

// We can pass an observalbe straight to the options prop as well!
// options: this.appService.getColorTypes(),

// We can even dropdown options in groups...
// {
//   key: "favoriteColorId",
//   type: "select",
//   templateOptions: {
//     label: "Favorite Color",
//     options: this.appService.getColorsWithGroups(),
//   },
// },

// - We can hide/disable a dropdown based on the value of another field
// expressionProperties: {
//   "templateOptions.disabled": "!model.colorTypeId && model.colorTypeId !== 0",
// },

// It's also very easy to hide the field based on a condition
// "hide": "!model.colorTypeId && model.colorTypeId !== 0",

/**
  What if we change the colorTypeId field?
  We need to update the favoriteColorId field to make sure we don't get an inconsistent state in the db.
  So we can hook directly into the model and update the field.
*/
// "model.favoriteColorId": "!model.colorTypeId && model.colorTypeId !== 0 ? null : model.favoriteColorId",

//* But what about filtering dropdown values by another field's value?
// We can use the hooks option to hook directly into the fields lifecycle
//* Replace templateOptions with: options: this.appService.getColors(this.model.colorTypeId),
// hooks: {
//   onInit: (field: FormlyFieldConfig) => {
//     field.form.get("colorTypeId").valueChanges.subscribe((colorTypeId) => {
//       field.templateOptions.options = this.appService.getColors(colorTypeId);
//     });
//    },
// }

//* Or we can use the formOptions to hydrate our field with options in much the same way
//* Tell them to wait while you add all this stuff... then go over it.
// "templateOptions.options": "formState.selectOptionsData.colors",
//* Don't forget to add the [options] attribute to the formly-form
// options: FormlyFormOptions = {
//   formState: {
//     selectOptionsData: {
//       colors: this.appService.getColors(this.model.colorTypeId),
//       colorTypes: this.appService.getColorTypes(),
//       genres: [
//         { id: 0, name: "Rock" },
//         { id: 1, name: "Jazz" },
//         { id: 2, name: "Blues" },
//         { id: 3, name: "EDM" },
//         { id: 4, name: "Country" },
//         { id: 5, name: "Big Band" },
//         { id: 6, name: "Pop" },
//       ],
//     },
//   },
// };

// onFieldChanges() {
//   this.form.get("colorTypeId").valueChanges.subscribe((colorTypeId) => {
//     this.options.formState.selectOptionsData["colors"] = this.appService.getColors(colorTypeId);
//   });
// }

//* Go over what you just did... 'twas a lot of things

// {
// 	template: `<br/><hr/><br/>`,
// },

// You've seen dependant fields... but this is with a radio button. Woooooooo
// {
// 	key: "likesMusic",
// 	type: "radio",
// 	templateOptions: {
// 		label: "Likes Music?",
// 		options: [
// 			{ value: true, label: "Yes" },
// 			{ value: false, label: "No" },
// 		],
// 	},
// },

//* Main point of this section is to discuss the Label and Value Prop
// This field uses formOptions to get ref data AND is dependant on the likesMusic field
// Easy to index from ref data.
//* Doesn't have to conform to specific shape
// {
// 	key: "favoriteGenreId",
// 	type: "select",
// 	templateOptions: {
// 		label: "Favorite Music",
// 		options: [],
// 		valueProp: "id",
// 		labelProp: "name",
// 	},
// 	expressionProperties: {
//    "hide": "!model.likesMusic",
// 		"templateOptions.options": "formState.selectOptionsData.genres",
//    "model.favoriteGenreId": "!model.likesMusic ? null : model.favoriteGenreId",
// 	},
// },

//* Now... Custom field templates! We can use our own templates becasue god knows we need more then some inputs and dropdowns
//* What about an autocomplete field?
// Use appService call to get properly formatted data
// genres: this.appService.getGenres(),
// type: "autocomplete",

// {
// 	template: `<br/><hr/><br/>`,
// },

//* LAST BIT OF THE FIELD CONFIG!
// We can even add a custom form wrapper like an Card wrapper for our form
// key: "address", Which can bind to a model property giving us nested forms!
// {
// 	key: "address",
// 	wrappers: ["panel"],
// 	templateOptions: { label: "Address" },
// 	fieldGroup: [
//     {
// 			key: "street",
// 			type: "input",
// 			templateOptions: {
// 				label: "Street",
// 			},
// 		},
// 		{
// 			key: "city",
// 			type: "input",
// 			templateOptions: {
// 				label: "City",
// 			},
// 		},
// 	],
// },

//* NOW SHOW THAT ALL THIS CAN BE DONE WITH JSON! MUHAAHAHAAH!
//* NOW SHOW THAT ALL THIS CAN BE DONE WITH JSON! MUHAAHAHAAH!
//* NOW SHOW THAT ALL THIS CAN BE DONE WITH JSON! MUHAAHAHAAH!

// Little extra if you have the time. Some custome DSL fun
// constructor(private readonly appService: AppService, private readonly formlyService: FormlyService) {
// fields: FormlyFieldConfig[] = [
//   this.formlyService.input({key: "email", label: "Email"}),
//   this.formlyService.input({key: "fullName", label: "Full Name"}),
//   this.formlyService.number({key: "numberOfKeyboards", label: "Number of Keyboards"}),
//   this.formlyService.select({key: "favoriteColorId", label: "Favorite Color", options: this.appService.getColorsWithGroups()}),
//   this.formlyService.select({key: "favoriteGenreId", label: "Favorite Music", options: this.appService.getGenres()}),
// ];

// -------------------------------------------------- --------------------------------------------------
// -------------------------------------------------- --------------------------------------------------
// -------------------------------------------------- --------------------------------------------------

/**
 * formly config
 */
// import { FormControl, ValidationErrors } from "@angular/forms";
// import { ConfigOption, FormlyFieldConfig } from "@ngx-formly/core";
// import { AutocompleteComponent } from "../shared/templates/autocomplete.component";
// import { GroupWrapperComponent } from "../shared/wrappers/group-wrapper.component";
// import { FormlyValueChangeEvent } from "@ngx-formly/core/lib/components/formly.field.config";
// import { Subject } from "rxjs";

// export const formlyConfig: ConfigOption = {
// 	validators: [{ name: "ip", validation: IpValidator }],
// 	validationMessages: [
// 		{ name: "ip", message: IpValidatorMessage },
// 		{ name: "min", message: "Number is too low" },
// 		{ name: "max", message: "Number is too high" },
// 	],
// 	wrappers: [{ name: "panel", component: GroupWrapperComponent }],
// 	types: [{ name: "autocomplete", component: AutocompleteComponent }],
// };

// export function IpValidator(control: FormControl): ValidationErrors {
// 	return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { ip: true };
// }

// export function IpValidatorMessage(error: boolean, field: FormlyFieldConfig) {
// 	return `"${field?.formControl?.value}" is not a valid IP Address`;
// }
