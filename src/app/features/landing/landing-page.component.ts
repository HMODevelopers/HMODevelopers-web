import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const CONTACT = {
  email: 'contacto@hmodeveloper.com',
  // TODO: Reemplazar por número real en formato internacional, ejemplo: https://wa.me/18090000000
  whatsappHref: '#',
};

type Icon = 'code' | 'phone' | 'server' | 'database' | 'workflow' | 'cloud' | 'shield' | 'spark' | 'mail' | 'quote';

interface CardItem {
  icon: Icon;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly contact = CONTACT;
  protected readonly isMenuOpen = signal(false);
  protected readonly testimonialIndex = signal(0);

  protected readonly navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Recomendaciones', href: '#recomendaciones' },
    { label: 'Contacto', href: '#contacto' },
  ];

  protected readonly badges = ['Desarrollo web', 'Apps móviles', 'APIs', 'Automatización', 'Infraestructura'];
  protected readonly metrics = ['Soluciones a medida', 'Arquitectura escalable', 'Diseño responsive', 'Soporte técnico'];

  protected readonly services: CardItem[] = [
    { icon: 'code', title: 'Desarrollo web', description: 'Plataformas administrativas, portales, dashboards, sistemas internos y sitios corporativos.' },
    { icon: 'phone', title: 'Aplicaciones móviles', description: 'Apps modernas para Android/iOS, enfocadas en operación, ventas, clientes o procesos internos.' },
    { icon: 'server', title: 'APIs y backend', description: 'Servicios robustos, seguros, documentados y preparados para integraciones.' },
    { icon: 'database', title: 'Bases de datos', description: 'Modelado, consultas, optimización, migraciones, reportes e integridad de datos.' },
    { icon: 'workflow', title: 'Automatización de procesos', description: 'Digitalización de tareas repetitivas, flujos internos, reportes y operaciones.' },
    { icon: 'cloud', title: 'Infraestructura y despliegues', description: 'Servidores, dominios, despliegues, Docker, túneles seguros, ambientes y monitoreo inicial.' },
  ];

  protected readonly solutions = [
    { title: 'CarteraPro', description: 'Plataforma para gestión de préstamos, clientes, pagos, cartera y operación financiera.' },
    { title: 'Sistemas administrativos', description: 'Herramientas internas para controlar procesos, usuarios, reportes, permisos y operación.' },
    { title: 'Plataformas empresariales', description: 'Software web a medida para negocios que necesitan centralizar información y operar mejor.' },
    { title: 'Integraciones y automatización', description: 'Conexión entre sistemas, APIs, bases de datos, notificaciones y flujos automáticos.' },
  ];

  protected readonly process = [
    ['Diagnóstico', 'Entendemos tu operación, problema, objetivo y flujo real de trabajo.'],
    ['Propuesta', 'Definimos alcance, módulos, prioridades, tiempos y estrategia técnica.'],
    ['Diseño y arquitectura', 'Creamos la estructura visual, técnica y funcional de la solución.'],
    ['Desarrollo', 'Construimos frontend, backend, base de datos e integraciones necesarias.'],
    ['Entrega y mejora', 'Probamos, desplegamos, documentamos y dejamos la base lista para crecer.'],
  ];

  protected readonly testimonials = [
    'Espacio reservado para recomendación de cliente.',
    'Aquí se mostrará la opinión de empresas o personas que hayan trabajado con HMODevelopers.',
    'Testimonio pendiente de publicación.',
    'Recomendación en proceso de validación para publicarse de forma transparente.',
  ];

  protected readonly differentiators: CardItem[] = [
    { icon: 'spark', title: 'Desarrollo a medida', description: 'Soluciones pensadas para tu operación real, no procesos forzados por plantillas.' },
    { icon: 'code', title: 'Código limpio y mantenible', description: 'Base técnica clara para evolucionar módulos, integraciones y nuevas reglas.' },
    { icon: 'cloud', title: 'Arquitectura escalable', description: 'Frontend, backend, datos e infraestructura preparados para crecer con orden.' },
    { icon: 'database', title: 'Sistemas administrativos', description: 'Experiencia creando herramientas internas, reportes, permisos y flujos operativos.' },
    { icon: 'shield', title: 'Seguridad y buenas prácticas', description: 'Criterios profesionales para proteger datos, accesos, despliegues y mantenimiento.' },
    { icon: 'mail', title: 'Acompañamiento técnico', description: 'Comunicación clara desde el diagnóstico hasta la entrega y mejora continua.' },
  ];

  constructor() {
    this.title.setTitle('HMODevelopers | Software a medida para negocios que quieren crecer');
    this.meta.updateTag({ name: 'description', content: 'HMODevelopers diseña y construye plataformas web, apps móviles, APIs, automatizaciones e infraestructura digital para empresas.' });
    this.meta.updateTag({ property: 'og:title', content: 'HMODevelopers | Software a medida' });
    this.meta.updateTag({ property: 'og:description', content: 'Soluciones digitales reales, escalables y bien hechas para negocios.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://hmodeveloper.com/' });
  }

  protected toggleMenu(): void { this.isMenuOpen.update((open) => !open); }
  protected closeMenu(): void { this.isMenuOpen.set(false); }
  protected setTestimonial(index: number): void { this.testimonialIndex.set(index); }
  protected prevTestimonial(): void { this.testimonialIndex.update((i) => (i === 0 ? this.testimonials.length - 1 : i - 1)); }
  protected nextTestimonial(): void { this.testimonialIndex.update((i) => (i + 1) % this.testimonials.length); }
}
