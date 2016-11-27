import { provideRoutes } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorizedComponent } from './authorized.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [provideRoutes([])],
      declarations: [AuthorizedComponent]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AuthorizedComponent);
    expect(fixture.componentInstance instanceof AuthorizedComponent).toBe(true, 'should create AuthorizedComponent');
  });
});
