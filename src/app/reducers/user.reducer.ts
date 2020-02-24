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
    case UserActionTypes.Edit:
        return [
            ...state.slice(0, action.payload.userIndex),
            {login: action.payload.login},
            ...state.slice(action.payload.userIndex + 1)
        ];
    default:
      return state;
  }
}
