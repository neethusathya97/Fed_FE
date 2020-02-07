import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SurNameBaseComponent } from '../sur-name-base.component';
import { SurNameModel } from '../../../model/sur-name/sur-name.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-sur-name-form',
  templateUrl: './sur-name-form.component.html',
  styleUrls: ['.././sur-name.component.css']
})

export class SurNameFormComponent extends SurNameBaseComponent implements OnInit {
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
    model: SurNameModel;
    ngOnInit() {
        this.model = new SurNameModel();
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
    insert(insertForm: NgForm, item: SurNameModel) {
        this.insertSubmitted = true;

        if (insertForm.invalid) {
            return;
        }

        const savedData = this.service.set(item);
        this.model = new SurNameModel();
        insertForm.resetForm();
        this.change.emit(this.model);
        this.snackBar.open('Added', ' ', this.snackBarConfig);
    }
}
