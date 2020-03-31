import { ScrollMenuDirective } from './scroll-menu.directive';
import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { TestBed, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChanges, SimpleChange } from '@angular/core';

describe('ScrollMenuDirective', () => {

  let fixture: ComponentFixture<HorizontalScrollMenuComponent>;
  let component: HorizontalScrollMenuComponent;
  let inputEl: HTMLElement;
  let scrollDirectiveComponent: DebugElement[];


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [HorizontalScrollMenuComponent, ScrollMenuDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(HorizontalScrollMenuComponent);
    component = fixture.componentInstance;
    scrollDirectiveComponent = fixture.debugElement.queryAll(By.directive(ScrollMenuDirective));
  });

  it('should create an instance', () => {
    const directive = new ScrollMenuDirective();
    expect(directive).toBeTruthy();
  });

  it('Should detect scroll when scrollLeft is less than or greater than 0', () => {
    inputEl = scrollDirectiveComponent[0].nativeElement as HTMLElement;

    const e = new Event('scroll');

    inputEl.dispatchEvent(e);
    fixture.detectChanges();

    inputEl.scrollLeft = 200;

    inputEl.dispatchEvent(e);
    fixture.detectChanges();

    expect(inputEl.scrollLeft).toEqual(200);

  });

  it('Should detect scroll when scrollLeft is greater than or equal to the difference in scrollWidth and clientWidth', () => {
    inputEl = scrollDirectiveComponent[0].nativeElement as HTMLElement;

    const e = new Event('scroll');

    const difference = inputEl.scrollWidth - inputEl.clientWidth;

    inputEl.scrollLeft = difference;

    fixture.detectChanges();
    console.log(inputEl.scrollLeft);

    inputEl.dispatchEvent(e);
    fixture.detectChanges();


    expect(inputEl.scrollLeft).toBeGreaterThanOrEqual(difference);

  });

  it('Should detect scroll when scrollWidth is less than or equal to the clientWidth', () => {
    inputEl = scrollDirectiveComponent[0].nativeElement as HTMLElement;

    spyOn(component, 'ngOnChanges').and.callThrough();

    const items = [
      { title: 'Orange' },
      { title: 'Mango' },
      { title: 'Apple' },
    ];

    const itemsCurrentValue = {
      items: {
        currentValue: items,
        previousValue: component.items
      }
    };

    const itemsChanges: SimpleChanges = {
      items: new SimpleChange(null, itemsCurrentValue, false)
    };
    component.ngOnChanges(itemsChanges);

    fixture.detectChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();

    const e = new Event('scroll');

    inputEl.dispatchEvent(e);
    fixture.detectChanges();

    expect(inputEl.scrollWidth).toBeLessThanOrEqual(inputEl.clientWidth);

  });
});
