import { Injectable } from '@angular/core';

import { SettingModel } from '../../model/setting/setting.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class StatusModel {

         /// Gets or sets the title.
         Status: string;

         /// number
         /// Gets or sets the row order.
         RowOrder: number;

         /// primary field
         /// Gets or sets the s t id.
         StatusId: number;      

         /// Relational First field
         /// Gets or sets the list of s t id.
         SettingList: SettingModel[];
         /// Relational First field
         /// Gets or sets the s t id.
         /// [User][FullName][UId]
         SettingModel: SettingModel;
        
////region CustomCodeBlock4#

////endregion CustomCodeBlock4#
}
