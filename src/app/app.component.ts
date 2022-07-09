import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAnything, selectAnythingSub } from '../store/store2/selector';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(protected store: Store) {}

  ngOnInit() {
    console.log('app on init');
    this.store
      .select(selectAnything)
      .subscribe((value) => console.log('direct child', value));
    this.store
      .select(selectAnythingSub)
      .subscribe((sub) => console.log('indirect child', sub));
  }
}
