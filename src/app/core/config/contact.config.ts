import { ContactNeedType, ContactSelectOption } from '../models/contact-request.model';

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
    { value: 'website', label: 'Crear una página web' },
    { value: 'web-system', label: 'Crear un sistema o plataforma' },
    { value: 'mobile-app', label: 'Crear una aplicación móvil' },
    { value: 'automation', label: 'Automatizar un proceso' },
    { value: 'bot-assistant', label: 'Crear un bot o asistente' },
    { value: 'tool-integration', label: 'Conectar herramientas o sistemas' },
    { value: 'dashboard-reports', label: 'Crear reportes o dashboards' },
    { value: 'improve-existing', label: 'Mejorar algo que ya existe' },
    { value: 'advisory-needed', label: 'No estoy seguro, necesito orientación' },
    { value: 'other', label: 'Otro' },
  ] satisfies ContactSelectOption<ContactNeedType>[],
};
