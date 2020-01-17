import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries-drop-menu/countries.service';

@Component({
  selector: 'app-top-polluated',
  templateUrl: './top-polluated.component.html',
  styleUrls: ['./top-polluated.component.scss']
})
export class TopPolluatedComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {

  }

  public changeTopPollutionsCard() {
    this.countriesService.getPollutionLevels('US').subscribe(megadata => {
      console.log('D')
      console.log(megadata)
    });
  }
}
