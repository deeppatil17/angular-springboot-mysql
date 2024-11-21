import { Routes } from '@angular/router';
import { HomeComponent } from './employee/home/home.component';

export const routes: Routes = [
    {path:"employee/home", component:HomeComponent},
    {path:"employee", redirectTo:"employee/home",pathMatch:"full"},
    {path:"", redirectTo:"employee/home",pathMatch:"full"}
];
