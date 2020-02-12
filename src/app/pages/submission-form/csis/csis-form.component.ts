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
import {SubmissionFormService} from '../../../model/submission-form/submission-form.service';
import {SubmissionFormModel} from '../../../model/submission-form/submission-form.model';


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
        SubmissionForm: SubmissionFormModel;
      ngOnInit(){
        this.model = new CsisModel();
        this.model.BankCodeStr = "The Federal Bank";
        
        this.SubmissionForm = new SubmissionFormModel();
        this.SubmissionForm.csisModel = new CsisModel();
      }

      insert(insertForm: NgForm, item: CsisModel) {

        this.insertSubmitted = true;
    
        // // var dt = new Date(item.EndDateString);
        // // let datend = [dt.getFullYear(), ('0' + (dt.getMonth() + 1)).slice(-2), ('01').slice(-2)].join('-');
         
      
        this.SubmissionForm.csisModel =  item;
       debugger;
    
        if (insertForm.invalid) {
            return;
        }
    
        this.service.set(this.SubmissionForm).subscribe(x=>{
          this.model = new CsisModel();
          insertForm.resetForm();
          this.change.emit(this.model);
          this.snackBar.open('Added', ' ', this.snackBarConfig);
        });
    
    }

  }