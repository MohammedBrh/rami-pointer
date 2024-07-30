import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})

export class HistoriqueComponent {
  @Input() dataTable:any[]= [];
  getTheValue(value:any){
    // (note >= 0) ? note : 'win'}
    if(isNaN(value))
      return value;
    return (value >= 0) ? value : 'win'
  }
}