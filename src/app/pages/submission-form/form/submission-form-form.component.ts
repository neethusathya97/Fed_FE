import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionFormBaseComponent } from '../submission-form-base.component';
import { SubmissionFormModel } from '../../../model/submission-form/submission-form.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { ObcformComponent} from  '../obc/obc-form.component';
import { EbcformComponent} from '../ebc/ebc-form.component';
import { CsisformComponent} from '../csis/csis-form.component';
import { PadhoformComponent} from '../padho/padho-form.component';

//  /submission-form/form/obc-form.component';

interface schemeitem{
    value:string;
    viewValue:string;
}
//// region CustomCodeBlockImport#

//// endregion CustomCodeBlockImport#

@Component({
  selector: 'app-submission-form-form',
  templateUrl: './submission-form-form.component.html',
  styleUrls: ['.././submission-form.component.css']
})


export class SubmissionFormFormComponent extends SubmissionFormBaseComponent implements OnInit {
   
    faPlus = faPlus;
    insertSubmitted = false;
    newBoxVisibility = false;
    newSchemeVisibility = false;
    @Output() change = new EventEmitter();

    selectedItem:string=" ";
    schemelist:schemeitem[]=[
        {value:'0',viewValue:'OBC'},
        {value:'1',viewValue:'EBC'},
        {value:'2',viewValue:'CSIS'},
        {value:'3',viewValue:'PP'}
    ];
    onChange (newValue){
        console.log(newValue);
        this.selectedItem=newValue;
        debugger;
        if (parseInt(newValue) >= 0)
        {
            this.newSchemeVisibility = true;
        }
        else 
        this.newSchemeVisibility = false;
        // if(this.selectedItem =='0')
        //  {
        //      this.router    .navigate(['/obc']);
        //  }
        //  else if (this.selectedItem =='1')
        //  {
        //      this.router.navigate(['ebc']);
        // }
        // else if (this.selectedItem =='2')
        // {
        //     this.router.navigate(['csis']);
        // }
        // else if (this.selectedItem =='3')
        // {
        //     this.router.navigate(['padho']);
        // }
    }

    constructor(private snackBar: MatSnackBar, protected http: HttpClient,private router:Router)
    //// region CustomCodeBlockConstructorItems#

    //// endregion CustomCodeBlockConstructorItems#
     {
        super(http);
    }
    
    model: SubmissionFormModel;
    ngOnInit() {
        this.model = new SubmissionFormModel();
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
    insert(insertForm: NgForm, item: SubmissionFormModel) {
        this.insertSubmitted = true;

        if (insertForm.invalid) {
            return;
        }

       const savedData = this.service.set(item);
        //this.model = new SubmissionFormModel();
        insertForm.resetForm();
       // this.change.emit(this.model);
       this.snackBar.open('Added', ' ', this.snackBarConfig);
    }

}