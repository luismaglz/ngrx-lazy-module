import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAnything, selectAnythingSub } from '../store/store2/selector';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component implements OnInit {
  constructor(protected store: Store, protected router: Router) {}

  ngOnInit() {
    console.log('app-route2 on init');
    this.store
      .select(selectAnything)
      .subscribe((value) => console.log('direct child', value));
    this.store
      .select(selectAnythingSub)
      .subscribe((sub) => console.log('indirect child', sub));
  }

  navigate() {
    this.router.navigate(['/store1/component']);
  }
}
