import { Staff } from "./staff";
import { Moment } from "moment";

export interface Consultation {
    id:number;
    consutant:Staff;
    date:Moment;
    notes:string;
}
