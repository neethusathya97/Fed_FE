import { Injectable } from '@angular/core';

import { UserModel } from '../../model/user/user.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class SurNameModel {

         /// Gets or sets the title.
         Title: string;

         /// number
         /// Gets or sets the row order.
         RowOrder: number;

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
         /// Gets or sets the sur name id.
         SurNameId: number;
         clientSurNameId: number;

         /// Relational First field
         /// Gets or sets the list of sur name id.
         UserList: UserModel[];
         /// Relational First field
         /// Gets or sets the sur name id.
         /// [User][FullName][UId]
         UserModel: UserModel;

        IsDelete: boolean;
        IsChecked: boolean;
        IsEdit: boolean;
        IsChanged: boolean;
////region CustomCodeBlock4#

////endregion CustomCodeBlock4#
}
