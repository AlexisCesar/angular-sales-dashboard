import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDashboardComponent } from './modules/sales-dashboard/sales-dashboard.component';

const routes: Routes = [
  { path: 'dashboards/sales', component: SalesDashboardComponent },
  { path: '', redirectTo: 'dashboards/sales', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
