import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { ScrollMenuDirective } from './scroll-menu.directive';


@NgModule({
  declarations: [ScrollMenuDirective, HorizontalScrollMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HorizontalScrollMenuComponent],
})
export class HorizontalScrollMenuModule { }
