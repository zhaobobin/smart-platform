import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/login/login.component';
import { AuthResetComponent } from './auth/reset/reset.component';

import { PagesComponent } from './pages/pages.component';
import { MyEventComponent } from './pages/my-event/my-event.component';
import { EventNavComponent } from './pages/event-nav/event-nav.component';
import { PublicInformation } from './pages/event-nav/components/public-information';
import { TalentService } from './pages/event-nav/components/talent-service';
import { SocialSecurity } from './pages/event-nav/components/social-security';
import { IntegratedManagement } from './pages/event-nav/components/integrated-management';
import { LaborRelations } from './pages/event-nav/components/labor-relations';
import { SystemSupport } from './pages/event-nav/components/system-support';

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
        children: [
          {
            path: 'public-information',
            component: PublicInformation
          },
          {
            path: 'talent-service',
            component: TalentService
          },
          {
            path: 'social-security',
            component: SocialSecurity
          },
          {
            path: 'integrated-management',
            component: IntegratedManagement
          },
          {
            path: 'labor-relations',
            component: LaborRelations
          },
          {
            path: 'system-support',
            component: SystemSupport
          },
          {
            path: '',
            redirectTo: 'public-information',
            pathMatch: 'full',
          },
          {
            path: '**',
            component: NotFoundComponent,
          },
        ]
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
