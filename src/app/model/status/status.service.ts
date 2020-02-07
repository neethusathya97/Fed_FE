import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { StatusModel } from '../status/status.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../response.model';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class StatusService extends ServiceBase {
      controllerUrl = '/api/Status/';

        onChange: EventEmitter<StatusModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<StatusModel>();
        }

        get(model: StatusModel = null): Observable<ResponseModel> {

            return this.http.get<ResponseModel>(this.apiPath+this.controllerUrl);
        }

        set(model: StatusModel = null): Observable<StatusModel> {
            return this.http.post<StatusModel>(this.apiPath+this.controllerUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.apiPath+this.controllerUrl}/${id}`;
            return this.http.delete(this.apiPath+this.controllerUrl);
        }

////region CustomCodeBlockFunctions#

////endregion CustomCodeBlockFunctions#
}
