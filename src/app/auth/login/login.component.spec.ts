import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an invalid form', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate email field', () => {
    const email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.errors?.['required']).toBeTruthy();

    email.setValue('test');
    expect(email.errors?.['email']).toBeTruthy();

    email.setValue('test@example.com');
    expect(email.valid).toBeTruthy();
  });

  it('should validate password field', () => {
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.errors?.['required']).toBeTruthy();

    password.setValue('123456');
    expect(password.valid).toBeTruthy();
  });
});