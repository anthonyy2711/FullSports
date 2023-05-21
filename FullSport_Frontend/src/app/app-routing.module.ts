import { AuthGuard } from './auth.guard';
import { SocialAddComponent } from './components/social-add/social-add.component';
import { SocialComponent } from './components/social/social.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { DashboardLaLigaCompetitionComponent } from './components/dashboard-la-liga-competition/dashboard-la-liga-competition.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewsdetailComponent } from './components/newsdetail/newsdetail.component';
import { PLgamesComponent } from './components/plgames/plgames.component';
import { PLStandingsComponent } from './components/plstandings/plstandings.component';
import { LaLigaStandingsComponent } from './components/la-liga-standings/la-liga-standings.component';
import { PLTopComponent } from './components/pltop/pltop.component';
import { LaLigaGamesComponent } from './components/la-liga-games/la-liga-games.component';
import { NewsaddComponent } from './components/newsadd/newsadd.component';

const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'games',
  component:GamesComponent
},
{
  path:'standings',
  component:CompetitionsComponent
},
{
  path:'LaLigaStandings',
  component:LaLigaStandingsComponent
},
{
  path:'LaLigaGames',
  component:LaLigaGamesComponent
},
{
  path:'social',
  component:SocialComponent
},
{
  path:'PLGames',
  component:PLgamesComponent
},
{
  path:'PLStandings',
  component:PLStandingsComponent
},
{
  path:'PLTop',
  component:PLTopComponent
},

{
  path:'social-add',
  component:SocialAddComponent,
  canActivate: [AuthGuard]
},
{
  path:'Laliga',
  component:DashboardLaLigaCompetitionComponent
},
{
  path:'newdetail/:id',
  component:NewsdetailComponent
},
{
  path:'newsadd',
  component:NewsaddComponent
},

{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
