import { Injectable } from '@angular/core';
import {
  HttpService,
  GET, POST,
  Adapter
} from '../shared/services/http';
import { Observable } from 'rxjs';
import { SnailService } from './snail.service';

@Injectable()
export class SnailApiClient extends HttpService {

  /**
   * Calculates a snail try
   */
  @POST('/snail-tries')
  @Adapter(SnailService.triesTableAdapter)
  public calculate$(): Observable<any> { return null; }

  /**
   * Retrieves results list
   */
  @GET('/snail-tries')
  @Adapter(SnailService.triesTableAdapter)
  public getSnailTries$(): Observable<any> { return null; }
}
