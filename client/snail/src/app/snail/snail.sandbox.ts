import { Injectable } from '@angular/core';
import { Store } from 'ngrx/@ngrx/store';
import { Subscription } from 'rxjs';
import { SnailApiClient } from './snailApiClient.service';
import * as store from '../shared/store';
import * as snailActions from '../shared/store/actions/snail.action';
import {
  SnailTry,
  User,
} from '../shared/models';

@Injectable()
export class SnailSandbox {

  public snailTries$ = this.appState$.select(store.getSnailTriesData);
  public snailTriesLoading$ = this.appState$.select(store.getSnailTriesLoading);
  public loggedUser$ = this.appState$.select(store.getLoggedUser);

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.State>,
    private productsApiClient: SnailApiClient
  ) {
    // super(appState$);
    this.registerEvents();
  }

  /**
   * Loads snail tries from the server
   */
  public loadSnailTries(): void {
    this.appState$.dispatch(new snailActions.LoadAction());
  }

  /**
   * Loads report from the server
   */
  public loadReport(): void {
    this.appState$.dispatch(new snailActions.LoadAction());
  }

  /**
   * Send data to calculate a Snail try
   */
  public calculate(data): void {
    this.appState$.dispatch(new snailActions.LoadAction(data));
  }

  /**
   * Unsubscribes from events
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
    // Subscribes to login
    this.subscriptions.push(this.loggedUser$.subscribe((user: User) => {
      if (user.isLoggedIn) { this.loadSnailTries(); }
    }));
  }
}
