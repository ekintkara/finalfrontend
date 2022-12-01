import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { TodoModel } from "../models/todo.model";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList() {
    return this.http.get("https://localhost:44325/api/Main/Get").pipe(
      map((res: TodoModel[]) => {
        console.log(res);
        return res;
      }),
      catchError((err) => {
        throw new Error("error in source. Details: " + err);
      })
    );
  }
  getTodoListById(id: number) {
    return this.http.get("https://localhost:44325/api/Main/Get/" + id).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      catchError((err) => {
        throw new Error("error in source. Details: " + err);
      })
    );
  }

  createTask(body) {
    return this.http.post("https://localhost:44325/api/Main/Post", body).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      catchError((err) => {
        throw new Error("error in source. Details: " + err);
      })
    );
  }

  updateTask(body) {
    return this.http.put("https://localhost:44325/api/Main/Put", body).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      catchError((err) => {
        throw new Error("error in source. Details: " + err);
      })
    );
  }

  deleteTask(id: number) {
    return this.http.delete("https://localhost:44325/api/Main/Delete?id=" + id).pipe(
      map((res) => {
        console.log(res);
        return res;
      }),
      catchError((err) => {
        throw new Error("error in source. Details: " + err);
      })
    );
  }

  handlerError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir hata oluştu: " + err.error.message;
    } else {
      errorMessage = "Sistemsel bir hata";
    }
    return throwError(errorMessage);
  }
}
