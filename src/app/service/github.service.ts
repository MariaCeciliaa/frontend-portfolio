import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username = 'MariaCeciliaa'; 

  constructor(private http: HttpClient) {}

  getRepos(): Observable<any[]> {
    const url = `https://backend-portfolio-frontend.onrender.com/api/github/repos?username=${this.username}`; 
    return this.http.get<any[]>(url);
  }
  
  getRepoLanguages(repoName: string): Observable<any> {
    const url = `https://backend-portfolio-frontend.onrender.com/api/github/repos/${repoName}/languages?username=${this.username}`; 
    return this.http.get<any>(url);
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
