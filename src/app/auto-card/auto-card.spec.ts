import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCard } from './auto-card';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../core/pipes/shorten-pipe';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
describe('AutoCard', () => {
  let fixture: ComponentFixture<AutoCard>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, AutoCard],
      providers: [ShortenPipe]
    }).compileComponents();
    fixture = TestBed.createComponent(AutoCard);
  });
  it('should display brand and model in <h3>', () => {
    fixture.componentInstance.car = {
      id: 1,
      brand: 'BMW',
      model: 'X5',
      year: 2021,
      engine: '3.0',
      transmission: 'Auto',
      fuelConsumption: '9L',
      color: 'Black',
      price: 45000,
      discountPrice: undefined,
      isAvailable: true,
      imageUrl: 'test.jpg'
    };
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('h3'));
    expect(title).not.toBeNull();
    expect(title.nativeElement.textContent).toContain('BMW');
    expect(title.nativeElement.textContent).toContain('X5');
  });
});

