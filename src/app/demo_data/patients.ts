import { Patient, HFType } from "../models/Patient";
import { Aetiology } from "../models/aetiology.enum";
import * as moment from 'moment';
export var allPatients:Patient [] = [
 
{
    id: 1,
    name:'Harry Keshav',
    dob: moment('1948-04-05'),
    gender:'Maleng serve',
    postcode:'B13 8TF',
    admissionDate: moment( '2018-03-27'),
    gp: {
        name: 'Dr Browne',
        id: 1,
        type: 'gp',
    },
    cardiologyNurse: {
      name: 'Sue Evans',
      id:893,
      type: 'nurse'
    },

    ward: {
        id:1,
        name:'MAU',
    },
    

    hfType: HFType.HFREF,
    aetiology: Aetiology.Ischemic,
    coMorbities: [
        { name: 'Diabetes', id:1}
    ],
    examinations:[
        {id:2, name:'Kidney Function'},
        {id:43, name: 'BP'},
        {id:1, name: 'Rhythm'},
        {id:86, name: 'ECG'}
    ],
    treatments:[
        { id: 1, name: 'IV Diuretic', color: 'list-group-item-primary', completed: true},
        { id: 2, name: 'ACE Inhibitors', color: 'list-group-item-success', completed: false},
        { id: 3, name: 'Beta Blockers', color: 'list-group-item-success', completed: false},
        { id: 3, name: 'MRA', color: 'list-group-item-success', completed: false},
        { id: 3, name: 'Entresto', color: 'list-group-item-success', completed: false},
        { id: 3, name: 'Nitrate/Hydralazine', color: 'list-group-item-dark', completed: false},
    ],

    ituSuitable: true,
    ccuForCpap: false,
    wardBasedCare: false,

    consultations:[
        {
            id:2,
            consutant: { id:34, name: 'Mr J Chambers', type:'consultant' },
            date: moment('03/04/18'),
            notes: ''
        },
        {
            id:2,
            consutant: { id:36, name: 'Mr J Chambers', type:'consultant' },
            date: moment('05/04/18'),
            notes: ''
        }
    ],
    diareticConversionDate: null
}
    
];