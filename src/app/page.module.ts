import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
//// region ModuleListImport#
import { UserComponent } from './pages/user/user.component';
import { UserBaseComponent } from './pages/user/user-base.component';
import { UserFormComponent } from './pages/user/form/user-form.component';
import { UserGridComponent } from './pages/user/grid/user-grid.component';
import { SurNameComponent } from './pages/sur-name/sur-name.component';
import { SurNameBaseComponent } from './pages/sur-name/sur-name-base.component';
import { SurNameFormComponent } from './pages/sur-name/form/sur-name-form.component';
import { SurNameGridComponent } from './pages/sur-name/grid/sur-name-grid.component';
import { SubmissionFormComponent } from './pages/submission-form/submission-form.component';
import { SubmissionFormBaseComponent } from './pages/submission-form/submission-form-base.component';
import { SubmissionFormFormComponent } from './pages/submission-form/form/submission-form-form.component';
import { SubmissionFormGridComponent } from './pages/submission-form/grid/submission-form-grid.component';
import { StatusComponent } from './pages/status/status.component';
import { StatusBaseComponent } from './pages/status/status-base.component';
import { StatusFormComponent } from './pages/status/form/status-form.component';
//import { StatusGridComponent } from './pages/status/grid/status-grid.component';
import { DecisionComponent } from './pages/decision/decision.component';
import { DecisionBaseComponent } from './pages/decision/decision-base.component';
import { DecisionFormComponent } from './pages/decision/form/decision-form.component';
import { DecisionGridComponent } from './pages/decision/grid/decision-grid.component';
import { SettingsComponent} from './pages/settings/settings.component';
import { SettingsFormComponent } from './pages/settings/form/settings-form.component';
import { SettingsGridComponent } from './pages/settings/grid/settings-grid.component';

//// endregion ModuleListImport#

import { MatToolbarModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatTabsModule, MatSelectModule, MatCheckboxModule,
  MatCardModule, MatDividerModule, MatBadgeModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule, MatListModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [ 
    HttpModule,
    HttpClientModule,
    BrowserModule,
    DragDropModule,
    PageRoutingModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatRippleModule ,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDividerModule,
    MatDatepickerModule,
  ],
  declarations: [
    //// region ModuleListDeclarations#
    UserComponent,
    UserFormComponent,
    UserGridComponent,
    UserBaseComponent,
    SurNameComponent,
    SurNameFormComponent,
    SurNameGridComponent,
    SurNameBaseComponent,
    SubmissionFormComponent,
    SubmissionFormFormComponent,
    SubmissionFormGridComponent,
    SubmissionFormBaseComponent,
    StatusComponent,
    StatusFormComponent,
    //StatusGridComponent,
    StatusBaseComponent,
    DecisionComponent,
    DecisionFormComponent,
    DecisionGridComponent,
    DecisionBaseComponent,
    SettingsComponent,
    SettingsGridComponent,
    SettingsFormComponent
    //// endregion ModuleListDeclarations#
  ],
  exports: [
     //// region ModuleListExports#
    UserComponent,
    UserFormComponent,
    UserGridComponent,
    UserBaseComponent,
    SurNameComponent,
    SurNameFormComponent,
    SurNameGridComponent,
    SurNameBaseComponent,
    SubmissionFormComponent,
    SubmissionFormFormComponent,
    SubmissionFormGridComponent,
    SubmissionFormBaseComponent,
    StatusComponent,
    StatusFormComponent,
    // StatusGridComponent,
    StatusBaseComponent,
    DecisionComponent,
    DecisionFormComponent,
    DecisionGridComponent,
    DecisionBaseComponent,
    SettingsComponent,
    SettingsFormComponent,
    SettingsGridComponent
    //// endregion ModuleListExports#
  ]
})
export class PageModule { }
