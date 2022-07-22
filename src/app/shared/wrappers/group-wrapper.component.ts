import { Component } from "@angular/core";
import { FieldWrapper } from "@ngx-formly/core";

@Component({
	selector: "demo-wrapper-panel",
	template: `
		<mat-card>
			<mat-card-title>{{ to.label }}</mat-card-title>
			<mat-card-content>
				<ng-container #fieldComponent></ng-container>
			</mat-card-content>
		</mat-card>
	`,
})
export class GroupWrapperComponent extends FieldWrapper {}
