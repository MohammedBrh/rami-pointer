import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
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
  ordresPlayers: any[] = [];
  His: any[] = [];
  HisMapped: any[] = [];

  endGame(name: string) {
    this.isTheGameEnd = true;
    this.winner = name;
  }

  getValues() {
    let err =
      this.players.filter((player) => isNaN(player!.noteLose)).length > 0;
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
    this.HisMapped = this.transformData(this.His);
    this.ordresPlayers = this.orderPlayers(this.players);
    
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

  transformData (data: any[]) {
    if (data.length === 0) return [];
    debugger;
  
    // Create the first row with names
    const headerRow: (string | number)[] = ['Name', ...data.map(person => person.name)];
  
    // Find the maximum length of historyNote arrays
    const maxRounds = Math.max(...data.map(person => person.historyNote.length));
  
    // Initialize the result with the header row
    const result: (string | number)[][] = [headerRow];
  
    // Fill in each round data
    for (let round = 0; round < maxRounds; round++) {
      const row: (string | number)[] = [`Round ${round + 1}`];
      for (const person of data) {
        const note = person.historyNote[round];
        row.push(note !== undefined ? note : '-'); // Use '-' as placeholder for missing values
      }
      result.push(row);
    }
  
    return result;
  };
  orderPlayers(players: any[]){
    return players.sort((a, b) => b.note - a.note);
  }
}
