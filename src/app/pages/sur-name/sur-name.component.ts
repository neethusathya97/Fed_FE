import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-sur-name',
  templateUrl: './sur-name.component.html',
  styleUrls: ['./sur-name.component.css']
})

export class SurNameComponent {
    formChangesCounter = 0;
    constructor(private snackBar: MatSnackBar, 
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
    ) {
    }

    formChange(){
        this.formChangesCounter++;
    }
}
