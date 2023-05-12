import { PLGamesService } from 'src/app/services/plgames.service';
import { Component, NgZone ,OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
