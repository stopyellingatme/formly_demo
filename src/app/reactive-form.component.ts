import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-reactive-form",
	template: `
		<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" class="form-control" formControlName="name" />

				<label for="name">Email</label>
				<input type="email" class="form-control" formControlName="email" />
			</div>
		</form>
	`,
	styles: [],
})
export class ReactiveFormComponent {
	myForm: FormGroup = new FormGroup({
		name: new FormControl("", [Validators.required, Validators.minLength(3)]),
		email: new FormControl("", [Validators.required, Validators.email]),
	});

	constructor() {}

	onSubmit() {
		console.log(this.myForm.value);
	}
}
