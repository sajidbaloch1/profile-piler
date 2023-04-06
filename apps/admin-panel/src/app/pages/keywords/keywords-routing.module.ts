import { NgModule } from "@angular/core";
import { KeywordsComponent } from "./keywords.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: KeywordsComponent,
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class KeywordsRoutingModule { }