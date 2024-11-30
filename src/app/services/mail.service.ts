// form.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = 'https://bitgenios-node.onrender.com/send-email'; // URL del backend

  constructor(private http: HttpClient) { }

  sendEmail(formData:any): Observable<any> {
    console.log(formData)
    return this.http.post(this.apiUrl, formData);
  }
}
