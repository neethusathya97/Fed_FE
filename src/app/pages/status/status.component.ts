import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent {
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
