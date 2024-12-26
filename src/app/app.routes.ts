import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { PantallaPrincipalSolverSpaceComponent } from './components/pantalla-principal-solver-space/pantalla-principal-solver-space.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'components/pantalla-principal-solver-space', component: PantallaPrincipalSolverSpaceComponent },
];

export const appProviders = [
  provideHttpClient(),
  importProvidersFrom(),
];
