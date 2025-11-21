import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoList } from './auto-list';
import { AutoCard } from '../auto-card/auto-card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../core/services/data';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('AutoList → AutoCard integration', () => {
  let fixture: ComponentFixture<AutoList>;
  let mockDataService: jasmine.SpyObj<DataService>;
  const mockCars = [
    { id: 1, brand: 'BMW', model: 'X5', year: 2020 },
    { id: 2, brand: 'Audi', model: 'A6', year: 2019 }
  ] as any[];
  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('DataService', ['getCars']);
    mockDataService.getCars.and.returnValue(of(mockCars));
    await TestBed.configureTestingModule({
      imports: [
        AutoList,
        AutoCard,
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: DataService, useValue: mockDataService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AutoList);
    fixture.detectChanges();
  });
  it('should render all cars in auto-card', () => {
    const cardElements =
      fixture.nativeElement.querySelectorAll('app-auto-card');
    expect(cardElements.length).toBe(2);
  });
});

