import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NetworkPageComponent } from "./network-page.component";

const routes: Routes = [{ path: '', component: NetworkPageComponent }]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)]
})

export class NetworkPageRoutingModule { }