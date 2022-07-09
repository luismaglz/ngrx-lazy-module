import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAnything, selectAnythingSub } from '../store/store2/selector';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component {
  constructor(protected router: Router) {}

  navigate() {
    this.router.navigate(['/store1/component']);
  }
}
