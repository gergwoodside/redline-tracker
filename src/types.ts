// types.ts

export interface Arrival {
    staId: { _text: string };
    stpId: { _text: string };
    staNm: { _text: string };
    stpDe: { _text: string };
    rn: { _text: string };
    rt: { _text: string };
    destSt: { _text: string };
    destNm: { _text: string };
    trDr: { _text: string };
    prdt: { _text: string };
    arrT: { _text: string };
    isApp: { _text: string };
    isSch: { _text: string };
    isDly: { _text: string };
    isFlt: { _text: string };
    flags: Record<string, any>; // You may need to specify the type of flags if it's known
    lat: { _text: string };
    lon: { _text: string };
    heading: { _text: string };
  }
  
  export interface Ctatt {
    tmst: { _text: string };
    errCd: { _text: string };
    errNm?: {}; // This seems to be an empty object, you can define a proper type if necessary
    eta: Arrival[];
  }
  
  export interface XmlData {
    _declaration: {
      _attributes: {
        version: string;
        encoding: string;
      };
    };
    ctatt: Ctatt;
  }
  