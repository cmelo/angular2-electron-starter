import { provideRoutes } from '@angular/router';
import { Http, XHRBackend, BaseRequestOptions } from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';

import { LoginComponent } from './login.component';
import { UserService } from '../../services/user';

describe('Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
      providers: [
        provideRoutes([]),
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
        UserService
      ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'should create LoginComponent');
  });
});
