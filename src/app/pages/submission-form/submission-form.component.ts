import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionFormBaseComponent } from '../../pages/submission-form/submission-form-base.component';
import { CsisModel } from '../../model/csis/csis.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#



@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})

export class SubmissionFormComponent extends SubmissionFormBaseComponent implements OnInit {
 
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
    ngOnInit(){}
}
