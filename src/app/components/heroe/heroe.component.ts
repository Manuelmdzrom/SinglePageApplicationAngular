import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService) {

    this.activatedRoute.params.subscribe (params => {
      // console.log(params['id']);
      this.heroe = this.heroeService.getHeroe( params['id'] );
      console.log(this.heroe);
    })

   }

}
