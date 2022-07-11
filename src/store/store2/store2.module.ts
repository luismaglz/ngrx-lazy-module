import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src';
import { localStorageSync } from 'ngrx-store-localstorage/lib';
import { reducer2 } from './reducer2';

export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['store2'],
    storage: sessionStorage,
    rehydrate: true,
    restoreDates: false,
  })(reducer);
}

@NgModule({
  imports: [
    StoreModule.forFeature('store2', reducer2, {
      metaReducers: [sessionStorageSyncReducer],
    }),
  ],
  declarations: [],
  providers: [],
})
export class store2module {}
