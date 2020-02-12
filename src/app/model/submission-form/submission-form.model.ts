import { Injectable } from '@angular/core';
import {CsisModel} from '../csis/csis.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class SubmissionFormModel {

         /// Gets or sets the period.
         /// Gets or sets the period string.

         /// number
         /// Gets or sets the bank code.
         schemeType:String;
         csisModel:CsisModel;


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
