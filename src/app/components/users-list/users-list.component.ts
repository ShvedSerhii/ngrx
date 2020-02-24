import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../models/user";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent {
  public users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select("users"));
  }
}
