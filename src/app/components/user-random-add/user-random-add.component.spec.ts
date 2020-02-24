import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRandomAddComponent } from './user-random-add.component';

describe('UserRandomAddComponent', () => {
  let component: UserRandomAddComponent;
  let fixture: ComponentFixture<UserRandomAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRandomAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRandomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
