import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetails } from './auto-details';

describe('AutoDetails', () => {
  let component: AutoDetails;
  let fixture: ComponentFixture<AutoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
