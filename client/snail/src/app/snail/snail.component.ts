import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { SnailSandbox } from './snail.sandbox';

@Component({
    selector: 'app-snail',
    template: ``,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnailComponent {
  constructor(
    public snailSandbox: SnailSandbox,
  ) {}

  /**
   * Callback function to handle Calculate click
   *
   * @param data
   */
  public onCalculate(data): void {
    this.snailSandbox.calculate(data);
  }
}
