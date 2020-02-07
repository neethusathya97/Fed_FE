import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { SettingModel } from '../../model/Setting/setting.model';
import { SettingService } from '../../model/setting/setting.service';
import { SchemeModel } from '../../model/scheme/scheme.model';
import { SchemeService } from '../../model/scheme/scheme.service';
import { StatusModel } from '../../model/status/status.model';
import { StatusService } from '../../model/status/status.service';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-settings-base',
  template: ''
})

export class SettingsBaseComponent {
    faPlus = faPlus;
    loadedRelationalDropDowns = false;
    snackBarConfig: any;
    service: SettingService;
    schemelist: SchemeModel[];
    statuslist: StatusModel[];
    schemeservice: SchemeService;
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
            this.service = new SettingService(this.http);
            this.schemeservice = new SchemeService(this.http);
            this.statusservice = new StatusService(this.http);

    }
    loadRelationalDropDowns() {
        if (!this.loadedRelationalDropDowns) {
                this.loadedRelationalDropDowns = true;
                this.schemeservice.get().subscribe((x) => {
                    this.schemelist = x.results;
                });
                this.statusservice.get().subscribe((x) => {
                    this.statuslist =x.results;
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
