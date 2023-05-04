import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GamesComponent } from './components/games/games.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparePasswordsDirective } from './directives/compare-passwords.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompetitionsComponent } from './components/competitions/competitions.component';
<<<<<<< HEAD
import { SocialComponent } from './components/social/social.component';
import { SocialAddComponent } from './components/social-add/social-add.component';
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardLaLigaCompetitionComponent } from './components/dashboard-la-liga-competition/dashboard-la-liga-competition.component';
>>>>>>> 3b7dbaa6e808bc87e531aff011b17a763100fa09

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GamesComponent,
    ComparePasswordsDirective,
    CompetitionsComponent,
<<<<<<< HEAD
    SocialComponent,
    SocialAddComponent
=======
    DashboardLaLigaCompetitionComponent
>>>>>>> 3b7dbaa6e808bc87e531aff011b17a763100fa09
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
