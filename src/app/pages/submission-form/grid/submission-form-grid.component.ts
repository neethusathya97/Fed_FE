import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionFormBaseComponent } from '../submission-form-base.component';
import { SubmissionFormModel } from '../../../model/submission-form/submission-form.model';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-submission-form-grid',
  templateUrl: './submission-form-grid.component.html',
  styleUrls: ['.././submission-form.component.css']
})

export class SubmissionFormGridComponent extends SubmissionFormBaseComponent implements OnInit, OnChanges {
    GridCheckAll = false;
    GridCheckAnItem = false;
    GridCheckItemCount = 0;
    @Input() notifyReloadRows: () => void;
    rows: SubmissionFormModel[];
    constructor(private snackBar: MatSnackBar, protected http: HttpClient,
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
    ) {
        super(http);
        this.rows = [];
        this.service.get().subscribe((x:SubmissionFormModel[]) => {
                this.rows = x;
        });
    }
    ngOnInit() {
        /*if (this.rows.length === 0) {
            this.newBoxVisibility = true;
        }

        if (this.newBoxVisibility === true) {
            this.loadRelationalDropDowns();
        }
        */

        //// region CustomCodeBlockngOnInit#

        //// endregion CustomCodeBlockngOnInit#
    }
    ngOnChanges() {
        this.service.get().subscribe((x:SubmissionFormModel[]) => {
                this.rows = x;
        });
    }
    gridCheckAll() {
        this.GridCheckItemCount = 0;
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].IsChecked = this.GridCheckAll;
            if (this.GridCheckAll) {
                this.GridCheckItemCount++;
            }
        }
        this.GridCheckAnItem = this.GridCheckAll;
    }
    checkAnItem() {
        this.GridCheckAnItem = false;
        let gridCheckAll = true;
        this.GridCheckItemCount = 0;
        for (let i = 0; i < this.rows.length; i++) {
            if (!this.rows[i].IsChecked) {
                gridCheckAll = false;
            } else {
                this.GridCheckItemCount++;
                this.GridCheckAnItem = true;
            }
        }
        this.GridCheckAll = gridCheckAll;
    }
    deleteSelectedItems() {
        this.GridCheckAnItem = false;
        this.GridCheckItemCount = 0;
        for (let i = 0; i < this.rows.length; i++) {
            if (this.rows[i].IsChecked) {
                const removeData = this.service.remove(this.rows[i].SubmissionId);
            }
        }
         this.service.get().subscribe((x:SubmissionFormModel[]) => {
                this.rows = x;
        });
        this.snackBar.open('Deleted', ' ', this.snackBarConfig);
    }
    editrow(item: SubmissionFormModel) {
        this.loadRelationalDropDowns();
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].IsEdit = false;
            this.rows[i].IsChanged = false;
        }
        item.IsEdit = true;
    }
    cancelrow(item: SubmissionFormModel) {
        item.IsEdit = false;
        item.IsChanged = false;
    }
    rowchanges(item: SubmissionFormModel) {
        item.IsChanged = true;
    }
    deleterow(item: SubmissionFormModel) {
      const removeData = this.service.remove(item.SubmissionId);
      this.service.get().subscribe((x) => {
                this.rows = x;
        });
      this.snackBar.open('Deleted', ' ', this.snackBarConfig);
    }
    saverow(item: SubmissionFormModel) {
        item.IsEdit = false;
        item.IsChanged = false;
        const savedData = this.service.set(item);
        this.service.get().subscribe((x) => {
                this.rows = x;
        });
        this.snackBar.open('Saved', ' ', this.snackBarConfig);
    }
}
