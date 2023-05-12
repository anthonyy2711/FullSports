import { Component, OnInit } from '@angular/core';
import { PLStandingsService } from 'src/app/services/plstandings.service';

@Component({
  selector: 'app-plstandings',
  templateUrl: './plstandings.component.html',
  styleUrls: ['./plstandings.component.css']
})
export class PLStandingsComponent implements OnInit{
  Competitions:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;




  constructor(private PLStandingsService: PLStandingsService){}

  ngOnInit(): void {
    this.listCompetitions();
  }


  listCompetitions(){
    this.PLStandingsService.GetCompetition().subscribe(res => {
    
    console.log(res);
    
    this.Competitions = Object.values(res);
    });
  } 

  actualizar(){
    this.PLStandingsService.PostCompetition().subscribe(res => {
    
      console.log(res);
      
      //this.Competitions = Object.values(res);
    });
  }
}
