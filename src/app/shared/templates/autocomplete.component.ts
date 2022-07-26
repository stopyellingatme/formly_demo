import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/material";

@Component({
	selector: "formly-field-input",
	template: `
		<div class="mat-input-infix mat-form-field-infix">
			<ng-select
				[items]="to.options | async"
				[placeholder]="to.placeholder"
				[bindValue]="to.bindValue || 'value'"
				[formControl]="formControl"
				[class.is-invalid]="showError"
			></ng-select>
		</div>
	`,
})
export class AutocompleteComponent extends FieldType {}
