import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CONTACT_CONFIG } from '../../core/config/contact.config';
import { LANDING_CONTENT } from '../../core/config/landing-content.config';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly contact = CONTACT_CONFIG;
  protected readonly content = LANDING_CONTENT;
  protected readonly isMenuOpen = signal(false);

  constructor() {
    this.title.setTitle('HMODevelopers | Soluciones tecnológicas para empresas');
    this.meta.updateTag({
      name: 'description',
      content:
        'Creamos páginas web, sistemas, aplicaciones, automatizaciones, bots, integraciones, dashboards y soluciones digitales a medida para empresas y negocios.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'HMODevelopers | Soluciones tecnológicas para empresas',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Creamos páginas web, sistemas, aplicaciones, automatizaciones, bots, integraciones, dashboards y soluciones digitales a medida para empresas y negocios.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_DO' });
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
