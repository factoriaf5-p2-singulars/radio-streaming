import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RadioService } from './services/radio.service';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;
  let radioServiceMock: RadioService;
  beforeEach(async () => {
    radioServiceMock = {
      getRadioStations: jest.fn().mockImplementation(() => [{
      name: "__80 EXITOS",
      url: "https://80sexitos.stream.laut.fm/80sexitos",
      country: "Spain"
    }])}
    await TestBed.configureTestingModule({
      imports: [RadioComponent],
      providers:[{provide: RadioService, useValue:radioServiceMock}]
    })
      .compileComponents();

    // radioService = TestBed.inject(RadioService);
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('should search radio stations by name', () => {
    it('should have the title: RADIO SINGULARS', () => {
      expect(component.title).toEqual('RADIO SINGULARS');
    })
    it('should render the title', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain(component.title);
    })
    it('should have an input field with the placeholder="write the radio station name"', () => {
      const { debugElement } = fixture;
      const input = debugElement.query(By.css('[placeholder="write the radio name"]'));
      expect(input.nativeElement.getAttribute('type')).toBe('search');
    });
    it('should have a "search" button', () => {
      const { debugElement } = fixture;
      const button = debugElement.query(By.css('button'));
      expect(button.nativeElement.textContent).toBe('search');
    })
    it('should trigger the search function once', () => {
      const searchSpy = jest.spyOn(component, 'searchRadioStation');
      const { debugElement } = fixture;
      const button = debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(searchSpy).toHaveBeenCalledTimes(1);
    })
  })
  describe('radio stations list', () => {
    let list: DebugElement;
    beforeEach(() => {

      list = fixture.debugElement.query(By.css('ul'))

    })
    it('should exists a radio stations list', () => {
      expect(list).not.toBeNull();
    })
    it('list should initialize with no children', () => {
      expect(list.nativeElement.children.length).toBe(0);
    })
    it('list should show at least one result after succesful searching', () => {
      component.searchValue='8';
      // const searchSpy = jest.spyOn(component, 'searchRadioStation');
      const button = fixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(list.nativeElement.children.length).toBeGreaterThan(0);
    })
  })
});