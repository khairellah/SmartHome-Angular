import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppareilComponent } from "../one-appareil/appareil.component";
import { AppareilListComponent } from "../list/appareil-list.component";
import { UpdateAppareilComponent } from "../update-appareil/update-appareil.component";

const routes:Routes = [
    {
        path:'', component:AppareilListComponent
    },
    {
        path:'new', component:UpdateAppareilComponent
    },
    {
        path:':id/edit', component:UpdateAppareilComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class AppareilRoutingModule{}