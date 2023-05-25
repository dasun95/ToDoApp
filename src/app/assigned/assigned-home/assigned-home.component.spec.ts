import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedHomeComponent } from './assigned-home.component';

describe('AssignedHomeComponent', () => {
  let component: AssignedHomeComponent;
  let fixture: ComponentFixture<AssignedHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedHomeComponent]
    });
    fixture = TestBed.createComponent(AssignedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
