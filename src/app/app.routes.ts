import { Routes, RouterModule } from '@angular/router';
import { Deber1Component } from './Deber1/Deber1.component';
import { Deber2Component } from './Deber2/Deber2.component';
import { Deber3Component } from './Deber3/Deber3.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path:'Deber1', component:Deber1Component},
    {path:'Deber2', component:Deber2Component},
    {path:'Deber3', component:Deber3Component}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}