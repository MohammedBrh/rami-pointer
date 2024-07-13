import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.componenet.html',
  styleUrls: ['./end-game.componenet.css'],
})
export class AppComponent {
  @Input() winner: string;
  @Output() noteOfLosers = new EventEmitter<any[]>();
}
