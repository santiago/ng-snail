import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from 'ngrx/@ngrx/effects';
import { Action } from 'ngrx/@ngrx/store';
import { Observable, of } from 'rxjs';
import { SnailApiClient } from '../../../snail/snailApiClient.service';
import * as snailActions from '../actions/snail.action';

import { Store } from 'ngrx/@ngrx/store';
import * as store from '../index';

@Injectable()
export class SnailEffects {

  constructor(
    private actions$: Actions,
    private snailApiClient: SnailApiClient,
    private appState$: Store<store.State>) {}

  /**
   * Get snail tries table
   */
  @Effect()
  getSnailTries$: Observable<Action> = this.actions$
    .ofType(snailActions.ActionTypes.LOAD)
    .map((action: snailActions.LoadAction) => action.payload)
    .switchMap(state => {
      return this.snailApiClient.getSnailTries$()
        .map(result => new snailActions.LoadSuccessAction(result))
        .catch(error  => of(new snailActions.LoadFailAction()));
    });

  /**
   * Post a Snail Try
   */
  @Effect()
  postSnailTry$: Observable<Action> = this.actions$
    .ofType(snailActions.ActionTypes.LOAD)
    .map((action: snailActions.LoadAction) => action.payload)
    .switchMap(state => {
      return this.snailApiClient.calculate$()
        .map(result => new snailActions.LoadSuccessAction(result))
        .catch(error  => of(new snailActions.LoadFailAction()));
    });
}
