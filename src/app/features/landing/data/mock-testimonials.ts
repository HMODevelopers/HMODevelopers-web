import { Testimonial } from '../models/testimonial.model';

// Compromisos comerciales presentados en el carrusel de confianza.
// Mantienen el modelo existente para no alterar la interacción ni SSR.
export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Claridad desde el inicio',
    role: 'Diagnóstico y alcance',
    company: 'Compromiso HMODevelopers',
    projectType: 'Asesoría inicial',
    rating: 5,
    initials: '01',
    comment:
      'Te ayudamos a ordenar la idea, entender prioridades y definir una ruta realista antes de construir.',
  },
  {
    id: 2,
    name: 'Comunicación durante el proceso',
    role: 'Seguimiento claro',
    company: 'Compromiso HMODevelopers',
    projectType: 'Gestión del proyecto',
    rating: 5,
    initials: '02',
    comment:
      'Mantenemos conversaciones claras para que sepas qué se está haciendo, por qué y qué viene después.',
  },
  {
    id: 3,
    name: 'Soluciones pensadas para tu operación',
    role: 'Diseño útil',
    company: 'Compromiso HMODevelopers',
    projectType: 'Solución a medida',
    rating: 5,
    initials: '03',
    comment:
      'No diseñamos herramientas genéricas: buscamos que la solución encaje con tus procesos reales.',
  },
  {
    id: 4,
    name: 'Acompañamiento después de publicar',
    role: 'Soporte y ajustes',
    company: 'Compromiso HMODevelopers',
    projectType: 'Post-lanzamiento',
    rating: 5,
    initials: '04',
    comment:
      'Te apoyamos con publicación, ajustes y próximos pasos para que la solución pueda evolucionar.',
  },
  {
    id: 5,
    name: 'Diseño profesional y fácil de usar',
    role: 'Experiencia clara',
    company: 'Compromiso HMODevelopers',
    projectType: 'UI/UX',
    rating: 5,
    initials: '05',
    comment:
      'Cuidamos que cada página, sistema o panel se vea bien y sea entendible para usuarios reales.',
  },
  {
    id: 6,
    name: 'Base técnica preparada para crecer',
    role: 'Estabilidad y mantenimiento',
    company: 'Compromiso HMODevelopers',
    projectType: 'Escalabilidad',
    rating: 5,
    initials: '06',
    comment:
      'Construimos con una base ordenada para facilitar mantenimiento, mejoras y nuevas etapas.',
  },
];
