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

  // Additional comprehensive tests for directive
  it('should create directive instance directly', () => {
    const directive = new ScrollMenuDirective();
    expect(directive).toBeTruthy();
    expect(directive.scrolled).toBeDefined();
  });

  it('should emit correct values when scrollLeft is 0', () => {
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    const mockEvent = {
      target: {
        scrollLeft: 0,
        scrollWidth: 1000,
        clientWidth: 500
      }
    };

    directive.scrollMenu(mockEvent);

    expect(directive.scrolled.emit).toHaveBeenCalledWith({
      left_arrow: true,
      right_arrow: false
    });
  });

  it('should emit correct values when scrollLeft > 0 and not at end', () => {
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    const mockEvent = {
      target: {
        scrollLeft: 100,
        scrollWidth: 1000,
        clientWidth: 500
      }
    };

    directive.scrollMenu(mockEvent);

    expect(directive.scrolled.emit).toHaveBeenCalledWith({
      left_arrow: false,
      right_arrow: false
    });
  });

  it('should emit correct values when at the end of scroll', () => {
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    const mockEvent = {
      target: {
        scrollLeft: 500,
        scrollWidth: 1000,
        clientWidth: 500
      }
    };

    directive.scrollMenu(mockEvent);

    expect(directive.scrolled.emit).toHaveBeenCalledWith({
      left_arrow: false,
      right_arrow: true
    });
  });

  it('should emit correct values when scrollLeft > 0 and at the end', () => {
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    const mockEvent = {
      target: {
        scrollLeft: 600,
        scrollWidth: 1000,
        clientWidth: 400
      }
    };

    directive.scrollMenu(mockEvent);

    expect(directive.scrolled.emit).toHaveBeenCalledWith({
      left_arrow: false,
      right_arrow: true
    });
  });

  it('should handle edge case when scrollWidth equals clientWidth', () => {
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    const mockEvent = {
      target: {
        scrollLeft: 0,
        scrollWidth: 500,
        clientWidth: 500
      }
    };

    directive.scrollMenu(mockEvent);

    expect(directive.scrolled.emit).toHaveBeenCalledWith({
      left_arrow: true,
      right_arrow: true
    });
  });

  it('should handle negative scrollLeft values', () => {
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    const mockEvent = {
      target: {
        scrollLeft: -10,
        scrollWidth: 1000,
        clientWidth: 500
      }
    };

    directive.scrollMenu(mockEvent);

    expect(directive.scrolled.emit).toHaveBeenCalledWith({
      left_arrow: true,
      right_arrow: false
    });
  });

  it('should test directive with real DOM scroll event', () => {
    inputEl = scrollDirectiveComponent[0].nativeElement as HTMLElement;
    const directive = scrollDirectiveComponent[0].injector.get(ScrollMenuDirective);
    spyOn(directive.scrolled, 'emit');

    // Mock the properties
    Object.defineProperty(inputEl, 'scrollLeft', { value: 50, writable: true });
    Object.defineProperty(inputEl, 'scrollWidth', { value: 1000, writable: true });
    Object.defineProperty(inputEl, 'clientWidth', { value: 500, writable: true });

    const scrollEvent = new Event('scroll');
    Object.defineProperty(scrollEvent, 'target', {
      value: inputEl,
      writable: false
    });

    inputEl.dispatchEvent(scrollEvent);

    expect(directive.scrolled.emit).toHaveBeenCalled();
  });
});
