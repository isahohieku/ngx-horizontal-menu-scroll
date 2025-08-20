import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { ScrollMenuDirective } from './scroll-menu.directive';


@NgModule({
  imports: [
    CommonModule,
    HorizontalScrollMenuComponent,
    ScrollMenuDirective
  ],
  exports: [HorizontalScrollMenuComponent, ScrollMenuDirective],
})
export class HorizontalScrollMenuModule { }
