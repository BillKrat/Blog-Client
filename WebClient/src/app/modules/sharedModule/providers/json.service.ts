import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(){
    console.log("JsonService");
  }
  /**
   * Flattens out Json using colons as delimiters
   * { 
   *    "auth" : { 
   *      "apiUrl" : "global-webnet.com",
   *      "status" : "active",
   *    } 
   * } 
   * is convertd to "auth:apiUrl" = "global-webnet.com"
   *                "auth:status" = "active"
   * @param obj 
   * @param parent 
   * @param callback 
   */
  flattenJsonData(json: any, parent:string, callback: (key: string, value: any, parent:string) => void)
  {
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        const value = json[key];

        if(typeof value!=='object')  {
          callback(key, value, parent);
        }

        if (typeof value === 'object' && value !== null) {
          let delimiter = parent ? ":":"";
          this.flattenJsonData(value, `${parent}${delimiter}${key}`, callback);
        }
      }
    }
  }
  
  /**
   * Generates map containing masterJson merged with appendToMaster with
   * appendToMaster overwritting any duplicate names
   * @param masterJson json will be used unless overwritten
   * @param appendToMasterJson appends/overwrites masterJson 
   * @returns 
   */
  mergeData(masterJson:any, appendToMasterJson:any):any{
    let map = new Map<string,any>();

    // defaultEnvData will be flattened and added to map
    this.flattenJsonData(masterJson, "", (key,value,parent)=>{
      let dictKey = `${parent}${parent?":":""}${key}`;
      map.set(dictKey,value);
    });

    // httpEnvData will stomp on defaultEnvData map values
    this.flattenJsonData(appendToMasterJson, "", (key,value,parent)=>{
      let dictKey = `${parent}${parent?":":""}${key}`;
      map.set(dictKey,value);
    });

    return map;
  }

}