import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSelectAccountComponent } from './signup-select-account.component';

describe('SignupSelectAccountComponent', () => {
  let component: SignupSelectAccountComponent;
  let fixture: ComponentFixture<SignupSelectAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSelectAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupSelectAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
