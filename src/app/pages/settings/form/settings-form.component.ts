import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsBaseComponent } from '../settings-base.component';
import { SettingModel } from '../../../model/setting/setting.model';
import { SchemeModel   } from '../../../model/scheme/scheme.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// // import { DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
// // import { AppDateAdapter, APP_DATE_FORMATS } from '../../../format-datepicker';

export interface Scheme{
  value: string;
  viewValue:string;
}
export interface Status{
  value: string;
  viewValue:string;
}
@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html'
  // providers: [
  //   {provide: DateAdapter, useClass: AppDateAdapter},
  //   {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  // ]
})

export class SettingsFormComponent extends SettingsBaseComponent  implements OnInit {
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
  model: SettingModel;
  // onChange(val) {
  //   var d = new Date(val);
  //   let date = [d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('01').slice(-2)].join('-');
  //   console.log(date);
  //     }
  ngOnInit() {
    this.model = new SettingModel();
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
insert(insertForm: NgForm, item: SettingModel) {

    this.insertSubmitted = true;

    // // var dt = new Date(item.EndDateString);
    // // let datend = [dt.getFullYear(), ('0' + (dt.getMonth() + 1)).slice(-2), ('01').slice(-2)].join('-');

    debugger;
    var d = new Date(item.StartDateStr);
    var dt = new Date(item.EndDateStr);
    let date = [('0' + (d.getMonth() + 1)).slice(-2),('0' + (d.getDay())).slice(-1), d.getFullYear()].join('/');
    let dateEnd = [('0' + (dt.getMonth() + 1)).slice(-2),('0' + (d.getDay())).slice(-1), dt.getFullYear()].join('/');


    item.StartDateString = date;
    item.EndDateString = dateEnd;

    if (insertForm.invalid) {
        return;
    }

    this.service.set(item).subscribe(x=>{
      this.model = new SettingModel();
      insertForm.resetForm();
      this.change.emit(this.model);
      this.snackBar.open('Added', ' ', this.snackBarConfig);
    });

}



}
