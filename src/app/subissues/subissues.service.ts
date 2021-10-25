import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubissuesModel } from './subissues-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubissuesService {
  constructor(private http: HttpClient) { }

  getAllSubissuess(): Observable<Array<SubissuesModel>> {
    return this.http.get<Array<SubissuesModel>>('http://localhost:8080/api/subissues');
  }

  createSubissues(subissuesModel: SubissuesModel): Observable<SubissuesModel> {
    return this.http.post<SubissuesModel>('http://localhost:8080/api/subissues',
      subissuesModel);
  }
}
