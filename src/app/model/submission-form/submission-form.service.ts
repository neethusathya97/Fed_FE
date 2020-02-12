import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { SubmissionFormModel } from '../submission-form/submission-form.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../response.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class SubmissionFormService extends ServiceBase {
        controllerUrl   = '/api/Submission';
        onChange: EventEmitter<SubmissionFormModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<SubmissionFormModel>();
        }

        get(model: SubmissionFormModel = null): Observable<SubmissionFormModel[]> {
            const rows = this.http.get<SubmissionFormModel[]>(this.apiPath+this.controllerUrl);
            return rows;
        }

        set(model: SubmissionFormModel = null): Observable<SubmissionFormModel> {
            return this.http.post<SubmissionFormModel>(this.apiPath+this.controllerUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.apiPath+this.controllerUrl}/${id}`;
            return this.http.delete(this.apiPath+this.controllerUrl);
        }

////region CustomCodeBlockFunctions#

////endregion CustomCodeBlockFunctions#
}
