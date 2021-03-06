import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Severity } from './../../models/severity.model';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SeverityService {
  private serviceUrl = 'https://amdocslogfiles.herokuapp.com/SeverityPercent';
  public serviceUrlCust = '';
  constructor(private http: HttpClient) { }

  getSeverity(): Observable<Severity[]> {
    return this.http.get<Severity[]>(this.serviceUrl + this.serviceUrlCust);
  }

  setServiceUrlCust(urlCost: string) {
    // this.serviceUrlCust = urlCost;
    this.serviceUrl = urlCost;
  }

}
