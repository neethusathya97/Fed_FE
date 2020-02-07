import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusBaseComponent } from '../status-base.component';
import { StatusModel } from '../../../model/status/status.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['.././status.component.css']
})

export class StatusGridComponent extends StatusBaseComponent implements OnInit, OnChanges {
    GridCheckAll = false;
    GridCheckAnItem = false;
    GridCheckItemCount = 0;
    @Input() notifyReloadRows: () => void;
    rows: StatusModel[];
    constructor(private snackBar: MatSnackBar, protected http: HttpClient,
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
    ) {
        super(http);
        this.rows = [];
        this.service.get().subscribe((x) => {
                this.rows = x.results;
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
                this.rows = x.results;
        });
    }

}
