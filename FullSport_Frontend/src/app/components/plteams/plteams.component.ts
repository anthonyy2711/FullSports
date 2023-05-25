import { Component } from '@angular/core';
import { PLTeamsService } from 'src/app/services/plteams.service';

@Component({
  selector: 'app-plteams',
  templateUrl: './plteams.component.html',
  styleUrls: ['./plteams.component.css']
})
export class PLTeamsComponent {

  Teams:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;




  constructor(private PLTeamsService: PLTeamsService){}

  ngOnInit(): void {
    this.listTeams();
  }


  listTeams(){
    this.PLTeamsService.GetTeams().subscribe(res => {
    
    console.log(res);
    
    this.Teams = Object.values(res);
    });
  } 
}
