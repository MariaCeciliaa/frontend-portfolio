import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username = 'MariaCeciliaa'; 
  private token = 'aaaaaaaaaaa'; //expira dia 01/07/2025
  private apiUrl = `https://api.github.com/users/${this.username}/repos`;

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token}`
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
