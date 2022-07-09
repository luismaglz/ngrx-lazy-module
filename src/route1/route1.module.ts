import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { store1module } from '../store/store1/store1.module';
import { Route1Component } from './route1.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'component',
        component: Route1Component,
      },
    ]),
    store1module,
  ],
  declarations: [Route1Component],
  providers: [],
  exports: [Route1Component],
})
export class route1module {}
