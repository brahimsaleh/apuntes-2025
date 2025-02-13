import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IbraComponent } from './pages/ibra/ibra.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path:"ibra",
        component: IbraComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path: "**",
        redirectTo: "home"

    }






];
