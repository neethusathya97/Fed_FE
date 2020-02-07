import { Injectable } from '@angular/core';

import { SchemeModel } from '../scheme/scheme.model';
import { StatusModel } from '../status/status.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
export class SettingModel {

         /// foreign field
         /// Gets or sets the list of title.
        SchemeList: SchemeModel[];

         /// Gets or sets the title.
         /// [SurName][Title][SurNameId]
         //SchemeId: number;

         /// Gets or sets the title title.
         //SchemeTitle: string;
         SchemeModel: SchemeModel;

         /// foreign field
         /// Gets or sets the list of status.
         StatusList: StatusModel[];

         /// Gets or sets the status.
         /// [Status][Title][STId]
         //Status: number;
         StatusModel: StatusModel;

         SchemeName: string;
         Status : string;
         /// Gets or sets the status title.
         //StatusTitle: string;
         /// foreign field createdby
         StartDate:Date;
         EndDate:Date;
         StartDateString: string;
         EndDateString: String;
         StartDateStr: string;
         EndDateStr: string;
         SettingId: number;
         /// Gets or sets the created date.
         //CreatedDate: Date;
         /// Gets or sets the created date string.
         //CreatedDateString: string;


        IsDelete: boolean;
        IsChecked: boolean;
        IsEdit: boolean;
        IsChanged: boolean;
////region CustomCodeBlock4#

////endregion CustomCodeBlock4#
}
