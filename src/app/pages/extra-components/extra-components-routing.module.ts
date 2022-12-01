import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExtraComponentsComponent } from "./extra-components.component";
import { SpinnerComponent } from "./spinner/spinner.component";

const routes: Routes = [
  {
    path: "",
    component: ExtraComponentsComponent,
    children: [
      {
        path: "spinner",
        component: SpinnerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {}
