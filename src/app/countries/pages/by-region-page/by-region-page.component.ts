import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    // 'Northern Africa',
    // 'Sub-Saharan Africa',
    // 'Eastern Africa',
    // 'Middle Africa',
    // 'Southern Africa',
    // 'Western Africa	',
    // 'Latin America and the Caribbean',
    // 'Caribbean',
    // 'Central America',
    // 'South America',
    // 'Northern America',
    // 'Central Asia',
    // 'Eastern Asia',
    // 'South-eastern Asia',
    // 'Southern Asia',
    // 'Western Asia',
    // 'Eastern Europe',
    // 'Northern Europe',
    // 'Southern Europe',
    // 'Western Europe',
    // 'Australia and New Zealand',
    // 'Melanesia',
    // 'Micronesia',
    // 'Polynesia',
  ];
  public isLoading: boolean = false;
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
