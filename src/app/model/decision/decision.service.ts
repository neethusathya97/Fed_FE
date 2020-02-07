import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { DecisionModel } from '../decision/decision.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class DecisionService extends ServiceBase {
        getUrl = '/api/decisionjson/get/';
        setUrl = '/api/decisionjson/post/';
        deleteUrl = '/api/decisionjson/delete/';
        onChange: EventEmitter<DecisionModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<DecisionModel>();
        }

        get(model: DecisionModel = null): Observable<HttpResponse<DecisionModel[]>> {
            const rows = this.http.get<HttpResponse<DecisionModel[]>>(this.apiPath+this.getUrl);
            return rows;
        }

        set(model: DecisionModel = null): Observable<HttpResponse<DecisionModel>> {
            return this.http.post<HttpResponse<DecisionModel>>(this.apiPath+this.setUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.apiPath+this.deleteUrl}/${id}`;
            return this.http.delete(this.deleteUrl);
        }

////region CustomCodeBlockFunctions#

////endregion CustomCodeBlockFunctions#
}
