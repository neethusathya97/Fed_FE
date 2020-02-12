import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//// region ModuleListImport#
import { UserComponent } from './pages/user/user.component';
import { SurNameComponent } from './pages/sur-name/sur-name.component';
import { SubmissionFormComponent } from './pages/submission-form/submission-form.component';
import { StatusComponent } from './pages/status/status.component';
import { DecisionComponent } from './pages/decision/decision.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PadhoformComponent } from './pages/submission-form/padho/padho-form.component';
import { CsisformComponent } from './pages/submission-form/csis/csis-form.component';
import { EbcformComponent } from './pages/submission-form/ebc/ebc-form.component';
import { ObcformComponent} from  './pages/submission-form/obc/obc-form.component';

//// endregion ModuleListImport#

const routes: Routes = [

    //// region ModuleListRoute#
    { path: 'user', component: UserComponent },
    { path: 'sur-name', component: SurNameComponent },
    { path: 'submission-form', component: SubmissionFormComponent },
    { path: 'status', component: StatusComponent },
    { path: 'decision', component: DecisionComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'padho', component: PadhoformComponent } ,
    { path: 'csis', component: CsisformComponent } ,
    { path: 'ebc', component: EbcformComponent },    
    //// endregion ModuleListRoute#
    ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule {  }
