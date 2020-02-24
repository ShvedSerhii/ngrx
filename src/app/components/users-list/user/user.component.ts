import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public users$: Observable<User[]>;
  public checkUser: boolean = false;
  
  @Input() user;
  @Input() index;
  
  constructor() { }

}
