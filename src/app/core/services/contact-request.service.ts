import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { CONTACT_CONFIG } from '../config/contact.config';
import { ContactRequestPayload, ContactRequestResponse } from '../models/contact-request.model';

@Injectable({ providedIn: 'root' })
export class ContactRequestService {
  private readonly http = inject(HttpClient);

  submitContactRequest(payload: ContactRequestPayload): Observable<ContactRequestResponse> {
    if (CONTACT_CONFIG.useMockSubmit) {
      return this.submitMockRequest(payload);
    }

    return this.http.post<ContactRequestResponse>(CONTACT_CONFIG.apiEndpoint, payload);
  }

  private submitMockRequest(_payload: ContactRequestPayload): Observable<ContactRequestResponse> {
    return of({
      success: true,
      message: 'Gracias. Recibimos tu solicitud y te contactaremos pronto.',
      requestId: `mock-${Date.now()}`,
    }).pipe(delay(700));
  }
}
