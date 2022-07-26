import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

const fields: FormlyFieldConfig[] = [
	// Easy and simple. Just an input field.
  // Defaults to text.
  // Main thing is to ensure the Key and Modal[key] are the same.
	{
		key: "fullName",
		type: "input",
		templateOptions: {
			label: "Full Name",
		},
	},
	// Now we add some validation
  // Field is still prepopulated with model value
	{
		key: "email",
		type: "input",
		templateOptions: {
			label: "Email address",
			required: true,
		},
	},
	// Number input field... with validation
	{
		key: "numberOfKeyboards",
		type: "input",
		templateOptions: {
			label: "Number of Keyboards",
			type: "number",
			min: 10,
		},
	},
  // We can add custom validators to our config and display the error however we want
  {
		key: "ipAddress",
		type: "input",
		templateOptions: {
			label: "IP Address",
		},
		validators: {
			validation: ["ip"],
		},
	},
	// Little different... we can add plain html elements to template
	{
		template: `<br/><hr/><br/>`,
	},
	// Alright, now we're using a dropdown box... getting complicated

/**
We're going to go over how to get ref data in different ways
- We can simply bind to the options property of the field
- We can pass an observalbe straight to the options prop as well!
- We can hide/disable a dropdown based on the value of another field
- Filtering can be done in a couple of different ways...
  - (Add formlyOptions) and show how to get data from formState
*/
			// options: [
      //   { value: null, label: "--" },
      //   { value: 0, label: "Polychrome" },
      //   { value: 1, label: "Monochrome" },
      // ],

      // options: this.appService.getColorTypes(),
  {
    key: "colorTypeId",
    type: "select",
    templateOptions: {
      label: "Color Type",
    },
  },
  // We can even show dropdowns in groups...
  {
    key: "favoriteColorId",
    type: "select",
    templateOptions: {
      label: "Favorite Color",
      options: this.appService.getColorsWithGroups(),
    },
    expressionProperties: {
      "disable": "!model.colorTypeId && model.colorTypeId !== 0",
      // "hide": "!model.colorTypeId && model.colorTypeId !== 0",

      /**
        What if we change the colorTypeId field?
        We need to update the favoriteColorId field to make sure we don't get an inconsistent state in the db.
        So we can hook directly into the model and update the field.
       */
      // "model.favoriteColorId": "!model.colorTypeId ? null : model.favoriteColorId",

      //* But what about filtering dropdown values by another field?
      // We can use the hooks option to hook directly into the fields lifecycle
      // Or we can use the formOptions to hydrate our firld with options in much the same way

      // "templateOptions.options": "formState.selectOptionsData.colors",
    },
    // hooks: {
    //   onInit: (field: FormlyFieldConfig) => {
    //     field.templateOptions.options = field.form.get("colorTypeId").valueChanges.pipe(
    //       startWith(this.model.favoriteColorId),
    //       switchMap((colorId) => this.appService.getColors(colorId))
    //     );
    //    },
    // }
  },
  {
		template: `<br/><hr/><br/>`,
	},
  // What about fields that are dependant on other fields (radio buttons)?
	{
		key: "likesMusic",
		type: "radio",
		templateOptions: {
			label: "Likes Music?",
			options: [
				{ value: true, label: "Yes" },
				{ value: false, label: "No" },
			],
		},
	},
  //! Add formOptions to component and update the <form/> tag
  // This field uses formOptions to get ref data AND is dependant on the likesMusic field
  //* Main point of this section is to discuss the Label and Value Prop
	{
		key: "favoriteGenreId",
		type: "select",
		templateOptions: {
			label: "Favorite Music",
			options: [],
			valueProp: "id",
			labelProp: "name",
		},
		hideExpression: "!model.likesMusic",
		expressionProperties: {
			"templateOptions.options": "formState.selectOptionsData.genres",
      "model.favoriteGenreId": "!model.likesMusic ? null : model.favoriteGenreId",
		},
	},
  // What if we change this to an autocomplete field? Still works because of custom field templates!
  // Use appService call to get properly formatted data
    // type: "autocomplete",
  {
		template: `<br/><hr/><br/>`,
	},
  // LAST BIT!
  // We can even add a custom form wrapper like an Card wrapper for our form
  // key: "address", Which can bind to a model property giving us nested forms!
	{
		key: "address",
		wrappers: ["panel"],
		templateOptions: { label: "Address" },
		fieldGroup: [
      {
				key: "street",
				type: "input",
				templateOptions: {
					label: "Street",
				},
			},
			{
				key: "city",
				type: "input",
				templateOptions: {
					label: "City",
				},
			},
		],
	},
];

// Use with JSON powered forms
// No need to hydrate reference data on directly on field config
const options: FormlyFormOptions = {
  formState: {
    selectOptionsData: {
      colors: this.appService.getColors(this.model.colorTypeId),
      genres: [
        { id: 0, name: "Rock" },
        { id: 1, name: "Jazz" },
        { id: 2, name: "Blues" },
        { id: 3, name: "EDM" },
        { id: 4, name: "Country" },
        { id: 5, name: "Big Band" },
        { id: 6, name: "Pop" },
      ],
      colorTypes: this.appService.getColorTypes(),
    },
  },
};


onFieldChanges() {
  this.form.get("colorTypeId").valueChanges.subscribe((colorTypeId) => {
    this.options.formState.selectOptionsData["colors"] = this.appService.getColors(colorTypeId);
  });
}


fields: FormlyFieldConfig[] = [
  this.formlyService.input({key: "email", label: "Email"}),
  this.formlyService.input({key: "fullName", label: "Full Name"}),
  this.formlyService.number({key: "numberOfKeyboards", label: "Number of Keyboards"}),
  this.formlyService.select({key: "favoriteColorId", label: "Favorite Color", options: this.appService.getColorsWithGroups()}),
  this.formlyService.select({key: "favoriteGenreId", label: "Favorite Music", options: this.appService.getGenres()}),
];

  // -------------------------------------------------- --------------------------------------------------
  // -------------------------------------------------- --------------------------------------------------
  // -------------------------------------------------- --------------------------------------------------


/**
 * formly config
 */
import { FormControl, ValidationErrors } from "@angular/forms";
import { ConfigOption, FormlyFieldConfig } from "@ngx-formly/core";
import { AutocompleteComponent } from "../shared/templates/autocomplete.component";
import { GroupWrapperComponent } from "../shared/wrappers/group-wrapper.component";
import { FormlyValueChangeEvent } from "@ngx-formly/core/lib/components/formly.field.config";
import { Subject } from "rxjs";

export const formlyConfig: ConfigOption = {
	validators: [{ name: "ip", validation: IpValidator }],
	validationMessages: [
		{ name: "ip", message: IpValidatorMessage },
		{ name: "min", message: "Number is too low" },
		{ name: "max", message: "Number is too high" },
	],
	wrappers: [{ name: "panel", component: GroupWrapperComponent }],
	types: [{ name: "autocomplete", component: AutocompleteComponent }],
};

export function IpValidator(control: FormControl): ValidationErrors {
	return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { ip: true };
}

export function IpValidatorMessage(error: boolean, field: FormlyFieldConfig) {
	return `"${field?.formControl?.value}" is not a valid IP Address`;
}

