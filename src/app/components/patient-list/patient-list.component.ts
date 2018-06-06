import { Component, OnInit } from '@angular/core';
import { allPatients } from '../../demo_data/patients';
import { Patient } from '../../models/Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {


  patients = allPatients;

  constructor(private router:Router) { }

  ngOnInit() {
  }


  selectPatient(p:Patient){
    console.log(p);
    this.router.navigate(['patient-info']);
  }

}
