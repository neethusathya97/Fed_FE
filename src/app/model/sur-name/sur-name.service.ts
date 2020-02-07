import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { SurNameModel } from '../sur-name/sur-name.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class SurNameService extends ServiceBase {
        getUrl = '/api/surnamejson/get/';
        setUrl = '/api/surnamejson/post/';
        deleteUrl = '/api/surnamejson/delete/';
        onChange: EventEmitter<SurNameModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<SurNameModel>();
        }

        get(model: SurNameModel = null): Observable<HttpResponse<SurNameModel[]>> {
            const rows = this.http.get<HttpResponse<SurNameModel[]>>(this.getUrl);
            return rows;
        }

        set(model: SurNameModel = null): Observable<HttpResponse<SurNameModel>> {
            return this.http.post<HttpResponse<SurNameModel>>(this.setUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.deleteUrl}/${id}`;
            return this.http.delete(this.deleteUrl);
        }

////region CustomCodeBlockFunctions#

////endregion CustomCodeBlockFunctions#
}
