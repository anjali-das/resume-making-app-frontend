import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobstepsComponent } from './jobsteps.component';

describe('JobstepsComponent', () => {
  let component: JobstepsComponent;
  let fixture: ComponentFixture<JobstepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobstepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
