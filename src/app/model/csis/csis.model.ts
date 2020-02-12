import { Injectable } from '@angular/core';


// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class CsisModel {
       
         PeriodStr: string;
         period: Date;
         BankCode:number;      
         BankCodeStr:String;       
         BranchCode: string; 
         BranchIFSCCode: string;
         LoanAccountnumber: string;
        
         /// foreign field createdby
         CreatedBy: number;

         /// Gets or sets the created date.
         CreatedDate: Date;
         /// Gets or sets the created date string.
         CreatedDateString: string;

         
         /// primary field
         /// Gets or sets the u id.
         CLAIM_Id: number;         

        IsDelete: boolean;
        IsChecked: boolean;
        IsEdit: boolean;
        IsChanged: boolean;
////region CustomCodeBlock4#

////endregion CustomCodeBlock4#
}