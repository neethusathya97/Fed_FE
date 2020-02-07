import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserBaseComponent } from '../user-base.component';
import { UserModel } from '../../../model/user/user.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['.././user.component.css']
})

export class UserFormComponent extends UserBaseComponent implements OnInit {
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
    model: UserModel;
    ngOnInit() {
        this.model = new UserModel();
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
    insert(insertForm: NgForm, item: UserModel) {
        this.insertSubmitted = true;

        if (insertForm.invalid) {
            return;
        }

        const savedData = this.service.set(item);
        this.model = new UserModel();
        insertForm.resetForm();
        this.change.emit(this.model);
        this.snackBar.open('Added', ' ', this.snackBarConfig);
    }
}
