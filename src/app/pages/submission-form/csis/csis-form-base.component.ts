import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { CsisModel } from '../../../model/csis/csis.model';
import { SubmissionFormService } from '../../../model/submission-form/submission-form.service'

@Component({
    selector: 'app-csis-form-base',
    template: ''
  })

  export class CSISBaseComponent {
    faPlus = faPlus;
    loadedRelationalDropDowns = false;
    snackBarConfig: any;
    service: SubmissionFormService;
    csislist: CsisModel[];
    
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
    // loadRelationalDropDowns() {
    //     if (!this.loadedRelationalDropDowns) {
    //             this.loadedRelationalDropDowns = true;
    //             this.schemeservice.get().subscribe((x) => {
    //                 this.schemelist = x.results;
    //             });
    //             this.statusservice.get().subscribe((x) => {
    //                 this.statuslist =x.results;
    //             });
    //     }
    // }
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
