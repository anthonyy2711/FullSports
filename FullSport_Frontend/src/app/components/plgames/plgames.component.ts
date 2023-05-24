import { PLGamesService } from 'src/app/services/plgames.service';
import { Component, NgZone ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixture } from 'src/app/model/fixture';
import { PLGames } from 'src/app/model/PLGames';

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

  jornadaFilter: any = 37;

  jornadas: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];

  matchday!:any;

  constructor(private PLGamesService: PLGamesService, private router: Router, private ngZone: NgZone){}

  ngOnInit(): void {
    this.listFixtures();
    this.actualizar();
    // this.listCurrentMatchday();
    // this.jornadaFilter=this.listCurrentMatchday();
    // console.log(this.matchday);
    
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

      setInterval(() => {
        this.PLGamesService.PutFixtures(); 
      }, 60000);
  });
}

listCurrentMatchday(){
  this.PLGamesService.GetFixtures().subscribe(
    res => {
  
  console.log(res);
  
  this.matchday = JSON.stringify(res.currentMatchday);
  return this.matchday;
  });
}





}
