import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/translate',
    pathMatch: 'full'
  },
  {
    path: 'translate',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
