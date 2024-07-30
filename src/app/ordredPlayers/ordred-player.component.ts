import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordred-players',
  templateUrl: './ordred-player.component.html',
  styleUrls: ['./ordred-player.component.css'],
})

export class OrdredPlayerComponent {
  @Input() Players: any[] = [];

}