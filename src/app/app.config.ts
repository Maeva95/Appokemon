import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pokemon/pokemon.routes')
  },
  {   
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./login/login.component').then(module => module.LoginComponent)
  },
  {
    path: '**',
    title: 'Page not found',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
  ]
};
