import { Component } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { TodoService } from "../../../../@core/services/todo.service";

@Component({
  selector: "ngx-create-modal",
  templateUrl: "create-modal.component.html",
  styleUrls: ["create-modal.component.scss"],
  providers: [TodoService],
})
export class CreateModalComponent {
  constructor(
    protected ref: NbDialogRef<CreateModalComponent>,
    private api: TodoService
  ) {}

  cancel() {
    this.ref.close();
  }

  submit(title, description, owner) {
    let body = {
      todoID: 0,
      todoName: title,
      todoDescription: description,
      todoOwner: owner,
      isComplete: false,
      comments: "",
      todoStatus: 0,
    };
    this.api.createTask(body).subscribe((res) => {
      this.ref.close();
      window.location.reload();
    });
  }
}
