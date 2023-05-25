import { Component } from '@angular/core';
import { SpanishTeamsService } from 'src/app/services/spanish-teams.service';

@Component({
  selector: 'app-spanish-teams',
  templateUrl: './spanish-teams.component.html',
  styleUrls: ['./spanish-teams.component.css']
})
export class SpanishTeamsComponent {
  Teams:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;




  constructor(private spanishTeamsService: SpanishTeamsService){}

  ngOnInit(): void {
    this.listTeams();
  }


  listTeams(){
    this.spanishTeamsService.GetTeams().subscribe(res => {
    
    console.log(res);
    
    this.Teams = Object.values(res);
    });
  } 
}
