import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit, AfterViewInit  {

  pais!: Country ; 
  nombrePais!: string;
  id!: string

  constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    // .pipe(
    //   switchMap(({id}) => this.paisService.getPaisPorAlpha(id))
    // )
    // .subscribe(pais => {this.pais = pais;
    //   console.log(this.pais);
    // })
    

    // this.activatedRoute.params
    // .subscribe( ({id}) =>{
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe(
    //     pais =>{
    //       console.log(pais);
    //     }
    //   )

    // } )


    this.activatedRoute.queryParams.subscribe(params =>{
      this.id = params['id'] || null;
      this.paisService.getPaisPorAlpha(this.id).subscribe(resp =>{
        this.pais = resp;
      })
    })
  }

  ngAfterViewInit() {

  }

}
