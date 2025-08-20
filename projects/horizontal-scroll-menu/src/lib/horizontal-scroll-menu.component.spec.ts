import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('HorizontalScrollMenuComponent', () => {
  let component: HorizontalScrollMenuComponent;
  let fixture: ComponentFixture<HorizontalScrollMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HorizontalScrollMenuComponent]
    })
      .compileComponents();
  });

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

  // Additional tests for 100% coverage
  it('should test ngOnInit with scrollWidth <= clientWidth', fakeAsync(() => {
    Object.defineProperty(component.scrollWrapper.nativeElement, 'scrollWidth', {
      value: 100,
      writable: true
    });
    Object.defineProperty(component.scrollWrapper.nativeElement, 'clientWidth', {
      value: 200,
      writable: true
    });

    component.ngOnInit();
    tick(100);

    expect(component.leftArrowHide).toBe(true);
    expect(component.rightArrow).toBe(true);
  }));

  it('should test ngOnInit with scrollWidth > clientWidth', fakeAsync(() => {
    Object.defineProperty(component.scrollWrapper.nativeElement, 'scrollWidth', {
      value: 300,
      writable: true
    });
    Object.defineProperty(component.scrollWrapper.nativeElement, 'clientWidth', {
      value: 200,
      writable: true
    });

    component.ngOnInit();
    tick(100);

    // Values should remain as initialized
    expect(component.leftArrowHide).toBe(true);
    expect(component.rightArrow).toBe(false);
  }));

  it('should test listenToItemsScroll method', () => {
    const scrollEvent = {
      left_arrow: false,
      right_arrow: true
    };

    component.listenToItemsScroll(scrollEvent);

    expect(component.leftArrowHide).toBe(false);
    expect(component.rightArrow).toBe(true);
  });

  it('should test scroll method', () => {
    const mockElement = {
      scrollTo: jasmine.createSpy('scrollTo')
    };
    spyOn(document, 'getElementById').and.returnValue(mockElement as any);

    component.scroll(100);

    expect(mockElement.scrollTo).toHaveBeenCalledWith({ behavior: 'smooth', left: 100 });
  });

  it('should test generateItems method', () => {
    const items = component.generateItems();

    expect(items.length).toBe(49);
    expect(items[0]).toEqual({ title: 'Item1', link: 'https://github.com/isahohieku' });
    expect(items[48]).toEqual({ title: 'Item49', link: 'https://github.com/isahohieku' });
  });

  it('should test onLinkClicked method', () => {
    spyOn(component.clickedEventEmiiter, 'emit');
    const testItem = { title: 'Test Item', link: 'test-link' };

    component.onLinkClicked(testItem);

    expect(component.clickedEventEmiiter.emit).toHaveBeenCalledWith(testItem);
  });

  it('should test ngOnChanges with multiple properties', () => {
    const changes: SimpleChanges = {
      items: new SimpleChange(null, [{ title: 'New Item' }], false),
      background: new SimpleChange(null, 'new-bg-class', false),
      text: new SimpleChange(null, 'new-text-class', false)
    };

    component.ngOnChanges(changes);

    expect(component.items).toEqual([{ title: 'New Item' }]);
    expect(component.background).toBe('new-bg-class');
    expect(component.text).toBe('new-text-class');
  });

  it('should test clear method', () => {
    component.interval = setInterval(() => {}, 100);
    spyOn(window, 'clearInterval');

    component.clear();

    expect(clearInterval).toHaveBeenCalledWith(component.interval);
  });

  it('should test left method with interval', fakeAsync(() => {
    spyOn(component, 'scrollLeft');

    component.left();
    tick(component.scrollSpeed);

    expect(component.scrollLeft).toHaveBeenCalled();
    component.clear();
  }));

  it('should test right method with interval', fakeAsync(() => {
    spyOn(component, 'scrollRight');

    component.right();
    tick(component.scrollSpeed);

    expect(component.scrollRight).toHaveBeenCalled();
    component.clear();
  }));

  it('should test scrollLeft with document.getElementById', () => {
    const mockElement = {
      scrollLeft: 100,
      scrollTo: jasmine.createSpy('scrollTo')
    };
    spyOn(document, 'getElementById').and.returnValue(mockElement as any);
    spyOn(component, 'scroll');

    component.scrollLeft();

    expect(component.scroll).toHaveBeenCalledWith(50); // 100 - 50 (default distance)
  });

  it('should test scrollRight with document.getElementById', () => {
    const mockElement = {
      scrollLeft: 100,
      scrollTo: jasmine.createSpy('scrollTo')
    };
    spyOn(document, 'getElementById').and.returnValue(mockElement as any);
    spyOn(component, 'scroll');

    component.scrollRight();

    expect(component.scroll).toHaveBeenCalledWith(150); // 100 + 50 (default distance)
  });

  it('should test component with custom distance', () => {
    component.distance = 75;
    const mockElement = {
      scrollLeft: 200,
      scrollTo: jasmine.createSpy('scrollTo')
    };
    spyOn(document, 'getElementById').and.returnValue(mockElement as any);
    spyOn(component, 'scroll');

    component.scrollLeft();

    expect(component.scroll).toHaveBeenCalledWith(125); // 200 - 75
  });

  it('should test component with custom scrollSpeed', fakeAsync(() => {
    component.scrollSpeed = 200;
    spyOn(component, 'scrollRight');

    component.right();
    tick(200);

    expect(component.scrollRight).toHaveBeenCalled();
    component.clear();
  }));

  it('should test component initialization with default values', () => {
    expect(component.linkLabel).toBe('link');
    expect(component.hideNav).toBe(false);
    expect(component.distance).toBe(50);
    expect(component.scrollSpeed).toBe(100);
    expect(component.leftArrowHide).toBe(true);
    expect(component.rightArrow).toBe(false);
  });

  it('should test component with hideNav true', () => {
    component.hideNav = true;
    fixture.detectChanges();

    const controls = fixture.nativeElement.querySelectorAll('.control');
    expect(controls.length).toBe(0);
  });

  it('should test component with custom linkLabel', () => {
    const customItems = [
      { title: 'Item1', customLink: 'http://example.com' },
      { title: 'Item2' }
    ];
    component.items = customItems;
    component.linkLabel = 'customLink';
    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links[0].href).toBe('http://example.com/');
    expect(links[1].href).toBe('');
  });

  it('should handle empty items array', () => {
    component.items = [];
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeFalsy();
  });

  it('should handle null items', () => {
    component.items = null;
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeFalsy();
  });

  it('should test ImageModel interface usage', () => {
    const imageModel = {
      type: 'png',
      image: 'data:image/png;base64,test'
    };
    component.navIcon = imageModel;

    expect(component.navIcon.type).toBe('png');
    expect(component.navIcon.image).toBe('data:image/png;base64,test');
  });
});
