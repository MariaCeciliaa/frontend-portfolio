import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../service/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent implements OnInit{
  repos: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((data: any[]) => {
      this.repos = data;
    }, (error) => {
      console.error('Erro ao obter repositórios', error);
    });
  }
}
