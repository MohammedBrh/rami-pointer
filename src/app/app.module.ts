import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HistoriqueComponent } from './historique/historique.component';
import { OrdredPlayerComponent } from './ordredPlayers/ordred-player.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [AppComponent,
    HistoriqueComponent,
    OrdredPlayerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatListModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
