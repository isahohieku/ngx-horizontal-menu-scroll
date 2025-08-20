import { TestBed } from '@angular/core/testing';
import { HorizontalScrollMenuModule } from './horizontal-scroll-menu.module';
import { HorizontalScrollMenuComponent } from './horizontal-scroll-menu.component';
import { ScrollMenuDirective } from './scroll-menu.directive';

describe('HorizontalScrollMenuModule', () => {
  let module: HorizontalScrollMenuModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HorizontalScrollMenuModule]
    });
    module = new HorizontalScrollMenuModule();
  });

  it('should create', () => {
    expect(module).toBeTruthy();
  });

  it('should declare and export HorizontalScrollMenuComponent', () => {
    const fixture = TestBed.createComponent(HorizontalScrollMenuComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should work with ScrollMenuDirective', () => {
    const fixture = TestBed.createComponent(HorizontalScrollMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ul')).toBeTruthy();
  });

  it('should import CommonModule functionality', () => {
    const fixture = TestBed.createComponent(HorizontalScrollMenuComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // Test that *ngIf and *ngFor work (CommonModule features)
    expect(compiled.querySelector('nav')).toBeTruthy();
    expect(compiled.querySelectorAll('li').length).toBeGreaterThan(0);
  });
});
