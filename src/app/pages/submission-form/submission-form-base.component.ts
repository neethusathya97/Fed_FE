import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { SubmissionFormModel } from '../../model/submission-form/submission-form.model';
import { SubmissionFormService } from '../../model/submission-form/submission-form.service';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-submission-form-base',
  template: ''
})

export class SubmissionFormBaseComponent {
    faPlus = faPlus;
    loadedRelationalDropDowns = false;
    snackBarConfig: any;
    service: SubmissionFormService;
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
            this.service = new SubmissionFormService(this.http);

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
