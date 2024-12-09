import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { CASAComponent } from './CASA/casa.component';
import { Deber1Component } from './Deber1/Deber1.component';
import { Deber2Component } from './Deber2/Deber2.component';
import { Deber3Component } from './Deber3/Deber3.component';
import { Deber4Component } from './Deber4/Deber4.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [
  { path: 'Deber1', component: Deber1Component},
  { path: 'Deber2', component: Deber2Component },
  { path: 'Deber3', component: Deber3Component },
  { path: 'Deber4', component: Deber4Component },
  { path: 'CASA', component: CASAComponent },
  { path: '', redirectTo: '/CASA', pathMatch: 'full' }, 
];

bootstrapApplication(CASAComponent, {
  providers: [provideRouter(routes),
    ButtonModule,
    ReactiveFormsModule
  ],
}).catch((err) => console.error(err));