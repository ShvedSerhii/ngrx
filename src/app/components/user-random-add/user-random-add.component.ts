import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserGet } from 'src/app/actions/users.actions';

@Component({
  selector: 'app-user-random-add',
  templateUrl: './user-random-add.component.html',
  styleUrls: ['./user-random-add.component.scss']
})
export class UserRandomAddComponent {
  public users$: Observable<User[]>;

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select('users'));
  }

  public getUser() {
    this.store.dispatch(new UserGet());
  }
}
