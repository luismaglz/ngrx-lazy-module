import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer2 } from './reducer2';

@NgModule({
  imports: [StoreModule.forFeature('store2', reducer2)],
  declarations: [],
  providers: [],
})
export class store2module {}
