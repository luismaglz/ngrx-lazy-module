import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css'],
})
export class Route1Component {
  constructor(protected router: Router) {}

  navigate() {
    this.router.navigate(['/store2']);
  }
}
