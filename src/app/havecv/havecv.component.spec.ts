import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavecvComponent } from './havecv.component';

describe('HavecvComponent', () => {
  let component: HavecvComponent;
  let fixture: ComponentFixture<HavecvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HavecvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HavecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
