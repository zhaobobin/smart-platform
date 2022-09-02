import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthResetComponent } from './auth/reset/reset.component';

import { PagesComponent } from './pages/pages.component';
import { MyEventComponent } from './pages/my-event/my-event.component';
import { EventNavComponent } from './pages/event-nav/event-nav.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
      },
      {
        path: 'reset',
        component: AuthResetComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'my-event',
        component: MyEventComponent,
      },
      {
        path: 'event-nav',
        component: EventNavComponent,
      },
      {
        path: '',
        redirectTo: 'my-event',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
