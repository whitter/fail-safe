import { Component, OnInit } from '@angular/core';
import { allPatients } from '../../demo_data/patients';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  p = allPatients[0];

  constructor() { }

  ngOnInit() {
  }

}
