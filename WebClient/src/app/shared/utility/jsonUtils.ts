
// Converts { "auth" : { "apiUrl": "global-webnet.com"}} to auth:apiUrl = global-webnet.com
export const flattenJsonData = (
  obj: any, 
  parent:string, 
  callback: (key: string, value: any, parent:string) => void) =>
  {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if(typeof value!=='object')  {
          callback(key, value, parent);
        }
        if (typeof value === 'object' && value !== null) {
          let delimiter = parent ? ":":"";
          flattenJsonData(value, `${parent}${delimiter}${key}`, callback);
        }
      }
    }
  }
