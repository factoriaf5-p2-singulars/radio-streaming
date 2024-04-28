import { Component, OnInit } from '@angular/core';
import { RadioService } from './services/radio.service';
import { Radio } from './radio.interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit {
title='RADIO SINGULARS';
searchValue!:string;
stations!:Radio[];
radioListFiltered:Radio[] = [];
constructor(private radioStationService: RadioService){}
ngOnInit(): void {
  this.stations = this.radioStationService.getRadioStations();
}
searchRadioStation(){
  // event.preventDefault();
  this.radioListFiltered = this.stations.filter(
    (station:Radio) => station.name.includes(this.searchValue))
  this.searchValue='';
}
}
