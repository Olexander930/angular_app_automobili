import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCard } from './auto-card';

describe('AutoCard', () => {
  let component: AutoCard;
  let fixture: ComponentFixture<AutoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
