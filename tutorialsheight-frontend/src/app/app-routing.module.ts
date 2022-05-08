import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'landing', pathMatch:'full'},
  {
    path: 'landing',
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./modules/profile-account/profile-account.module').then(
        (m) => m.ProfileAccountModule
      ),
  },
  {
    path: 'admin-panel',
    loadChildren: () =>
      import('./modules/admin-panel/admin-panel.module').then(
        (m) => m.AdminPanelModule
      ),
  },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
