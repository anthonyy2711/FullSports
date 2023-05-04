import { Component, NgZone ,OnInit } from '@angular/core';
import { FixturesService } from 'src/app/services/fixtures.service';
import { Router } from '@angular/router';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-dashboard-la-liga-competition',
  templateUrl: './dashboard-la-liga-competition.component.html',
  styleUrls: ['./dashboard-la-liga-competition.component.css'],
  template:`
  <nav>
    <a routerLink="/games" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
    <a routerLink="/standings" routerLinkActive="active">About</a>
  </nav>
`,
})
export class DashboardLaLigaCompetitionComponent {

  defaultRoute = '/games';
  constructor(private router: Router){}

}

