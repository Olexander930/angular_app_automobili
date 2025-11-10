import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Automobil } from '../core/models/car.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auto-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auto-card.html',
  styleUrls: ['./auto-card.css']
})
export class AutoCard {
  @Input() car!: Automobil;

  @Output() select = new EventEmitter<Automobil>();
  onDetailsClick(){
    this.select.emit(this.car);
  }
}
