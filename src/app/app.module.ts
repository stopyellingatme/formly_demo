import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { MatCardModule } from "@angular/material/card";

import { formlyConfig } from "./formly/formly.config";
import { DemoFormComponent } from "./demo-form/demo-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GroupWrapperComponent } from "./shared/wrappers/group-wrapper.component";

@NgModule({
	declarations: [AppComponent, DemoFormComponent, GroupWrapperComponent],
	imports: [
    BrowserModule,
		ReactiveFormsModule,
		MatCardModule,
		FormlyModule.forRoot(formlyConfig),
		FormlyMaterialModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
