import {
    Injectable,
} from '@angular/core';
import { SnailTry } from '../shared/models';

@Injectable()
export class SnailService {
  /**
   * Transforms data recieved from the API into array of 'SnailTry' instances
   *
   * @param snailTries
   */
  static triesTableAdapter(snailTries: any): Array<SnailTry> {
      return snailTries.map(snailTry => new SnailTry(snailTry));
  }
}
