import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from 'ngrx/@ngrx/store';
import { compose } from 'ngrx/@ngrx/core/compose';

import * as fromSnail from './reducers/snail.reducer';
import * as fromAuth from './reducers/auth.reducer';

export interface State {
  products: fromSnail.State;
  login: fromAuth.State;
}

const reducers = {
  snail: fromSnail.reducer,
};

export function store(state: any, action: any) {
  const store: ActionReducer<State> = compose(combineReducers)(reducers);
  return store(state, action);
}

/**
 * Snail store functions
 */
export const getSnailTriesState = (state: State) => state.products;
export const getSnailTriesLoaded = createSelector(getSnailTriesState, fromSnail.getLoaded);
export const getSnailTriesLoading = createSelector(getSnailTriesState, fromSnail.getLoading);
export const getSnailTriesFailed = createSelector(getSnailTriesState, fromSnail.getFailed);
export const getSnailTriesData = createSelector(getSnailTriesState, fromSnail.getData);
export const postSnailTry = createSelector(getSnailTriesState, fromSnail.getLoaded);

/**
 * Auth store functions
 */
export const getAuthState   = (state: State) => state.login;
export const getAuthLoaded  = createSelector(getAuthState, fromAuth.getLoaded);
export const getAuthLoading = createSelector(getAuthState, fromAuth.getLoading);
export const getAuthFailed  = createSelector(getAuthState, fromAuth.getFailed);
export const getLoggedUser  = createSelector(getAuthState, fromAuth.getLoggedUser);