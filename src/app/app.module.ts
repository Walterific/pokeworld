import { AppComponent} from "./app.component";
import { NgModule} from "@angular/core";
import { CommonModule} from "@angular/common";
import { BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule, Routes} from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { MapComponent } from "./components/map/map.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { MovieComponent } from "./components/movie/movie.component";
import { SeriesComponent } from "./components/series/series.component";
import { GamesComponent } from "./components/games/games.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'map', component: MapComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'games', component: GamesComponent},
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FontAwesomeModule,
  ],

  exports: [
    RouterModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PokedexComponent,
    MapComponent,
    MovieComponent,
    SeriesComponent,
    GamesComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent]
})

export class AppModule {}
