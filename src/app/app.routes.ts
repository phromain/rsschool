import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QcmComponent } from './page/qcm/qcm.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'qcm', component: QcmComponent },



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

