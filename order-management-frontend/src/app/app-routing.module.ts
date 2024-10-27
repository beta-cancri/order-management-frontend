import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: 'orders', loadChildren: () => import('./features/orders/order.module').then(m => m.OrdersModule) },
  { path: 'products', loadChildren: () => import('./features/products/product.module').then(m => m.ProductsModule) },
  { path: 'customers', loadChildren: () => import('./features/customers/customer.module').then(m => m.CustomersModule) },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)], // Use APP_ROUTES here
  exports: [RouterModule]
})
export class AppRoutingModule { }
