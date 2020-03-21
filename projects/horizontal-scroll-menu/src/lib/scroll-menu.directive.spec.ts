import { ScrollMenuDirective } from './scroll-menu.directive';
import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { TestBed, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';

describe('ScrollMenuDirective', () => {

  let fixture: ComponentFixture<HorizontalScrollMenuComponent>;
  let component: HorizontalScrollMenuComponent;
  let inputEl: HTMLElement;


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [HorizontalScrollMenuComponent, ScrollMenuDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(HorizontalScrollMenuComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ScrollMenuDirective();
    expect(directive).toBeTruthy();
  });

  it('Should detect scroll', () => {
    fixture.detectChanges();
    inputEl = fixture.nativeElement.querySelector('ul');

    // const event =
    //   new Event('scroll', { bubbles: true, left_arrow: true, right_arrow: false });
    // spyOn(component, 'listenToItemsScroll');

    // inputEl.dispatchEvent(event);
    // fixture.detectChanges();

    // expect(component.listenToItemsScroll).toHaveBeenCalled();
  });
});
