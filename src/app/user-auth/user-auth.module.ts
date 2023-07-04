import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormContainerPageComponent } from './form-container-page/form-container-page.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      FormContainerPageComponent
    ],
    exports: [
      FormContainerPageComponent
    ]
})
export class UserAuthModule{
}