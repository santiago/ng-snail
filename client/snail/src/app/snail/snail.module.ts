import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormControl
} from '@angular/forms';
import { SnailComponent } from './snail.component';
import { SnailSandbox } from './snail.sandbox';
import { SnailApiClient } from './snailApiClient.service';
import { SnailService } from './snail.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SnailComponent,
  ],
  providers: [
    SnailSandbox,
    SnailService,
    SnailApiClient,
  ]
})
export class SnailModule {}
