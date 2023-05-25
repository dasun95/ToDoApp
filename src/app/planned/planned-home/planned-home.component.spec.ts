import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedHomeComponent } from './planned-home.component';

describe('PlannedHomeComponent', () => {
  let component: PlannedHomeComponent;
  let fixture: ComponentFixture<PlannedHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannedHomeComponent]
    });
    fixture = TestBed.createComponent(PlannedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
