import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
// // import { CounterComponent } from './counter/counter.component';
// // import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './page.module';
import { MatToolbarModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatTabsModule, MatSelectModule, MatCheckboxModule,
  MatCardModule, MatDividerModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSidenavModule, MatListModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { SchemedetailsComponent } from './schemedetails/schemedetails.component';
import { FormComponent } from './schemedetails/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SchemedetailsComponent,
    FormComponent,
    
  ],
  imports: [
    PageModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule ,
    MatRippleModule ,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDividerModule,
    FontAwesomeModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
