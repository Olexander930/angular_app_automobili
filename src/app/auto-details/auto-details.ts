import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../core/services/data';
import { Automobil } from '../core/models/car.model';

@Component({
  selector: 'app-auto-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './auto-details.html',
  styleUrls: ['./auto-details.css']
})
export class AutoDetails implements OnInit {
  car?: Automobil;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = idStr ? Number(idStr) : NaN;
    if (!isNaN(id)) {
      this.car = this.dataService.getCarById(id);
    }
  }
}
