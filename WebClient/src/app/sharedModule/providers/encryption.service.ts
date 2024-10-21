import { ConstantService } from "./constant.service";
import { Injectable } from "@angular/core";
import CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {
    constructor(
        private constantSvc:ConstantService        
    ){}
    encrypt(input:any): string {
        var encrypted = CryptoJS.AES.encrypt(JSON.stringify(input), this.constantSvc.app_id).toString();
        return encrypted;
    }
    decrypt(data:any){
        var decrypted = CryptoJS.AES.decrypt(data, this.constantSvc.app_id).toString(CryptoJS.enc.Utf8)
        return decrypted;
    }
}