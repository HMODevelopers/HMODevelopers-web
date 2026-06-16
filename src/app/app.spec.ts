import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { LandingPageComponent } from './features/landing/landing-page.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, LandingPageComponent],
      providers: [provideRouter([{ path: '', component: LandingPageComponent }])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the HMODevelopers landing title', () => {
    const fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('soluciones digitales reales');
  });
});
