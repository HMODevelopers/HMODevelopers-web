import {
  ContactBudgetRange,
  ContactNeedType,
  ContactSelectOption,
} from '../models/contact-request.model';

export const CONTACT_CONFIG = {
  companyName: 'HMODevelopers',
  contactEmail: 'contacto@hmodevelopers.com',
  email: 'contacto@hmodevelopers.com',
  advisoryCta: 'Solicitar asesoría',
  messageCta: 'Enviar mensaje',
  // Endpoint centralizado para la fase backend; se activa cambiando useMockSubmit a false.
  apiEndpoint: '/api/contacto/solicitudes',
  // Modo temporal para mantener una experiencia completa mientras se implementa la API oficial.
  useMockSubmit: true,
  needOptions: [
    { value: 'website', label: 'Página web' },
    { value: 'landing-page', label: 'Landing page' },
    { value: 'web-system', label: 'Sistema web' },
    { value: 'mobile-app', label: 'Aplicación móvil' },
    { value: 'automation', label: 'Automatización' },
    { value: 'bot-assistant', label: 'Bot o asistente' },
    { value: 'tool-integration', label: 'Integración entre herramientas' },
    { value: 'dashboard-reports', label: 'Dashboard / reportes' },
    { value: 'technology-infrastructure', label: 'Infraestructura tecnológica' },
    { value: 'system-modernization', label: 'Modernización de sistema existente' },
    { value: 'advisory-needed', label: 'No estoy seguro, necesito asesoría' },
    { value: 'other', label: 'Otro' },
  ] satisfies ContactSelectOption<ContactNeedType>[],
  budgetOptions: [
    { value: 'not-defined', label: 'Aún no lo tengo definido' },
    { value: 'under-10000-mxn', label: 'Menos de $10,000 MXN' },
    { value: '10000-25000-mxn', label: '$10,000 - $25,000 MXN' },
    { value: '25000-50000-mxn', label: '$25,000 - $50,000 MXN' },
    { value: '50000-100000-mxn', label: '$50,000 - $100,000 MXN' },
    { value: 'over-100000-mxn', label: 'Más de $100,000 MXN' },
    { value: 'prefer-call', label: 'Prefiero comentarlo en una llamada' },
  ] satisfies ContactSelectOption<ContactBudgetRange>[],
};
