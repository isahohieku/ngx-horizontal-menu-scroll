import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('HorizontalScrollMenuComponent', () => {
  let component: HorizontalScrollMenuComponent;
  let fixture: ComponentFixture<HorizontalScrollMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalScrollMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalScrollMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test if scrollRight on click', () => {
    const arrow: HTMLElement = fixture.nativeElement.querySelectorAll('.control')[1] as HTMLElement;

    spyOn(component, 'scrollRight').and.callThrough();

    const e = new Event('click');

    arrow.dispatchEvent(e);

    fixture.detectChanges();

    expect(component.scrollRight).toHaveBeenCalled();

  });

  it('should test if scrollRight on mousedown', fakeAsync(() => {
    const arrow: HTMLElement = fixture.nativeElement.querySelectorAll('.control')[1] as HTMLElement;

    spyOn(component, 'right').and.callThrough();
    spyOn(component, 'scrollRight').and.callThrough();

    const e = new Event('mousedown');

    arrow.dispatchEvent(e);

    fixture.detectChanges();

    expect(component.right).toHaveBeenCalled();

    tick(100);

    expect(component.scrollRight).toHaveBeenCalled();

    component.clear();

  }));

  it('should test if scrolling has stopped on mouseup', fakeAsync(() => {
    const arrow: HTMLElement = fixture.nativeElement.querySelectorAll('.control')[1] as HTMLElement;

    spyOn(component, 'right').and.callThrough();
    spyOn(component, 'clear').and.callThrough();

    const e: Event = new Event('mousedown');
    const ev: Event = new Event('mouseup');

    arrow.dispatchEvent(e);

    fixture.detectChanges();

    expect(component.right).toHaveBeenCalled();

    arrow.dispatchEvent(ev);

    fixture.detectChanges();

    expect(component.clear).toHaveBeenCalled();

  }));

  it('should test if scrollLeft on click', () => {
    const ul = fixture.nativeElement.querySelector('ul') as HTMLElement;
    ul.scrollLeft = 200;

    const arrow: HTMLElement = fixture.nativeElement.querySelectorAll('.control')[0] as HTMLElement;

    spyOn(component, 'scrollLeft').and.callThrough();

    const e = new Event('click');

    arrow.dispatchEvent(e);

    fixture.detectChanges();

    expect(component.scrollLeft).toHaveBeenCalled();
  });

  it('should click on a certain link', () => {
    spyOn(component.clickedEventEmiiter, 'emit');

    const link = fixture.nativeElement.querySelector('#Item1') as HTMLElement;

    link.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.clickedEventEmiiter.emit).toHaveBeenCalledWith({ title: 'Item1', link: 'https://github.com/isahohieku' });

  });

  it('should test if scrollLeft on mousedown', fakeAsync(() => {
    const ul = fixture.nativeElement.querySelector('ul') as HTMLElement;
    ul.scrollLeft = 200;

    const arrow: HTMLElement = fixture.nativeElement.querySelectorAll('.control')[0] as HTMLElement;

    spyOn(component, 'left').and.callThrough();
    spyOn(component, 'scrollLeft').and.callThrough();

    const e = new Event('mousedown');

    arrow.dispatchEvent(e);

    fixture.detectChanges();

    expect(component.left).toHaveBeenCalled();

    tick(100);

    expect(component.scrollLeft).toHaveBeenCalled();

    component.clear();

  }));

  it('should have the updated list if previous is same as present', () => {
    fixture.detectChanges();

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
  });

  it('should have the updated background class', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const backgroundCurrentValue = {
      background: {
        currentValue: 'anotherClass',
        previousValue: 'anotherClass'
      }
    };

    const backgroundClassNameChanges: SimpleChanges = {
      background: new SimpleChange(null, backgroundCurrentValue, false)
    };
    component.ngOnChanges(backgroundClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();

  });

  it('should have the updated text class', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const textCurrentValue = {
      text: {
        currentValue: 'anotherClass',
        previousValue: 'anotherClass'
      }
    };

    const textClassNameChanges: SimpleChanges = {
      text: new SimpleChange(null, textCurrentValue, false)
    };
    component.ngOnChanges(textClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should have the updated leftIcon', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const leftIconCurrentValue = {
      leftIcon: {
        currentValue: 'dummyUrl',
        previousValue: 'anotherdummyUrl'
      }
    };

    const leftIconClassNameChanges: SimpleChanges = {
      leftIcon: new SimpleChange(null, leftIconCurrentValue, false)
    };
    component.ngOnChanges(leftIconClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should have the updated distance', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const distanceCurrentValue = {
      distance: {
        currentValue: 100,
        previousValue: 200
      }
    };

    const distanceClassNameChanges: SimpleChanges = {
      distance: new SimpleChange(null, distanceCurrentValue, false)
    };
    component.ngOnChanges(distanceClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should have the updated linkLabel', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const linkLabelCurrentValue = {
      linkLabel: {
        currentValue: '',
        previousValue: 'link'
      }
    };

    const linkLabelClassNameChanges: SimpleChanges = {
      linkLabel: new SimpleChange(null, linkLabelCurrentValue, false)
    };
    component.ngOnChanges(linkLabelClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should have the updated hideNav', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const hideNavCurrentValue = {
      hideNav: {
        currentValue: '',
        previousValue: 'link'
      }
    };

    const hideNavClassNameChanges: SimpleChanges = {
      hideNav: new SimpleChange(null, hideNavCurrentValue, false)
    };
    component.ngOnChanges(hideNavClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should have the updated scrollSpeed', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const scrollSpeedCurrentValue = {
      scrollSpeed: {
        currentValue: 200,
        previousValue: 500
      }
    };

    const scrollSpeedClassNameChanges: SimpleChanges = {
      scrollSpeed: new SimpleChange(null, scrollSpeedCurrentValue, false)
    };
    component.ngOnChanges(scrollSpeedClassNameChanges);
    fixture.detectChanges();

    expect(component.ngOnChanges).toHaveBeenCalled();
  });
});
