import { Component, NgZone ,OnInit } from '@angular/core';
import { FixturesService } from 'src/app/services/fixtures.service';
import { Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-la-liga-standings',
  templateUrl: './la-liga-standings.component.html',
  styleUrls: ['./la-liga-standings.component.css']
})
export class LaLigaStandingsComponent {


  Competitions:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;


  constructor(private CompetitionsService: CompetitionsService){}

  ngOnInit(): void {
    this.listCompetitions();
  }


  listCompetitions(){
    this.CompetitionsService.GetCompetition().subscribe(res => {
    
    console.log(res);
    
    this.Competitions = Object.values(res);
    });
  } 

  actualizar(){
    this.CompetitionsService.PostCompetition().subscribe(res => {
    
      console.log(res);
      
      //this.Competitions = Object.values(res);
    });
  }

}
