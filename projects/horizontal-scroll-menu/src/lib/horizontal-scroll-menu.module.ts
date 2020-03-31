import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { ScrollMenuDirective } from './scroll-menu.directive';


@NgModule({
  declarations: [ScrollMenuDirective, HorizontalScrollMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [HorizontalScrollMenuComponent],
})
export class HorizontalScrollMenuModule { }
