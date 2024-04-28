import { TestBed } from '@angular/core/testing';

import { RadioService } from './radio.service';
import { Radio } from '../radio.interface';
import stations from '../../../mocks/data.json';
describe('RadioService', () => {
  let service: RadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('returns a list of Radio Stations',()=>{
    expect(service.getRadioStations()).toMatchObject<Radio[]>(stations)
  })
});
