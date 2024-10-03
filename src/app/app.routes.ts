import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QcmComponent } from './page/qcm/qcm.component';
import { QcmSocialComponent } from './components/form/qcm-social/qcm-social.component';
import { QcmEnviComponent } from './components/form/qcm-envi/qcm-envi.component';
import { QcmEcoComponent } from './components/form/qcm-eco/qcm-eco.component';
import { QcmLocalComponent } from './components/form/qcm-local/qcm-local.component';
import { QcmGouvComponent } from './components/form/qcm-gouv/qcm-gouv.component';

export const routes: Routes = [

    {path:'',component: HomeComponent},
    {path:'qcm',component: QcmComponent},
    {path:'qcm-social',component: QcmSocialComponent},
    {path:'qcm-env',component: QcmEnviComponent},
    {path:'qcm-eco',component: QcmEcoComponent},
    {path:'qcm-local',component: QcmLocalComponent},
    {path:'qcm-gouv',component: QcmGouvComponent},


]
