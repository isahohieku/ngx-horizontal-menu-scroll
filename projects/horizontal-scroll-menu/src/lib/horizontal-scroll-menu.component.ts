import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

interface ImageModel {
  type: string;
  image: string;
}

@Component({
  selector: 'ngx-horizontal-scroll-menu',
  template: `
    <nav class="d-flex" *ngIf="items?.length" [ngClass]="background">
      <div *ngIf="!hideNav" class="control d-flex align-items-center justify-content-center mousePointer" (mousedown)="left()"
      (mouseup)="clear()">
        <div class="prev" [ngClass]="{'opacity': !leftArrowHide}">
          <img [src]="leftIcon" width="24" />
        </div>
      </div>
      <div [ngClass]="!hideNav ? 'items-wrapper' : 'w-100'">
        <ul id="list-items" #hScroll ngxScrollMenu (scrolled)="listenToItemsScroll($event)">
          <li *ngFor="let item of items" class="px-2">
            <a *ngIf="item[linkLabel]" [ngClass]="text" [href]="item[linkLabel]">{{ item?.title }}</a>
            <a *ngIf="!item[linkLabel]" [ngClass]="text">{{ item?.title }}</a>
          </li>
        </ul>
      </div>

      <div *ngIf="!hideNav" class="control d-flex justify-content-center align-items-center mousePointer" (mousedown)="right()"
      (mouseup)="clear()">
        <div class="next rotate-right" [ngClass]="{'opacity': !rightArrow}">
          <img [src]="leftIcon" width="24" />
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
    .d-flex {
      display: flex;
  }
  .justify-content-center {
      justify-content: center;
  }
  .align-items-center {
      align-items: center;
  }
  #list-items {
      padding: 0;
      display: flex;
      overflow: auto;
  }

  .w-100 {
    width: 100%;
  }

  #list-items li {
    list-style: none;
    padding: 10px;
  }

  #list-items a {
    text-decoration: none;
    cursor: pointer;
  }

  .rotate-right {
      transform: rotate(180deg);
  }
  .control {
      width: 50px;
  }

  .items-wrapper {
    width: calc(100% - 100px);
  }
  .prev, .next {
      width: 24px;
      opacity: 0;
  }
  .opacity {
      opacity: 1;
  }

  #list-items::-webkit-scrollbar {
    display: none;
  }

  #list-items {
    -ms-overflow-style: none;
}`
  ]
})
export class HorizontalScrollMenuComponent implements OnInit, OnChanges {

  @Input() linkLabel = 'link';
  @Input() items: any[] = this.generateItems();
  @Input() background: string;
  @Input() text: string;
  @Input() hideNav = false;
  @Input() navIcon: ImageModel;
  @Input() distance = 50;
  @Input() scrollSpeed = 2000;

  leftArrowHide = true;
  rightArrow = false;

