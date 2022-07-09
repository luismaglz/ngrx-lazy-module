import { NgModule } from '@angular/core';
import { Route2Component } from './route2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: Route2Component,
      },
    ]),
  ],
  declarations: [Route2Component],
  providers: [],
  exports: [Route2Component],
})
export class route2module {}
