import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { UserModel } from '../user/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable: comment-format
////region CustomCodeBlockImport#

////endregion CustomCodeBlockImport#
@Injectable({
  providedIn: 'root'
})
export class UserService extends ServiceBase {
        getUrl = '/api/userjson/get/';
        setUrl = '/api/userjson/post/';
        deleteUrl = '/api/userjson/delete/';
        onChange: EventEmitter<UserModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<UserModel>();
        }

        get(model: UserModel = null): Observable<HttpResponse<UserModel[]>> {
            const rows = this.http.get<HttpResponse<UserModel[]>>(this.getUrl);
            return rows;
        }

        set(model: UserModel = null): Observable<HttpResponse<UserModel>> {
            return this.http.post<HttpResponse<UserModel>>(this.setUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.deleteUrl}/${id}`;
            return this.http.delete(this.deleteUrl);
        }

////region CustomCodeBlockFunctions#

////endregion CustomCodeBlockFunctions#
}