  // tslint:disable-next-line:max-line-length
  @Input() leftIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Xu3dWahl6VUH8O+cU9XpKMG+55QisYWybRAVRH2IEkGrnDWJGgVRFN8EZ4kaFAQfHFCDxAFEfXYgmsRM+uDwJigooqLilO7Wbof23ntO3dsVk9a+92y53RXTbVfVPcPee33DL6/Ze6+1fuuD79813Jok/yNAgAABAgSaE5g0N7GBCRAgQIAAgSQAOAQECBAgQKBBAQGgwaUbmQABAgQICADOAAECBAgQaFBAAGhw6UYmQIAAAQICgDNAgAABAgQaFBAAGly6kQkQIECAgADgDBAgQIAAgQYFBIAGl25kAgQIECAgADgDBAgQIECgQQEBoMGlG5kAAQIECAgAzgABAgQIEGhQQABocOlGJkCAAAECAoAzQIAAAQIEGhQQABpcupEJECBAgIAA4AwQIECAAIEGBQSABpduZAIECBAgIAA4AwQIECBAoEEBAaDBpRuZAAECBAgIAM4AAQIECBBoUEAAaHDpRiZAgAABAgKAM0CAAAECBBoUEAAaXLqRCRAgQICAAOAMECBAgACBBgUEgAaXbmQCBAgQICAAOAMECBAgQKBBAQGgwaUbmQABAgQICADOAAECBAgQaFBAAGhw6UYmQIAAAQICgDNAgAABAgQaFBAAGly6kQkQIECAgADgDBAgQIAAgQYFBIAGl25kAgQIECAgADgDBAgQIECgQQEBoMGlG5kAAQIECAgAzgABAgQIEGhQQABocOlGJkCAAAECAoAzQIAAAQIEGhQQABpcupEJECBAgIAA4AwQIECAAIEGBQSABpduZAIECBAgIAA4AwQIECBAoEEBAaDBpRuZAAECBAgIAM4AAQIECBBoUEAAaHDpRiZAgAABAgKAM0CAAAECBBoUEAAaXLqRCRAgQICAAOAMECBAgACBBgUEgAaXbmQCBAgQICAAOAMECBAgQKBBAQGgwaUbmQABAgQICADOAAECBAgQaFBAAGhw6UYmQIAAAQICgDNAgAABAgQaFBAAGly6kQkQIECAgADgDBAgQIAAgQYFBIAGl25kAgQIECAgADgDBAgQIECgQQEBoMGlG5kAAQIECAgAzgABAgQIEGhQQABocOlGJkCAAAECAoAzQIAAAQIEGhQQABpcupEJECBAgIAA4AwQIECAAIEGBQSABpdu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GHdVCRAgQIBAqIAAEMqvOAECBAgQiBEQAGLcVSVAgAABAqECAkAov+IECBAgQCBGQACIcVeVAAECBAiECggAofyKEyBAgACBGAEBIMZdVQIECBAgECogAITyK06AAAECBGIEBIAYd1UJECBAgECogAAQyq84AQIECBCIERAAYtxVJUCAAAECoQICQCi/4gQIECBAIEZAAIhxV5UAAQIECIQKCACh/IoTIECAAIEYAQEgxl1VAgQIECAQKiAAhPIrToAAAQIEYgQEgBh3VQkQIECAQKiAABDKrzgBAgQIEIgREABi3FUlQIAAAQKhAgJAKL/iBAgQIEAgRkAAiHFXlQABAgQIhAoIAKH8ihMgQIAAgRgBASDGXVUCBAgQIBAqIACE8itOgAABAgRiBASAGHdVCRAgQIBAqIAAEMqvOAECBAgQiBEQAGLcVSVAgAABAqECAkAov+IECBAgQCBGQACIcVeVAAECBAiECggAofyKEyBAgACBGAEBIMZdVQIECBAgECogAITyK06AAAECBGIEBIAYd1UJECBAgECogAAQyq84AQIECBCIERAAYtxVJUCAAAECoQICQCi/4gQIECBAIEZAAIhxV5UAAQIECIQKCACh/IoTIECAAIEYAQEgxl1VAgQIECAQKiAAhPIrToAAAQIEYgQEgBh3VQkQIECAQKiAABDKrzgBAgQIEIgREABi3FUlQIAAAQKhAgJAKL/iBAgQIEAgRkAAiHFXlQABAgQIhAr8L4swLLWxNISFAAAAAElFTkSuQmCC`;

  @ViewChild('hScroll', { static: false }) scrollWrapper: ElementRef;

  interval: any;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.scrollWrapper.nativeElement.scrollWidth <= this.scrollWrapper.nativeElement.clientWidth) {
        this.leftArrowHide = true;
        this.rightArrow = true;
      }
    }, 100);

  }

  listenToItemsScroll(e): void {
    this.leftArrowHide = e.left_arrow;
    this.rightArrow = e.right_arrow;
  }

  scrollLeft(): void {
    console.log('left');
    const leftArrow = document.getElementById('list-items');
    const scrollLeft = leftArrow.scrollLeft;
    const distance = scrollLeft - this.distance;
    this.scroll(distance);

  }

  left(): void {
    const d = this;
    this.interval = setInterval(() => { d.scrollLeft(); }, this.scrollSpeed);
  }

  scrollRight(): void {
    console.log('yes');
    const leftArrow = document.getElementById('list-items');
    const scrollLeft = leftArrow.scrollLeft;
    const distance = scrollLeft + this.distance;
    this.scroll(distance);
  }

  right(): void {
    const d = this;
    this.interval = setInterval(() => { console.log('Hello world'); }, this.scrollSpeed);
  }

  scroll(distance): void {
    const leftArrow = document.getElementById('list-items');
    leftArrow.scrollTo({ behavior: 'smooth', left: distance });
  }

  clear(): void {
    clearInterval(this.interval);
  }

  generateItems(): any[] {
    const items = [];
    for (let i = 1; i < 50; i++) {
      items.push({ title: `Item${i}`, link: 'https://github.com/isahohieku' });
    }

    return items;
  }

  ngOnChanges(simp: SimpleChanges): void {
    if (simp.items && (simp.items.currentValue !== simp.items.previousValue)) {
      this.items = simp.items.currentValue;
    }

    if (simp.background && (simp.background.currentValue !== simp.background.previousValue)) {
      this.background = simp.background.currentValue;
    }

    if (simp.text && (simp.text.currentValue !== simp.text.previousValue)) {
      this.text = simp.text.currentValue;
    }

    if (simp.linkLabel && (simp.linkLabel.currentValue !== simp.linkLabel.previousValue)) {
      this.linkLabel = simp.linkLabel.currentValue;
    }

    if (simp.distance && (simp.distance.currentValue !== simp.distance.previousValue)) {
      this.distance = simp.distance.currentValue;
    }

    if (simp.leftIcon && (simp.leftIcon.currentValue !== simp.leftIcon.previousValue)) {
      this.leftIcon = simp.leftIcon.currentValue;
    }

    if (simp.hideNav && (simp.hideNav.currentValue !== simp.hideNav.previousValue)) {
      this.hideNav = simp.hideNav.currentValue;
    }
  }

}
