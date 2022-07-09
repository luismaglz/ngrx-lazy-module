import { NgModule } from '@angular/core';
import { Route1Component } from './route1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Route1Component,
      },
    ]),
  ],
  declarations: [Route1Component],
  providers: [],
  exports: [Route1Component],
})
export class route1module {}
