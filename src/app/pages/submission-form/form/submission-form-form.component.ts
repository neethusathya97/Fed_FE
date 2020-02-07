import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionFormBaseComponent } from '../submission-form-base.component';
import { SubmissionFormModel } from '../../../model/submission-form/submission-form.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-submission-form-form',
  templateUrl: './submission-form-form.component.html',
  styleUrls: ['.././submission-form.component.css']
})

export class SubmissionFormFormComponent extends SubmissionFormBaseComponent implements OnInit {
    faPlus = faPlus;
    insertSubmitted = false;
    newBoxVisibility = false;
    @Output() change = new EventEmitter();
    constructor(private snackBar: MatSnackBar, protected http: HttpClient,
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
    ) {
        super(http);
    }
    model: SubmissionFormModel;
    ngOnInit() {
        this.model = new SubmissionFormModel();
        /*if (this.rows.length === 0) {
            this.newBoxVisibility = true;
        }

        if (this.newBoxVisibility === true) {
            this.loadRelationalDropDowns();
        }
        */
        this.loadRelationalDropDowns();
        //// region CustomCodeBlockngOnInit#

        //// endregion CustomCodeBlockngOnInit#
    }
    toggleNewBox() {
        this.newBoxVisibility = !this.newBoxVisibility;
        this.loadRelationalDropDowns();
    }
    insert(insertForm: NgForm, item: SubmissionFormModel) {
        this.insertSubmitted = true;

        if (insertForm.invalid) {
            return;
        }

        const savedData = this.service.set(item);
        this.model = new SubmissionFormModel();
        insertForm.resetForm();
        this.change.emit(this.model);
        this.snackBar.open('Added', ' ', this.snackBarConfig);
    }
}
