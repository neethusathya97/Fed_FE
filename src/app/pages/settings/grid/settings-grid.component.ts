import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SettingModel } from '../../../model/setting/setting.model';
import { SettingsBaseComponent } from '../settings-base.component';
import { ResponseModel } from '../../../model/response.model';

@Component({
  selector: 'app-settings-grid',
  templateUrl: './settings-grid.component.html'
})
export class SettingsGridComponent extends SettingsBaseComponent implements OnInit, OnChanges {
  GridCheckAll = false;
  GridCheckAnItem = false;
  GridCheckItemCount = 0;
  @Input() notifyReloadRows: () => void;
  rows: SettingModel[];
  constructor(private snackBar: MatSnackBar, protected http: HttpClient,) {
        super(http);
        this.rows = [];
        this.service.get().subscribe((x:SettingModel[]) => {
                this.rows = x;
        });
  }
  ngOnInit() {
  }
  ngOnChanges() {
    this.service.get().subscribe((x:SettingModel[]) => {
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
          const removeData = this.service.remove(this.rows[i].SettingId);
      }
  }
   this.service.get().subscribe((x:SettingModel[]) => {
     debugger;
          this.rows = x;
  });
  this.snackBar.open('Deleted', ' ', this.snackBarConfig);
}
editrow(item: SettingModel) {
  this.loadRelationalDropDowns();
  for (let i = 0; i < this.rows.length; i++) {
      this.rows[i].IsEdit = false;
      this.rows[i].IsChanged = false;
  }
  item.IsEdit = true;
}
cancelrow(item: SettingModel) {
  item.IsEdit = false;
  item.IsChanged = false;
}
rowchanges(item: SettingModel) {
  item.IsChanged = true;
}
deleterow(item: SettingModel) {
const removeData = this.service.remove(item.SettingId);
this.service.get().subscribe((x:SettingModel[]) => {
          this.rows = x;
  });
this.snackBar.open('Deleted', ' ', this.snackBarConfig);
}
saverow(item: SettingModel) {
  item.IsEdit = false;
  item.IsChanged = false;
  const savedData = this.service.set(item);
  this.service.get().subscribe((x:SettingModel[]) => {
          this.rows = x;
  });
  this.snackBar.open('Saved', ' ', this.snackBarConfig);
}
}
