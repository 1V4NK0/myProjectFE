import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'quote-img',
    loadComponent: () => import('./quote-img/quote-img.page').then( m => m.QuoteImgPage)
  },
  {
    path: 'random-quote',
    loadComponent: () => import('./random-quote/random-quote.page').then( m => m.RandomQuotePage)
  },
  {
    path: 'quote-of-the-day',
    loadComponent: () => import('./quote-of-the-day/quote-of-the-day.page').then( m => m.QuoteOfTheDayPage)
  },
  {
    path: 'diary',
    loadComponent: () => import('./diary/diary.page').then( m => m.DiaryPage)
  },
];
