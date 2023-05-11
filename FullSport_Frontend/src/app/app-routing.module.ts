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
  path:'social',
  component:SocialComponent
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
