import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../model/user/user.model';
import { UserService } from '../../model/user/user.service';
import { SurNameModel } from '../../model/sur-name/sur-name.model';
import { SurNameService } from '../../model/sur-name/sur-name.service';
import { StatusModel } from '../../model/status/status.model';
import { StatusService } from '../../model/status/status.service';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-user-base',
  template: ''
})

export class UserBaseComponent {
    faPlus = faPlus;
    loadedRelationalDropDowns = false;
    snackBarConfig: any;
    service: UserService;
    surnamelist: SurNameModel[];
    statuslist: StatusModel[];
    surnameservice: SurNameService;
    statusservice: StatusService;
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
            this.service = new UserService(this.http);
            this.surnameservice = new SurNameService(this.http);
            this.statusservice = new StatusService(this.http);

    }
    loadRelationalDropDowns() {
        if (!this.loadedRelationalDropDowns) {
                this.loadedRelationalDropDowns = true;
                this.surnameservice.get().subscribe((x) => {
                    this.surnamelist = x.body;
                });
                this.statusservice.get().subscribe((x) => {
                    this.statuslist = x.results;
                });
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
