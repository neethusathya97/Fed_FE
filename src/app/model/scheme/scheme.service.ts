import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { SchemeModel } from '../scheme/scheme.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../response.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class SchemeService extends ServiceBase {
         controllerUrl = '/api/Scheme/';
        // getUrl = '/api/SchemeJson/get/';
        // setUrl = '/api/SchemeJson/post/';
        // deleteUrl = '/api/SchemeJson/delete/';
        onChange: EventEmitter<SchemeModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<SchemeModel>();
        }

        get(model: SchemeModel = null): Observable<ResponseModel> {
          return this.http.get<ResponseModel>(this.apiPath+this.controllerUrl);

        }

        set(model: SchemeModel = null): Observable<SchemeModel> {
            return this.http.post<SchemeModel>(this.apiPath+this.controllerUrl, model);
        }
        // remove(id: number): Observable<{}> {
        //     const url = `${this.deleteUrl}/${id}`;
        //     return this.http.delete(this.deleteUrl);
        // }

////region CustomCodeBlockFunctions#
////endregion CustomCodeBlockFunctions#
}
