import { CursosService } from './../core/cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos: any[] = [];

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}