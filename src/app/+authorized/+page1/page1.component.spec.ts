import { provideRoutes } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Page1Component } from './page1.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideRoutes([])],
      declarations: [Page1Component]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(Page1Component);
    expect(fixture.componentInstance instanceof Page1Component).toBe(true, 'should create Page1Component');
  });
});
