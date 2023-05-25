import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantHomeComponent } from './important-home.component';

describe('ImportantHomeComponent', () => {
  let component: ImportantHomeComponent;
  let fixture: ComponentFixture<ImportantHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantHomeComponent]
    });
    fixture = TestBed.createComponent(ImportantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
