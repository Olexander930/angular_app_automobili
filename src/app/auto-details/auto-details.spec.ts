import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoDetails } from './auto-details';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from '../core/services/data';

describe('AutoDetails', () => {
  let fixture: ComponentFixture<AutoDetails>;
  let component: AutoDetails;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDetails, HttpClientTestingModule],
      providers: [
        DataService,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoDetails);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
