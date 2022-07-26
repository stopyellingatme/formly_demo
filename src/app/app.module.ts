import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { MatCardModule } from "@angular/material/card";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";

import { formlyConfig } from "./formly/formly.config";
import { DemoFormComponent } from "./demo-form/demo-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GroupWrapperComponent } from "./shared/wrappers/group-wrapper.component";
import { AutocompleteComponent } from "./shared/templates/autocomplete.component";

@NgModule({
	declarations: [AppComponent, DemoFormComponent, GroupWrapperComponent, AutocompleteComponent],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		MatCardModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		FormlyModule.forRoot(formlyConfig),
		FormlyMaterialModule,
		BrowserAnimationsModule,
		NgSelectModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
