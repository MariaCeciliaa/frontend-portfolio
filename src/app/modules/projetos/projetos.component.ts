import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GithubService } from '../../service/github.service';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjetosComponent implements OnInit{
  repos: any[] = [];

  customOptions: any = {
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true, 
    responsive: {
      0: {
        items: 1
      },
      610: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
  };

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getReposWithLanguages().subscribe(data => {
      this.repos = data;
    });
  }

  hasLanguages(repo: any): boolean {
    return repo.languages && Object.keys(repo.languages).length > 0;
  }
}
