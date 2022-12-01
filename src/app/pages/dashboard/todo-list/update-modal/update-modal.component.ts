import { Component } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { TodoService } from "../../../../@core/services/todo.service";

@Component({
  selector: "ngx-update-modal",
  templateUrl: "update-modal.component.html",
  styleUrls: ["update-modal.component.scss"],
  providers: [TodoService],
})
export class UpdateModalComponent {
  constructor(
    protected ref: NbDialogRef<UpdateModalComponent>,
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
    this.api.updateTask(body).subscribe((res) => {
      this.ref.close();
      window.location.reload();
    });
  }
}
