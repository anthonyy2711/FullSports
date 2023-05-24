import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FixturesService } from 'src/app/services/fixtures.service';

@Component({
  selector: 'app-la-liga-games',
  templateUrl: './la-liga-games.component.html',
  styleUrls: ['./la-liga-games.component.css']
})
export class LaLigaGamesComponent implements OnInit{
  Fixtures:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;


  jornadaFilter: number = 34;

  jornadas: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];


  constructor(private FixtureService: FixturesService, private router: Router, private ngZone: NgZone){}

  ngOnInit(): void {
    this.listFixtures();
    this.actualizar();
  }


  listFixtures(){
    this.FixtureService.GetFixtures().subscribe(
      res => {
    
    console.log(res);
    
    this.Fixtures = Object.values(res);
    });
  }
  actualizar(){
    this.FixtureService.PutFixtures().subscribe(res => {
    
      console.log(res);

      setInterval(() => {
        this.FixtureService.PutFixtures(); 
      }, 60000);
  });
}
}
