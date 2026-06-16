import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { finalize } from 'rxjs';
import { CONTACT_CONFIG } from '../../core/config/contact.config';
import { LANDING_CONTENT } from '../../core/config/landing-content.config';
import {
  ContactBudgetRange,
  ContactNeedType,
  ContactRequestPayload,
} from '../../core/models/contact-request.model';
import { ContactRequestService } from '../../core/services/contact-request.service';

@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactRequestService = inject(ContactRequestService);

  protected readonly contact = CONTACT_CONFIG;
  protected readonly content = LANDING_CONTENT;
  protected readonly isMenuOpen = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly submitted = signal(false);
  protected readonly formStatus = signal<'idle' | 'success' | 'error'>('idle');
  protected readonly formMessage = signal('');

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    company: ['', [Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(180)]],
    phone: ['', [Validators.maxLength(30), Validators.pattern(/^[0-9+\-()\s]*$/)]],
    needType: ['', [Validators.required]],
    budgetRange: [''],
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
      budgetRange: (value.budgetRange as ContactBudgetRange) || null,
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
      budgetRange: '',
      message: '',
      privacyAccepted: false,
      website: '',
    });
  }
}
