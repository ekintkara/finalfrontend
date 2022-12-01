import { Component, OnInit } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { TodoModel } from "../../../@core/models/todo.model";
import { TodoService } from "../../../@core/services/todo.service";
import { CreateModalComponent } from "./create-modal/create-modal.component";

@Component({
  selector: "todo-list",
  styleUrls: ["./todo-list.component.scss"],
  templateUrl: "./todo-list.component.html",
  providers: [TodoService],
})
export class TodoListComponent implements OnInit {
  constructor(
    private api: TodoService,
    private dialogService: NbDialogService
  ) {}

  createdList: TodoModel[] = [];
  inProgressList: TodoModel[] = [];
  doneList: TodoModel[] = [];

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.api.getTodoList().subscribe((res) => {
      this.createdList = res.filter((e) => e.todoStatus == 0);
      this.inProgressList = res.filter((e) => e.todoStatus == 1);
      this.doneList = res.filter((e) => e.todoStatus == 2);
    });
  }

  create() {
    this.dialogService.open(CreateModalComponent).onClose.subscribe();
  }
}
