import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit{

  Competitions:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;


  constructor(private competitionsService: CompetitionsService){}

  ngOnInit(): void {
    this.listCompetitions();
  }


  listCompetitions(){
    this.competitionsService.GetCompetition().subscribe(res => {
    
    console.log(res);
    
    this.Competitions = Object.values(res);
    });
  }

  actualizar(){
    this.competitionsService.PostCompetition().subscribe(res => {
    
      console.log(res);
      
      //this.Competitions = Object.values(res);
    });
  }
}

