import { ConstantService } from "./constant.service";
import { Injectable } from "@angular/core";
import CryptoJS from 'crypto-js';
import { getAppId } from "./constant.service";

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {
    constructor(
        private constantSvc:ConstantService        
    ){
        console.log("EncryptionService");
    }
    encrypt(input:any): string {
        var encrypted = CryptoJS.AES.encrypt(JSON.stringify(input), this.constantSvc.app_id).toString();
        return encrypted;
    }
    decrypt(data:any){
        var decrypted = CryptoJS.AES.decrypt(data, this.constantSvc.app_id).toString(CryptoJS.enc.Utf8)
        return decrypted;
    }
}

export function decrypt(field:string, encrypted:string){
    var appId = getAppId(); 
    var decryptedStr = CryptoJS.AES.decrypt(encrypted, appId).toString(CryptoJS.enc.Utf8).replaceAll('"','');
    return decryptedStr;
}

export function decryptR1(field:string, encrypted:string){
    var appId = getAppId(); 
    var encryptedStr = CryptoJS.AES.encrypt(JSON.stringify(encrypted), appId).toString();
    console.log('appId', appId);
    console.log(`field: ${field}`,encrypted);
    console.log('encrypted:',encryptedStr);
    return encrypted;
}