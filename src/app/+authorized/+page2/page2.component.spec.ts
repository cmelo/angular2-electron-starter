import { provideRoutes } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Page2Component } from './page2.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideRoutes([])],
      declarations: [Page2Component]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(Page2Component);
    expect(fixture.componentInstance instanceof Page2Component).toBe(true, 'should create Page2Component');
  });
});
