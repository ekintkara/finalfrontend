import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  userName;
  password;
  ngOnInit() {}

  loginClick() {
    console.log(this.userName, this.password);
    if (this.userName == "admin" && this.password == 123456) {
      console.log(this.userName, this.password);
      this.router.navigate(["pages/dashboard"]);
      localStorage.setItem("login", "1");
    }
  }
}
