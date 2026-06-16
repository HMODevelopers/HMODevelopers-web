export type ContactNeedType =
  | 'website'
  | 'landing-page'
  | 'web-system'
  | 'mobile-app'
  | 'automation'
  | 'bot-assistant'
  | 'tool-integration'
  | 'dashboard-reports'
  | 'technology-infrastructure'
  | 'system-modernization'
  | 'advisory-needed'
  | 'other';

export type ContactBudgetRange =
  | 'not-defined'
  | 'under-10000-mxn'
  | '10000-25000-mxn'
  | '25000-50000-mxn'
  | '50000-100000-mxn'
  | 'over-100000-mxn'
  | 'prefer-call';

export interface ContactRequestPayload {
  fullName: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  needType: ContactNeedType;
  budgetRange?: ContactBudgetRange | null;
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
