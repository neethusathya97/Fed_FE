import { Injectable } from '@angular/core';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class SubmissionFormModel {

         /// Gets or sets the period.
         Period: Date;
         /// Gets or sets the period string.
         PeriodString: string;

         /// number
         /// Gets or sets the bank code.
         BankCode: number;

         /// number
         /// Gets or sets the branch code.
         BranchCode: number;

         /// number
         /// Gets or sets the branch i f s c code.
         BranchIFSCCode: number;

         /// foreign field createdby
         CreatedBy: number;

         /// Gets or sets the created by full name.
         CreatedByFullName: string;

         /// Gets or sets the created date.
         CreatedDate: Date;
         /// Gets or sets the created date string.
         CreatedDateString: string;

         /// Gets or sets the modified date.
         ModifiedDate: Date;
         /// Gets or sets the modified date string.
         ModifiedDateString: string;

         /// primary field
         /// Gets or sets the submission id.
         SubmissionId: number;
         clientSubmissionId: number;

        IsDelete: boolean;
        IsChecked: boolean;
        IsEdit: boolean;
        IsChanged: boolean;
////region CustomCodeBlock4#

////endregion CustomCodeBlock4#
}
