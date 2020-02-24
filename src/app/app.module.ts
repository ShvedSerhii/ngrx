import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserRandomAddComponent } from './components/user-random-add/user-random-add.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RandomUserEffects } from './effects/random-user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserRandomAddComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ users: UserReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([RandomUserEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
