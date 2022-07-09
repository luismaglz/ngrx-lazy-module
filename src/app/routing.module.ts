import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route1module } from '../route1/route1.module';
import { route2module } from '../route2/route2.module';
import { hellomodule } from './hello.module';

const routes: Routes = [
  {
    path: 'store2',
    loadChildren: () =>
      import('../route2/route2.module').then((m) => m.route2module),
  },
  // {
  //   path: 'store1',
  //   loadChildren: () =>
  //     import('../route1/route1.module').then((m) => m.route1module),
  // },
  {
    path: '*',
    pathMatch: 'prefix',
    redirectTo: 'store2',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
      // preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
    hellomodule,
    route1module,
    route2module,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
