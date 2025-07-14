import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class FontIconsService {
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars;
  faX = faX;

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faMoon, faSun, faBars, faX);
  }
}