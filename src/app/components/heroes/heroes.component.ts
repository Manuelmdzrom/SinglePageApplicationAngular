import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesServices: HeroesService,
               private router: Router) {
    console.log(' Constructor ');
   }

  ngOnInit(): void {
    // console.log("ngOnInit");
    this.heroes = this.heroesServices.getHeroes();
    // console.log(this.heroes);
  }
  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate( [ '/heroe', idx ] ); 
  }
}
