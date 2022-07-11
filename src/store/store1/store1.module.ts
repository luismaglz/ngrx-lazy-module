import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src';
import { localStorageSync } from 'ngrx-store-localstorage/lib';
import { reducer1 } from './reducer';

export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['store1'],
    storage: sessionStorage,
    rehydrate: true,
    restoreDates: false,
  })(reducer);
}

@NgModule({
  imports: [
    StoreModule.forFeature('store1', reducer1, {
      metaReducers: [sessionStorageSyncReducer],
    }),
  ],
  declarations: [],
  providers: [],
})
export class store1module {}
