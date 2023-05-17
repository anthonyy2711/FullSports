import { PLGamesService } from 'src/app/services/plgames.service';
import { Component, NgZone ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixture } from 'src/app/model/fixture';

@Component({
  selector: 'app-plgames',
  templateUrl: './plgames.component.html',
  styleUrls: ['./plgames.component.css']
})
export class PLgamesComponent implements OnInit{

  Fixtures:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;

  jornadaFiltrada!: Fixture[];

  events!:Fixture[];
  roundFilter!:number;

  jornadaFilter: number = 36;

  jornadas: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];


  constructor(private PLGamesService: PLGamesService, private router: Router, private ngZone: NgZone){}

  ngOnInit(): void {
    this.listFixtures();
  }


  listFixtures(){
    this.PLGamesService.GetFixtures().subscribe(
      res => {
    
    console.log(res);
    
    this.Fixtures = Object.values(res);
    });
  }
  actualizar(){
    this.PLGamesService.PutFixtures().subscribe(res => {
    
      console.log(res);

      this.ngZone.run(() => this.router.navigate(['games']))
  });
}




}
