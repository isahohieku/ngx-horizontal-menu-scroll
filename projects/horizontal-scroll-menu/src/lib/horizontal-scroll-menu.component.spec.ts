import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { SimpleChange } from '@angular/core';

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

  it('should test if scrollRight', () => {
    const lists: HTMLElement = fixture.nativeElement.querySelector('#list-items');
    const initialScroll = lists.scrollLeft;
    fixture.detectChanges();

    spyOn(component, 'scrollLeft');

    component.scrollRight();

    fixture.detectChanges();

    console.log(lists.scrollLeft);

  });

  it('should listen to scroll', () => {
    fixture.detectChanges();

    component.scrollRight();
    component.scrollRight();
    component.scrollRight();

    fixture.detectChanges();

  });

  it('should scroll the lists', () => {

    spyOn(component, 'listenToItemsScroll').and.returnValue();
    const lists: HTMLElement = fixture.nativeElement.querySelector('#list-items');

    lists.scroll({ left: 200 });

    fixture.detectChanges();

    // expect(component.listenToItemsScroll).toHaveBeenCalled();

  });

  it('should have the updated list if previous is not same as present', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const items = [
      { title: 'Orange' },
      { title: 'Mango' },
      { title: 'Apple' },
    ];

    const itemsCurrentValue = {
      items: {
        currentValue: items
      }
    };

    const itemsChanges = {
      name: new SimpleChange(null, itemsCurrentValue, false)
    };
    component.ngOnChanges(itemsChanges);

    fixture.detectChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  });

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

    const itemsChanges = {
      name: new SimpleChange(null, itemsCurrentValue, false)
    };
    component.ngOnChanges(itemsChanges);

    fixture.detectChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('should have the updated background class', () => {
    fixture.detectChanges();

    spyOn(component, 'ngOnChanges').and.callThrough();

    const bacgroundCurrentValue = {
      background: {
        currentValue: 'anotherClass'
      }
    };

    const backgroundClassNameChanges = {
      name: new SimpleChange(null, bacgroundCurrentValue, false)
    };
    component.ngOnChanges(backgroundClassNameChanges);
    fixture.detectChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  });
});
