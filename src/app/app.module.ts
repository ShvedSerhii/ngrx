import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserRandomAddComponent } from './components/user-random-add/user-random-add.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './reducers/user.reducer';
import { UserComponent } from './components/users-list/user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserRandomAddComponent,
    UsersListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ users: UserReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
