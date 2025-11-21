import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return list of cars', () => {
    const mockCars = [{ id: 1, brand: 'BMW', model: 'X5' }];

    service.getCars().subscribe(cars => {
      expect(cars.length).toBe(1);
      expect(cars[0].brand).toBe('BMW');
    });

    const req = httpMock.expectOne('http://localhost:3000/cars');
    expect(req.request.method).toBe('GET');
    req.flush(mockCars);
  });
});
