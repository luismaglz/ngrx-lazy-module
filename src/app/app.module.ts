import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ActionReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { localStorageSync } from "ngrx-store-localstorage";
import { store2module } from "../store/store2/store2.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./routing.module";

export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ["store1", "store2"],
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
    StoreDevtoolsModule.instrument({ maxAge: 40, name: "Demo App" }),
    store2module,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
