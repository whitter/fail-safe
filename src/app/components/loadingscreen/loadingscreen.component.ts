import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingscreen',
  templateUrl: './loadingscreen.component.html',
  styleUrls: ['./loadingscreen.component.css']
})
export class LoadingscreenComponent implements OnInit {

  currentMessage:string = 'Searching ...';
  count:number = 0;
  messages = [
    'Prescribing database',
    'ECHO database',
    'Radiology database',
    'Biochemistry database'
  ];

  constructor(private router:Router) { }

  ngOnInit() {

    let timer = setInterval(() =>{
      console.log(this.count)
      if(this.count == this.messages.length){
        clearInterval(timer);
        this.router.navigate(['patient-list']);
      }else{
        this.currentMessage = this.messages[this.count];
        this.count++;
      }
    }, 3000);

  }

}
