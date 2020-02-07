import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecisionBaseComponent } from '../decision-base.component';
import { DecisionModel } from '../../../model/decision/decision.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-decision-form',
  templateUrl: './decision-form.component.html',
  styleUrls: ['.././decision.component.css']
})

export class DecisionFormComponent extends DecisionBaseComponent implements OnInit {
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
    model: DecisionModel;
    ngOnInit() {
        this.model = new DecisionModel();
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
    insert(insertForm: NgForm, item: DecisionModel) {
        this.insertSubmitted = true;

        if (insertForm.invalid) {
            return;
        }

        const savedData = this.service.set(item);
        this.model = new DecisionModel();
        insertForm.resetForm();
        this.change.emit(this.model);
        this.snackBar.open('Added', ' ', this.snackBarConfig);
    }
}
