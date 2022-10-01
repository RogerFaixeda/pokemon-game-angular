import { Component, Input, OnInit } from '@angular/core';
import {isMaterialExportDeclaration} from "@angular/material/schematics/ng-update/typescript/module-specifiers";

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
      /* width: 275px;
      height: 200px; */
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`
  ]
})
export class PokemonViewComponent implements OnInit {
   private a: number = 1;

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() adjust: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  dobleclick(id: any){
    let imatge = document.getElementById(id);

    if (this.a === 1){
      this.a = 0;
      //@ts-ignore
      imatge.style.width = 200+"px"
      //@ts-ignore
      imatge.style.height = 200+"px"
      //@ts-ignore
      imatge.style.backgroundColor="red"
    }else {
      //@ts-ignore
      imatge.style.width = 250+"px"
      //@ts-ignore
      imatge.style.height = 250+"px"
      //@ts-ignore
      imatge.style.backgroundColor=""
      this.a = 1;
    }
  }
}
