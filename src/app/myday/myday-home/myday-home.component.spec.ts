import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydayHomeComponent } from './myday-home.component';

describe('MydayHomeComponent', () => {
  let component: MydayHomeComponent;
  let fixture: ComponentFixture<MydayHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydayHomeComponent]
    });
    fixture = TestBed.createComponent(MydayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
