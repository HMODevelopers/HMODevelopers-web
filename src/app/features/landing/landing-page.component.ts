import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { finalize } from 'rxjs';
import { CONTACT_CONFIG } from '../../core/config/contact.config';
import { LANDING_CONTENT } from '../../core/config/landing-content.config';
import { ContactNeedType, ContactRequestPayload } from '../../core/models/contact-request.model';
import { ContactRequestService } from '../../core/services/contact-request.service';
import { TestimonialsService } from './services/testimonials.service';
import { Testimonial } from './models/testimonial.model';

@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('carouselViewport')
  private carouselViewport?: ElementRef<HTMLElement>;

  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactRequestService = inject(ContactRequestService);
  private readonly testimonialsService = inject(TestimonialsService);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly contact = CONTACT_CONFIG;
  protected readonly content = LANDING_CONTENT;
  protected readonly isMenuOpen = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly formStatus = signal<'idle' | 'success' | 'error'>('idle');
  protected readonly formMessage = signal('');
  protected readonly testimonials = signal<Testimonial[]>([]);
  protected readonly activeTestimonialIndex = signal(0);
  protected readonly carouselPageSize = signal(3);
  protected readonly starValues = [1, 2, 3, 4, 5];
  private readonly autoplayMs = 6500;
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private autoplayId: ReturnType<typeof setInterval> | null = null;
  private initialScrollId: ReturnType<typeof setTimeout> | null = null;
  private carouselReady = false;
  private touchStartX = 0;

  protected readonly carouselPages = computed(() => {
    const total = this.testimonials().length;
    const pageSize = this.carouselPageSize();
    const pages = Math.max(1, total - pageSize + 1);
    return Array.from({ length: pages }, (_, index) => index);
  });

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    company: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(180)]],
    phone: [
      '',
      [Validators.required, Validators.maxLength(30), Validators.pattern(/^[0-9+\-()\s]*$/)],
    ],
    needType: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1500)]],
    privacyAccepted: [false, [Validators.requiredTrue]],
    // Honeypot antispam preparado para la validación definitiva del backend.
    website: [''],
  });

  constructor() {
    this.title.setTitle('HMODevelopers | Soluciones tecnológicas para empresas');
    this.meta.updateTag({
      name: 'description',
      content:
        'Creamos páginas web, sistemas, aplicaciones, automatizaciones, conexión entre herramientas, reportes y soluciones digitales a medida para empresas y negocios.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'HMODevelopers | Soluciones tecnológicas para empresas',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Creamos páginas web, sistemas, aplicaciones, automatizaciones, conexión entre herramientas, reportes y soluciones digitales a medida para empresas y negocios.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_DO' });

    // La sección consume un servicio para poder sustituir mocks por backend sin rehacer la UI.
    this.testimonialsService.getTestimonials().subscribe((testimonials) => {
      this.testimonials.set(testimonials);
      this.activeTestimonialIndex.set(0);
      this.startAutoplay();
      this.scrollCarouselToActive();
    });

    if (this.isBrowser) {
      this.updateCarouselPageSize();
      window.addEventListener('resize', this.handleResize, { passive: true });
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.carouselReady = true;

    // Diferimos el primer scroll hasta que Angular pinte el ViewChild en navegador.
    this.initialScrollId = setTimeout(() => {
      this.initialScrollId = null;
      this.scrollCarouselToActive();
      this.startAutoplay();
    });
  }

  ngOnDestroy(): void {
    // Los timers/listeners se limpian para evitar callbacks contra DOM destruido.
    this.stopAutoplay();

    if (this.initialScrollId) {
      clearTimeout(this.initialScrollId);
      this.initialScrollId = null;
    }

    if (this.isBrowser) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  protected goToPreviousTestimonial(): void {
    this.goToTestimonial(this.activeTestimonialIndex() - 1);
  }

  protected goToNextTestimonial(): void {
    this.goToTestimonial(this.activeTestimonialIndex() + 1);
  }

  protected goToTestimonial(index: number): void {
    const pages = this.carouselPages().length;
    const nextIndex = (index + pages) % pages;
    this.activeTestimonialIndex.set(nextIndex);
    this.scrollCarouselToActive();
    this.restartAutoplay();
  }

  protected pauseAutoplay(): void {
    this.stopAutoplay();
  }

  protected resumeAutoplay(): void {
    this.startAutoplay();
  }

  protected onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  protected onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0]?.clientX ?? 0;
    const distance = this.touchStartX - touchEndX;

    // Swipe horizontal mínimo para evitar navegación accidental durante scroll vertical.
    if (Math.abs(distance) < 42) {
      return;
    }

    distance > 0 ? this.goToNextTestimonial() : this.goToPreviousTestimonial();
  }

  protected trackTestimonialById(_: number, testimonial: Testimonial): number {
    return testimonial.id;
  }

  private readonly handleResize = (): void => {
    if (!this.isBrowser) {
      return;
    }

    this.updateCarouselPageSize();
  };

  private updateCarouselPageSize(): void {
    if (!this.isBrowser) {
      return;
    }

    const width = window.innerWidth;
    const pageSize = width < 700 ? 1 : width < 1080 ? 2 : 3;
    this.carouselPageSize.set(pageSize);
    this.activeTestimonialIndex.set(
      Math.min(this.activeTestimonialIndex(), this.carouselPages().length - 1),
    );
    this.scrollCarouselToActive();
  }

  private scrollCarouselToActive(): void {
    if (!this.isBrowser || !this.carouselReady) {
      return;
    }

    // ViewChild entrega un ElementRef; nativeElement es el HTMLElement real del viewport.
    const viewport = this.carouselViewport?.nativeElement;

    if (!viewport || typeof viewport.scrollTo !== 'function') {
      return;
    }

    // El desplazamiento usa el ancho real del viewport para mantener 3/2/1 tarjetas visibles.
    viewport.scrollTo({
      left: this.getCarouselOffset(viewport),
      behavior: 'smooth',
    });
  }

  private getCarouselOffset(viewport: HTMLElement): number {
    return (viewport.clientWidth / this.carouselPageSize()) * this.activeTestimonialIndex();
  }

  private startAutoplay(): void {
    if (
      !this.isBrowser ||
      !this.carouselReady ||
      this.autoplayId ||
      this.carouselPages().length <= 1
    ) {
      return;
    }

    // Autoplay solo corre en navegador para no programar timers durante SSR.
    this.autoplayId = setInterval(() => {
      this.activeTestimonialIndex.update((index) => (index + 1) % this.carouselPages().length);
      this.scrollCarouselToActive();
    }, this.autoplayMs);
  }

  private stopAutoplay(): void {
    if (!this.autoplayId) {
      return;
    }

    clearInterval(this.autoplayId);
    this.autoplayId = null;
  }

  private restartAutoplay(): void {
    if (!this.isBrowser || !this.carouselReady) {
      return;
    }

    this.stopAutoplay();
    this.startAutoplay();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected shouldShowError(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted());
  }

  protected getErrorMessage(controlName: keyof typeof this.contactForm.controls): string {
    const control = this.contactForm.controls[controlName];

    if (control.hasError('required') || control.hasError('requiredTrue')) {
      const messages: Record<string, string> = {
        fullName: 'Escribe tu nombre.',
        email: 'Escribe tu correo electrónico.',
        needType: 'Selecciona una opción.',
        message: 'Cuéntanos un poco más para poder orientarte mejor.',
        privacyAccepted: 'Debes aceptar el uso de tus datos para responder tu solicitud.',
      };
      return messages[controlName] ?? 'Completa este campo.';
    }

    if (control.hasError('minlength')) {
      return controlName === 'fullName'
        ? 'El nombre debe tener al menos 3 caracteres.'
        : 'Cuéntanos un poco más para poder orientarte mejor.';
    }

    if (control.hasError('email')) {
      return 'Escribe un correo válido.';
    }

    if (control.hasError('maxlength')) {
      return 'El texto es demasiado largo.';
    }

    if (control.hasError('pattern')) {
      return 'Escribe un teléfono válido.';
    }

    return '';
  }

  protected submitContactForm(): void {
    this.submitted.set(true);
    this.formStatus.set('idle');
    this.formMessage.set('');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (this.contactForm.controls.website.value.trim()) {
      this.showSuccessAndReset();
      return;
    }

    const payload = this.buildPayload();
    this.isSubmitting.set(true);
    this.contactForm.disable();

    this.contactRequestService
      .submitContactRequest(payload)
      .pipe(
        finalize(() => {
          this.isSubmitting.set(false);
          this.contactForm.enable();
        }),
      )
      .subscribe({
        next: () => this.showSuccessAndReset(),
        error: () => {
          this.formStatus.set('error');
          this.formMessage.set(
            'No pudimos enviar tu solicitud en este momento. Intenta nuevamente o escríbenos por correo.',
          );
        },
      });
  }

  private buildPayload(): ContactRequestPayload {
    const value = this.contactForm.getRawValue();

    return {
      fullName: value.fullName.trim(),
      company: value.company.trim() || null,
      email: value.email.trim(),
      phone: value.phone.trim() || null,
      needType: value.needType as ContactNeedType,
      message: value.message.trim(),
      privacyAccepted: value.privacyAccepted,
      source: 'landing',
    };
  }

  private showSuccessAndReset(): void {
    this.formStatus.set('success');
    this.formMessage.set('Gracias. Recibimos tu solicitud y te contactaremos pronto.');
    this.submitted.set(false);
    this.contactForm.reset({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      needType: '',
      message: '',
      privacyAccepted: false,
      website: '',
    });
  }
}
