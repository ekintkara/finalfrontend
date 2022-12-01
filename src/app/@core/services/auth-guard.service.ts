import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem("login")) {
      if (localStorage.getItem("login") == "1") {
        return true;
      } else {
        this.router.navigate(["auth/login"]);
        return false;
      }
    }else{
      this.router.navigate(["auth/login"]);
      return false;
    }
  }
}
