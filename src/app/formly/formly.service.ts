import { Injectable } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable, of } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class FormlyService {
	input(config: { key: string; label: string }): FormlyFieldConfig {
		return {
			key: config.key,
			type: "input",
			templateOptions: {
				label: config.label,
			},
		};
	}

	number(config: { key: string; label: string; min?: number; max?: number }): FormlyFieldConfig {
		return {
			key: config.key,
			type: "input",
			templateOptions: {
				label: config.label,
				type: "number",
        min: config.min,
        max: config.max,
			},
		};
	}

	select(config: { key: string; label: string; options: any[] | Observable<any[]> }): FormlyFieldConfig {
		return {
			key: config.key,
			type: "select",
			templateOptions: {
				label: config.label,
				options: config.options,
			},
		};
	}

	radio(config: { key: string; label: string; options: any[] | Observable<any[]> }): FormlyFieldConfig {
		return {
			key: config.key,
			type: "radio",
			templateOptions: {
				label: config.label,
			},
		};
	}
}
