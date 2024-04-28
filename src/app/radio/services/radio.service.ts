import { Injectable } from '@angular/core';
import stations from '../../../mocks/data.json';
@Injectable({
  providedIn: 'root'
})
export class RadioService {

  constructor() { }
  getRadioStations(){
    return stations;
  }
}
