import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoadingscreenComponent } from './components/loadingscreen/loadingscreen.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { Routes, RouterModule } from '@angular/router';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingscreenComponent,
    PatientListComponent,
    PatientInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: LoadingscreenComponent
      },
      { path: 'patient-list', component: PatientListComponent },
      { path: 'patient-info', component: PatientInfoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
