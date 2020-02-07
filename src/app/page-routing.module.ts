import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//// region ModuleListImport#
import { UserComponent } from './pages/user/user.component';
import { SurNameComponent } from './pages/sur-name/sur-name.component';
import { SubmissionFormComponent } from './pages/submission-form/submission-form.component';
import { StatusComponent } from './pages/status/status.component';
import { DecisionComponent } from './pages/decision/decision.component';
import { SettingsComponent } from './pages/settings/settings.component';
//// endregion ModuleListImport#

const routes: Routes = [

    //// region ModuleListRoute#
    { path: 'user', component: UserComponent },
    { path: 'sur-name', component: SurNameComponent },
    { path: 'submission-form', component: SubmissionFormComponent },
    { path: 'status', component: StatusComponent },
    { path: 'decision', component: DecisionComponent },
    { path: 'settings', component: SettingsComponent },
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
