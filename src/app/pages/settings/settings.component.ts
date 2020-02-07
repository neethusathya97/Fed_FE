import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  formChangesCounter = 0;
  constructor(private snackBar: MatSnackBar,) { }

 ngOnInit() {
  }
  formChange(){
    this.formChangesCounter++;
}

}
