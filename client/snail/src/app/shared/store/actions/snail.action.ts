import { Action } from 'ngrx/@ngrx/store';
import { SnailTry } from '../../models';
import { type } from '../../utils';

export const ActionTypes = {
  LOAD:         type('[SnailTries] Load'),
  LOAD_SUCCESS: type('[SnailTries] Load Success'),
  LOAD_FAIL:    type('[SnailTries] Load Fail')
};

/**
 * Product Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: any = null) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Array<SnailTry>) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any = null) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
