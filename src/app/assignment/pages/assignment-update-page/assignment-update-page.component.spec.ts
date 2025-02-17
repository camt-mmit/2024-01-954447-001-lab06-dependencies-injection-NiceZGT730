import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentUpdatePageComponent } from './assignment-update-page.component';

describe('AssignmentUpdatePageComponent', () => {
  let component: AssignmentUpdatePageComponent;
  let fixture: ComponentFixture<AssignmentUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
