import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { UserRemove, UserEdit } from 'src/app/actions/users.actions';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent {
  public users$: Observable<User[]>;
  public checkUser: boolean = false;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select("users"));
  }

  public removeUser(userIndex): void {
    this.store.dispatch(new UserRemove(userIndex)); 
  }

  public editUser(userIndex, login): void {
    this.store.dispatch(new UserEdit({userIndex, login})); 
  }
}
