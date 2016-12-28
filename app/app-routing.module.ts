import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { RouteTable } from './config';

const routes: Routes = [
    { path: '', redirectTo: RouteTable.dashboard, pathMatch: 'full' },
    { path: RouteTable.login, component: LoginComponent },
    { path: RouteTable.dashboard, component: DashboardComponent, canActivate: [AuthService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
