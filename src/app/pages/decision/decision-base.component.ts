import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { DecisionModel } from '../../model/decision/decision.model';
import { DecisionService } from '../../model/decision/decision.service';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-decision-base',
  template: ''
})

export class DecisionBaseComponent {
    faPlus = faPlus;
    loadedRelationalDropDowns = false;
    snackBarConfig: any;
    service: DecisionService;
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
            this.service = new DecisionService(this.http);

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
