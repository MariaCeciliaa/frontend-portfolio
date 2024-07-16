import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.scss'
})
export class SobreMimComponent implements OnInit{
  fullText: string = 'Olá! Meu nome é Maria Cecilia :)';
  displayText: string = '';
  index: number = 0;
  speed: number = 50; 

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }
}
