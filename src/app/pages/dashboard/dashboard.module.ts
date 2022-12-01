import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbInputModule,
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";

import { ThemeModule } from "../../@theme/theme.module";
import { DashboardComponent } from "./dashboard.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule } from "@angular/forms";
import { TodoListCardComponent } from "./todo-list/todo-list-card/todo-list-card.component";
import { UpdateModalComponent } from "./todo-list/update-modal/update-modal.component";
import { CreateModalComponent } from "./todo-list/create-modal/create-modal.component";

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbInputModule,
  ],
  declarations: [
    DashboardComponent,
    TodoListComponent,
    TodoListCardComponent,
    UpdateModalComponent,
    CreateModalComponent,
  ],
})
export class DashboardModule {}
