import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { UserAdd } from 'src/app/actions/users.actions';

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"]
})
export class UserAddComponent {
  public users$: Observable<User[]>;

  constructor(
    private store: Store<{ users: User[] }>
  ) {
    this.users$ = store.pipe(select('users'));
  }

  public addUser(userLogin: string) { 
    const user = new User(); 
    user.login = userLogin; 
    this.store.dispatch(new UserAdd(user)); 
  } 
}
