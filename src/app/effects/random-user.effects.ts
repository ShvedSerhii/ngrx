import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { UserActionTypes, UserGet, UserAdd } from '../actions/users.actions';

@Injectable()
export class RandomUserEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  get$: Observable<any> = this.actions$.pipe(
    ofType(UserActionTypes.Get),
    switchMap(() => {
      return this.httpClient
        .get(
          `https://api.github.com/users?since=${Math.floor(
            Math.random() * 10000000
          )}`
        )
        .pipe(
          map(data => {
            console.log(data);
            return new UserAdd(data[Math.floor(Math.random() * 30)]);
          })
        );
    })
  );
}
