import { Injectable, EventEmitter, Injector } from '@angular/core';
import { ServiceBase } from '../service.base';
import { SettingModel } from '../setting/setting.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../response.model';

@Injectable({
  providedIn: 'root'
})
export class SettingService extends ServiceBase {
  controllerUrl  = '/api/Setting/';

        onChange: EventEmitter<SettingModel>;
        constructor(protected http: HttpClient) {
            super();
            this.onChange = new EventEmitter<SettingModel>();
        }

        get(model: SettingModel = null): Observable<SettingModel[]> {
            const rows = this.http.get<SettingModel[]>(this.apiPath+this.controllerUrl);
            return rows;
        }

        set(model: SettingModel = null): Observable<SettingModel> {
            return this.http.post<SettingModel>(this.apiPath+this.controllerUrl, model);
        }
        remove(id: number): Observable<{}> {
            const url = `${this.apiPath+this.controllerUrl}/${id}`;
            return this.http.delete(this.apiPath+this.controllerUrl);
        }
}
