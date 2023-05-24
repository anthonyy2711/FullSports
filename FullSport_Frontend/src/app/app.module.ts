import { AuthInterceptorService } from './services/auth.interceptor.service';
import { AuthGuard } from './auth.guard';
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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { SocialComponent } from './components/social/social.component';
import { SocialAddComponent } from './components/social-add/social-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardLaLigaCompetitionComponent } from './components/dashboard-la-liga-competition/dashboard-la-liga-competition.component';
import { NewsdetailComponent } from './components/newsdetail/newsdetail.component';
import { PLgamesComponent } from './components/plgames/plgames.component';
import { PLStandingsComponent } from './components/plstandings/plstandings.component';
import { DashboardPLComponent } from './components/dashboard-pl/dashboard-pl.component';
import { LaLigaStandingsComponent } from './components/la-liga-standings/la-liga-standings.component';
import { PLTopComponent } from './components/pltop/pltop.component';
import { LaLigaGamesComponent } from './components/la-liga-games/la-liga-games.component';
import { ProfileComponent } from './components/profile/profile.component';

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
    SocialComponent,
    SocialAddComponent,
    DashboardLaLigaCompetitionComponent,
    NewsdetailComponent,
    PLgamesComponent,
    PLStandingsComponent,
    DashboardPLComponent,
    LaLigaStandingsComponent,
    PLTopComponent,
    LaLigaGamesComponent,
    ProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
