import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ContatosComponent } from '../contatos/contatos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    SobreMimComponent, 
    ProjetosComponent, 
    ContatosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
