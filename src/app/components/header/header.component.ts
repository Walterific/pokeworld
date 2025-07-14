import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { FontIconsService } from '../../services/fonticons.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit{
  isDarkMode = false;

  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navToggle') navToggle!: ElementRef;
  @ViewChild('navClose') navClose!: ElementRef;
  @ViewChild('navList') navList!: ElementRef;

  faSun = this.fontIconsService.faSun;
  faMoon = this.fontIconsService.faMoon;
  faBars = this.fontIconsService.faBars;
  faX = this.fontIconsService.faX;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private fontIconsService: FontIconsService
  ) {}

  ngAfterViewInit() {
    this.setupMenuToggle();
    this.loadTheme();
    this.setupDocumentClickListener();
  }

  private setupMenuToggle() {
    if (this.navToggle) {
      this.navToggle.nativeElement.addEventListener('click', () => {
        this.navMenu.nativeElement.classList.add('show-menu');
        // Add show-menu to header for global state
        const header = this.hostElement.nativeElement.querySelector('.header');
        if (header) header.classList.add('show-menu');
      });
    }

    if (this.navClose) {
      this.navClose.nativeElement.addEventListener('click', () => {
        this.navMenu.nativeElement.classList.remove('show-menu');
        // Remove show-menu from header
        const header = this.hostElement.nativeElement.querySelector('.header');
        if (header) header.classList.remove('show-menu');
      });
    }
  }

  private setupDocumentClickListener() {
    this.renderer.listen('document', 'click', (event: Event) => {
      const clickedElement = event.target as HTMLElement;
      if (
        this.navMenu && 
        this.navList &&
        !this.navList.nativeElement.contains(clickedElement) && 
        !this.navToggle.nativeElement.contains(clickedElement)
      ) {
        this.navMenu.nativeElement.classList.remove('show-menu');
        // Remove show-menu from header
        const header = this.hostElement.nativeElement.querySelector('.header');
        if (header) header.classList.remove('show-menu');
      }
    });
  }

  closeMenu() {
    if (this.navMenu) {
      this.navMenu.nativeElement.classList.remove('show-menu');
      // Remove show-menu from header
      const header = this.hostElement.nativeElement.querySelector('.header');
      if (header) header.classList.remove('show-menu');
    }
  }

  toggleTheme() {
    const mainElement = this.hostElement.nativeElement.closest('main');

    if (mainElement) {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        this.renderer.addClass(mainElement, 'dark-theme');
        localStorage.setItem('selected-theme', 'dark');
      } else {
        this.renderer.removeClass(mainElement, 'dark-theme');
        localStorage.setItem('selected-theme', 'light');
      }
    }
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('selected-theme');
    const mainElement = this.hostElement.nativeElement.closest('main');
    if (savedTheme === 'dark' && mainElement) {
      this.isDarkMode = true;
      this.renderer.addClass(mainElement, 'dark-theme');
    }
  }
}
