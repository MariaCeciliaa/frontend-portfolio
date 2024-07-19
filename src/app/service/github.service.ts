import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username = 'MariaCeciliaa'; 
  private token = environment.token;
  private apiUrl = `https://api.github.com/users/${this.username}/repos`;

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token}`
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getRepoLanguages(repoName: string): Observable<any> {
    const url = `https://api.github.com/repos/${this.username}/${repoName}/languages`;
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token}`
    });

    return this.http.get<any>(url, { headers });
  }

  getReposWithLanguages(): Observable<any[]> {
    return this.getRepos().pipe(
      switchMap(repos => {
        const observables = repos.map(repo => 
          this.getRepoLanguages(repo.name).pipe(
            map(languages => ({ ...repo, languages }))
          )
        );
        return forkJoin(observables);
      })
    );
  }
}
