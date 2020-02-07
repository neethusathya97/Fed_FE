import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusBaseComponent } from '../status-base.component';
import { StatusModel } from '../../../model/status/status.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['.././status.component.css']
})

export class StatusFormComponent extends StatusBaseComponent implements OnInit {
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
    model: StatusModel;
    ngOnInit() {
        this.model = new StatusModel();
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
    insert(insertForm: NgForm, item: StatusModel) {
        this.insertSubmitted = true;

        if (insertForm.invalid) {
            return;
        }

        const savedData = this.service.set(item);
        this.model = new StatusModel();
        insertForm.resetForm();
        this.change.emit(this.model);
        this.snackBar.open('Added', ' ', this.snackBarConfig);
    }
}
