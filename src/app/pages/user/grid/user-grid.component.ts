import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserBaseComponent } from '../user-base.component';
import { UserModel } from '../../../model/user/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['.././user.component.css']
})

export class UserGridComponent extends UserBaseComponent implements OnInit, OnChanges {
    GridCheckAll = false;
    GridCheckAnItem = false;
    GridCheckItemCount = 0;
    @Input() notifyReloadRows: () => void;
    rows: UserModel[];
    constructor(private snackBar: MatSnackBar, protected http: HttpClient,
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
    ) {
        super(http);
        this.rows = [];
        this.service.get().subscribe((x) => {
                this.rows = x.body;
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
        this.service.get().subscribe((x) => {
                this.rows = x.body;
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
                const removeData = this.service.remove(this.rows[i].UId);
            }
        }
         this.service.get().subscribe((x) => {
                this.rows = x.body;
        });
        this.snackBar.open('Deleted', ' ', this.snackBarConfig);
    }
    editrow(item: UserModel) {
        this.loadRelationalDropDowns();
        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].IsEdit = false;
            this.rows[i].IsChanged = false;
        }
        item.IsEdit = true;
    }
    cancelrow(item: UserModel) {
        item.IsEdit = false;
        item.IsChanged = false;
    }
    rowchanges(item: UserModel) {
        item.IsChanged = true;
    }
    deleterow(item: UserModel) {
      const removeData = this.service.remove(item.UId);
      this.service.get().subscribe((x) => {
                this.rows = x.body;
        });
      this.snackBar.open('Deleted', ' ', this.snackBarConfig);
    }
    saverow(item: UserModel) {
        item.IsEdit = false;
        item.IsChanged = false;
        const savedData = this.service.set(item);
        this.service.get().subscribe((x) => {
                this.rows = x.body;
        });
        this.snackBar.open('Saved', ' ', this.snackBarConfig);
    }
}
