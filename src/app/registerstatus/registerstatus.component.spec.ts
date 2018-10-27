import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterstatusComponent } from './registerstatus.component';

describe('RegisterstatusComponent', () => {
  let component: RegisterstatusComponent;
  let fixture: ComponentFixture<RegisterstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
