import { Staff } from "./staff";
import { Ward } from "./ward";
import { Moment } from "moment";
import { Aetiology } from "./aetiology.enum";
import { Morbidity } from "./morbidity";
import { Examination } from "./examination";
import { Treatment } from "./treatment";
import { Consultation } from "./consultation";

export interface Patient{
    name:string;
    dob:Moment;
    gender:string;
    postcode:string;
    admissionDate:Moment;
    gp:Staff;
    cardiologyNurse:Staff;
    ward:Ward;

    hfType:HFType;
    aetiology:Aetiology;
    coMorbities:Morbidity[];
    examinations:Examination[];
    treatments:Treatment[];

    ituSuitable:boolean;
    ccuForCpap:boolean;
    wardBasedCare:boolean;

    consultations:Consultation[];
    diareticConversionDate:Moment;
    
}


export enum HFType{
    HFREF = 'HFREF',
    HFNEF = 'HFNEF'
}