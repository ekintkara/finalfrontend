import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { TodoModel } from "../../../../@core/models/todo.model";
import { TodoService } from "../../../../@core/services/todo.service";
import { UpdateModalComponent } from "../update-modal/update-modal.component";

@Component({
  selector: "ngx-todo-list-card",
  templateUrl: "./todo-list-card.component.html",
  styleUrls: ["./todo-list-card.component.scss"],
  providers: [TodoService],
})
export class TodoListCardComponent implements OnInit {
  @Input() data: TodoModel;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      if (this.data) {
        this.todo = this.data[0];
      }
    }
  }
  buttonText: string = "";
  buttonShow: boolean = true;
  todo: TodoModel;
  status;
  comment: "";
  constructor(
    private dialogService: NbDialogService,
    private api: TodoService
  ) {
    if (this.data) {
      this.todo = this.data[0];
      if (this.data[0]) {
        if (this.data[0].todoStatus == 0) {
          this.buttonText = "In-Progress";
          this.status = 1;
        } else if (this.data[0].todoStatus == 1) {
          this.buttonText = "Done";
          this.status = 2;
        } else if (this.data[0].todoStatus == 2) {
          this.buttonShow = false;
        }
      }
    }
  }

  ngOnInit() {
    console.log("datatatatat", this.data);
  }

  deleteTask() {
    this.api.deleteTask(this.todo.todoID).subscribe((res) => {
      window.location.reload();
      console.log(res);
    });
  }

  updateStatus() {
    let body = {
      todoID: this.todo.todoID,
      todoName: this.todo.todoName,
      todoDescription: this.todo.todoDescription,
      todoOwner: this.todo.todoOwner,
      isComplete: this.todo.isComplete,
      comments: this.todo.comments,
      todoStatus: this.status,
    };
    this.api.updateTask(body).subscribe((res) => {
      window.location.reload();
      console.log(res);
    });
  }

  updateComment() {
    let body = {
      todoID: this.todo.todoID,
      todoName: this.todo.todoName,
      todoDescription: this.todo.todoDescription,
      todoOwner: this.todo.todoOwner,
      isComplete: this.todo.isComplete,
      comments: this.comment,
      todoStatus: this.todo.todoStatus,
    };
    this.api.updateTask(body).subscribe((res) => {
      window.location.reload();
      console.log(res);
    });
  }

  openModal() {
    this.dialogService.open(UpdateModalComponent).onClose.subscribe();
  }
}