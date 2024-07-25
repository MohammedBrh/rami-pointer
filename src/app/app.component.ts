import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  winner = '';
  newPlayer = '';
  isTheGameEnd: boolean = false;
  addPLayer = false;
  players: any[] = [];
  His: any[] = [];

  displayedColumns: string[] = ['name', 'note'];
  endGame(name: string) {
    this.isTheGameEnd = true;
    this.winner = name;
  }

  getValues() {
    let err =
      this.players.filter((player) => (isNaN(player!.noteLose) || player!.noteLose < -1)).length > 0;
    if (err) {
      this.players.map((player: any) => (player!.noteLose = '0'));
      this.isTheGameEnd = false;
      alert('Error Type is Not Number');
      return;
    }
    this.players.forEach((player: any) => {
      player!.note += +player!.noteLose;
      this.His.forEach((h: any) => {
        if (h.name === player.name) {
          h.historyNote = [
            ...h.historyNote,
            h.name == this.winner ? -1 : player!.noteLose,
          ];
        }
      });
      player!.noteLose = '0';
    });
    this.isTheGameEnd = false; // Optional: Log the updated players array to verify changes
  }
  reset() {
    this.winner = '';
    this.players.forEach((player: any) => {
      player!.note = 0;
      player!.noteLose = '0';
    });
    this.His.forEach((player: any) => {
      player.historyNote = [];
    });
  }
  resetAll() {
    this.His = [];
    this.players = [];
  }
  addPlayer() {
    this.addPLayer = false;
    this.players.push({ name: this.newPlayer, noteLose: '0', note: 0 });
    this.His.push({ name: this.newPlayer, historyNote: [] });
    this.newPlayer = '';
  }
  ShowBlocAddPlayer() {
    this.addPLayer = true;
  }
}
