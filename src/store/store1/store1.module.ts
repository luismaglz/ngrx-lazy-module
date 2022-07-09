import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer1 } from './reducer';

@NgModule({
  imports: [StoreModule.forFeature('store1', reducer1)],
  declarations: [],
  providers: [],
})
export class store1module {}
