import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_TESTIMONIALS } from '../data/mock-testimonials';
import { Testimonial } from '../models/testimonial.model';

@Injectable({ providedIn: 'root' })
export class TestimonialsService {
  /**
   * Fuente actual de testimonios demostrativos.
   * Próxima integración: consumir GET /api/public/testimonials para administrar reseñas reales.
   */
  getTestimonials(): Observable<Testimonial[]> {
    return of(MOCK_TESTIMONIALS);
  }
}
