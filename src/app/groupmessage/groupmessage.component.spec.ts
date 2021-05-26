import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupmessageComponent } from './groupmessage.component';

describe('GroupmessageComponent', () => {
  let component: GroupmessageComponent;
  let fixture: ComponentFixture<GroupmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
