export type ContactNeedType =
  | 'website'
  | 'web-system'
  | 'mobile-app'
  | 'automation'
  | 'bot-assistant'
  | 'tool-integration'
  | 'dashboard-reports'
  | 'improve-existing'
  | 'advisory-needed'
  | 'other';

export interface ContactRequestPayload {
  fullName: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  needType: ContactNeedType;
  message: string;
  privacyAccepted: boolean;
  source: 'landing';
}

export interface ContactRequestResponse {
  success: boolean;
  message: string;
  requestId?: string;
}

export interface ContactSelectOption<TValue extends string = string> {
  value: TValue;
  label: string;
}
