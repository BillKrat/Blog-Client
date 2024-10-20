import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigConstants} from "../shared/constants/configConstants"
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule
  ],
  providers:[
    ConfigConstants
  ]
})
export class SharedModule { }
