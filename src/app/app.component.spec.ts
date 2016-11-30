import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('App real', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [provideRoutes([])]
    });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
