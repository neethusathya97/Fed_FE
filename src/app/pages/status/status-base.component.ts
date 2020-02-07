import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { StatusModel } from '../../model/status/status.model';
import { StatusService } from '../../model/status/status.service';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-status-base',
  template: ''
})

export class StatusBaseComponent {
    faPlus = faPlus;
    loadedRelationalDropDowns = false;
    snackBarConfig: any;
    service: StatusService;
    //// region CustomCodeBlockVariables#

    //// endregion CustomCodeBlockVariables#
    constructor(protected http: HttpClient,
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
    ) {
            this.snackBarConfig = {
                duration: 3000,
                verticalPosition: 'right',
                horizontalPosition: 'bottom',
                panelClass: 'success'
            };
            this.service = new StatusService(this.http);

    }
    loadRelationalDropDowns() {
        if (!this.loadedRelationalDropDowns) {
                this.loadedRelationalDropDowns = true;
        }
    }
    compareItems(a: any, b: any) {
        if (a) {
            a.Order = 0;
        }
        if (b) {
        b.Order = 0;
        }
        return a && b && JSON.stringify(a) === JSON.stringify(b);
    }

}
