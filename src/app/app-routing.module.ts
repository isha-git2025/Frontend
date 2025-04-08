// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { LoginComponent } from './admin/login/login.component';
// import { RegisterComponent } from './admin/register/register.component';

// const routes: Routes = [
//   { path: '', component: DashboardComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },

//   {
//     path: 'admin',
//     loadChildren: () =>
//       import('./admin/admin.module').then((m) => m.AdminModule),
//   },
//   {
//     path: 'products',
//     loadChildren: () =>
//       import('./products/products.module').then((m) => m.ProductsModule),
//   },
//   {
//     path: 'cards',
//     loadChildren: () =>
//       import('./cards/cards.module').then((m) => m.CardsModule),
//   },
//   {
//     path: 'transactions',
//     loadChildren: () =>
//       import('./transactions/transactions.module').then((m) => m.TransactionsModule),
//   },
//   { path: '**', redirectTo: '', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./transactions/transactions.module').then((m) => m.TransactionsModule),
  },
  { path: '**', redirectTo: 'admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
