import { Component } from '@angular/core';
import { Automobil } from '../core/models/car.model';
import { CommonModule } from '@angular/common';
import { AutoCard } from '../auto-card/auto-card';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/services/data';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [CommonModule, AutoCard, FormsModule],
  templateUrl: './auto-list.html',
  styleUrls: ['./auto-list.css']
})
export class AutoList {
  searchText: string = '';
  filteredCars: Automobil[] = [];
  cars: Automobil[] = [];
  private subscription!: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.cars$.subscribe(cars => {
      this.cars = cars;});
    this.dataService.resetFilter();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  searchCars() {
    this.dataService.filterCars(this.searchText);
  }
  clearSearch(): void {
    this.searchText = '';
    this.dataService.resetFilter();
  }
  onCarSelected(selectedCar: Automobil) {
    console.log('Вибраний автомобіль:', selectedCar);
  }
}
