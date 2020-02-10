import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionFormBaseComponent } from '../Submission-form-base.component';
import { CsisModel } from '../../../model/csis/csis.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubmissionFormFormComponent } from '../form/submission-form-form.component';
import { CSISBaseComponent } from '../csis/csis-form-base.component';
import { InputRestrictionDirective } from '../../../input-restriction.directive';

@Component({
    selector: 'app-csis-form',
    templateUrl: './csis-form.component.html',
  })
  
  export class CsisformComponent extends CSISBaseComponent implements OnInit {
    faPlus = faPlus;
    insertSubmitted = false;
    @Output() change = new EventEmitter();
   
    constructor(private snackBar: MatSnackBar, protected http: HttpClient,
        //// region CustomCodeBlockConstructorItems#
      
        //// endregion CustomCodeBlockConstructorItems#
        ) {
            super(http);
        }
        model: CsisModel;
      ngOnInit(){
        this.model = new CsisModel();
        this.model.BankCodeStr = "The Federal Bank";
      }
  }