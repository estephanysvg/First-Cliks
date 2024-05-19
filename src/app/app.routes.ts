import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/layout/layout.component'),
    children: [
      {
        path: 'login',
        title: 'Inicio de sesión',
        loadComponent: () => import('./pages/auth/login/login.component'),
      },
      {
        path: 'signup',
        title: 'Registro de usuario',
        loadComponent: () => import('./pages/auth/signup/signup.component'),
      },
    ],
  },
  {
    path: '',
    title: 'FirstCliks',
    loadComponent: () => import('./pages/home/layout/layout.component'),
    children: [
      {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('./pages/home/index/index.component'),
      },
      {
        path: 'courses/:slug',
        title: 'detalles del curso',
        loadComponent: () => import('./pages/home/courses/courses.component'),
      },
      {
        path: 'courses',
        title: 'Explorar',
        loadComponent: () => import('./pages/home/courses/courses.component'),
      },
      
      {
        path: 'course',
        title: 'Perfil',
        loadComponent: () => import('./pages/home/course/course.component'),
      },
    ],
  },
];
