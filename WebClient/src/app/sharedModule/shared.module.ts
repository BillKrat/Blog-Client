import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConstantService} from "./providers/constant.service"
import { JsonService } from './providers/json.service';
import { EncryptionService } from './providers/encryption.service';
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
    ConstantService,
    EncryptionService,
    JsonService
  ]
})
export class SharedModule { }
