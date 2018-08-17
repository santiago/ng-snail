import { Action } from 'ngrx/@ngrx/store';
import { type } from '../../utils';

export const ActionTypes = {
  DO_LOGIN: type('[Auth] Do Login'),
  DO_LOGIN_SUCCESS: type('[Auth] Do Login Success'),
  DO_LOGIN_FAIL: type('[Auth] Do Login Fail'),
  DO_LOGOUT: type('[Auth] Do Logout'),
  DO_LOGOUT_SUCCESS: type('[Auth] Do Logout Success'),
  ADD_USER: type('[Auth] Add user'),
  REMOVE_USER: type('[Auth] Remove user'),
};

/**
 * Login Actions
 */
export class DoLoginAction implements Action {
  type = ActionTypes.DO_LOGIN;

  constructor(public payload: any) { }
}

export class DoLoginSuccessAction implements Action {
  type = ActionTypes.DO_LOGIN_SUCCESS;

  constructor(public payload: any) { }
}

export class DoLoginFailAction implements Action {
  type = ActionTypes.DO_LOGIN_FAIL;

  constructor(public payload: any = null) { }
}

/**
 * User Actions
 */
export class AddUserAction implements Action {
  type = ActionTypes.ADD_USER;

  constructor(public payload: any) { }
}

export class RemoveUserAction implements Action {
  type = ActionTypes.REMOVE_USER;

  constructor(public payload: any) { }
}

export type Actions
  = DoLoginAction
  | DoLoginSuccessAction
  | DoLoginFailAction
  | AddUserAction
  | RemoveUserAction;
