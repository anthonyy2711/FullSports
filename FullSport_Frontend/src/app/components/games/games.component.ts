import { Component, NgZone ,OnInit } from '@angular/core';
import { FixturesService } from 'src/app/services/fixtures.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{

  Fixtures:any=[];
  itemsNumber = 1;

  logo:any;
  itemFormulario!:any;


  constructor(private fixtureService: FixturesService, private router: Router, private ngZone: NgZone){}

  ngOnInit(): void {
    this.listFixtures();
  }


  listFixtures(){
    this.fixtureService.GetFixtures().subscribe(
      res => {
    
    console.log(res);
    
    this.Fixtures = Object.values(res);
    });
  }
  actualizar(){
    this.fixtureService.PutFixtures().subscribe(res => {
    
      console.log(res);

      this.ngZone.run(() => this.router.navigate(['games']))
  });
}

}
