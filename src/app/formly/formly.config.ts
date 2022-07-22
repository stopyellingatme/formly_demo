import { FormControl, ValidationErrors } from "@angular/forms";
import { ConfigOption, FormlyFieldConfig } from "@ngx-formly/core";
import { GroupWrapperComponent } from "../shared/wrappers/group-wrapper.component";

export const formlyConfig: ConfigOption = {
	validators: [{ name: "ip", validation: IpValidator }],
	validationMessages: [
		{ name: "ip", message: IpValidatorMessage },
		{ name: "min", message: "Number is too low" },
		{ name: "max", message: "Number is too high" },
	],
	wrappers: [{ name: "panel", component: GroupWrapperComponent }],
};

export function IpValidator(control: FormControl): ValidationErrors {
	return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { ip: true };
}

export function IpValidatorMessage(error: boolean, field: FormlyFieldConfig) {
	return `"${field?.formControl?.value}" is not a valid IP Address`;
}
