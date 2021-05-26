import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectmessageComponent } from './directmessage.component';

describe('DirectmessageComponent', () => {
  let component: DirectmessageComponent;
  let fixture: ComponentFixture<DirectmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
