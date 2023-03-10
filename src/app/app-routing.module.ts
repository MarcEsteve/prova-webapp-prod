import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes = [
    { path: 'inici', component: PortafolioComponent}, //Ruta principal
    { path: 'about', component: AboutComponent},
    { path: 'item', component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inici'} //Totes les altres rutes que no existeixin
];


@NgModule ({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { 
    
}