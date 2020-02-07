import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { SubmissionFormModel } from '../submission-form/submission-form.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class SubmissionFormService extends ServiceBase {
        getUrl = '/api/submissionformjson/get/';
        setUrl = '/api/submissionformjson/post/';
        deleteUrl = '/api/submissionformjson/delete/';
        onChange: EventEmitter<SubmissionFormModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<SubmissionFormModel>();
        }

        get(model: SubmissionFormModel = null): Observable<HttpResponse<SubmissionFormModel[]>> {
            const rows = this.http.get<HttpResponse<SubmissionFormModel[]>>(this.getUrl);
            return rows;
        }

        set(model: SubmissionFormModel = null): Observable<HttpResponse<SubmissionFormModel>> {
            return this.http.post<HttpResponse<SubmissionFormModel>>(this.setUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.deleteUrl}/${id}`;
            return this.http.delete(this.deleteUrl);
        }

////region CustomCodeBlockFunctions#

////endregion CustomCodeBlockFunctions#
}
