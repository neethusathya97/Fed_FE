import { Injectable } from '@angular/core';

import { SurNameModel } from '../../model/sur-name/sur-name.model';
import { StatusModel } from '../../model/status/status.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class UserModel {

         /// foreign field
         /// Gets or sets the list of title.
         TitleList: SurNameModel[];

         /// Gets or sets the title.
         /// [SurName][Title][SurNameId]
         Title: number;
         TitleModel: SurNameModel;

         /// Gets or sets the title title.
         TitleTitle: string;

         /// Gets or sets the full name.
         FullName: string;

         /// Gets or sets the email.
         Email: string;

         /// Gets or sets the mobile.
         Mobile: string;

         /// Gets or sets the dob.
         Dob: Date;
         /// Gets or sets the dob string.
         DobString: string;

         /// Gets or sets the password.
         Password: string;

         /// foreign field
         /// Gets or sets the list of status.
         StatusList: StatusModel[];

         /// Gets or sets the status.
         /// [Status][Title][STId]
         Status: number;
         StatusModel: StatusModel;

         /// Gets or sets the status title.
         StatusTitle: string;
         /// foreign field createdby
         CreatedBy: number;

         /// Gets or sets the created date.
         CreatedDate: Date;
         /// Gets or sets the created date string.
         CreatedDateString: string;

         /// Gets or sets the modified date.
         ModifiedDate: Date;
         /// Gets or sets the modified date string.
         ModifiedDateString: string;

         /// primary field
         /// Gets or sets the u id.
         UId: number;
         clientUId: number;

        IsDelete: boolean;
        IsChecked: boolean;
        IsEdit: boolean;
        IsChanged: boolean;
////region CustomCodeBlock4#

////endregion CustomCodeBlock4#
}
