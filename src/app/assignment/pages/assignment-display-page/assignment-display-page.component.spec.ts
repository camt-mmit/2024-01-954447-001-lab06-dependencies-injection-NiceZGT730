import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentDisplayPageComponent } from './assignment-display-page.component';

describe('AssignmentDisplayPageComponent', () => {
  let component: AssignmentDisplayPageComponent;
  let fixture: ComponentFixture<AssignmentDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentDisplayPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
