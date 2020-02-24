import { ActionEx, UserActionTypes } from "../actions/users.actions";

export const initialState = [
  {
    login: "sem"
  },
  {
    login: "liza"
  }
];

export function UserReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case UserActionTypes.Add:
      return [...state, action.payload];
    case UserActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case UserActionTypes.Get:
      return state;
    case UserActionTypes.Edit:
      return state;
    default:
      return state;
  }
}
