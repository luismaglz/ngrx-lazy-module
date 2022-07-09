import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ActionReducer, StoreModule } from '@ngrx/store/src';
import { store1module } from '../store/store1/store1.module';
import { store2module } from '../store/store2/store2.module';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppRoutingModule } from './routing.module';

export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['store1', 'store2'],
    storage: sessionStorage,
    rehydrate: true,
    restoreDates: false,
  })(reducer);
}

const metaReducers = [sessionStorageSyncReducer];

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers,
      }
    ),
    store1module,
    store2module,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
