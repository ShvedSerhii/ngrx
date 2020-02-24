import { Action } from "@ngrx/store";

export enum UserActionTypes {
  Get = "[User] Get",
  Add = "[User] Add",
  Remove = "[User] Remove",
  Edit = "[User] Edit"
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class UserAdd implements ActionEx {
  readonly type = UserActionTypes.Add;
  constructor(public payload: any) {}
}

export class UserGet implements ActionEx {
  readonly type = UserActionTypes.Get;
  constructor(public payload: any) {}
}

export class UserRemove implements ActionEx {
  readonly type = UserActionTypes.Remove;
  constructor(public payload: any) {}
}

export class UserEdit implements ActionEx {
  readonly type = UserActionTypes.Edit;
  constructor(public payload: any) {}
}
