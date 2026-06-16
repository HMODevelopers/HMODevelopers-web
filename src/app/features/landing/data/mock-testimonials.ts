import { Testimonial } from '../models/testimonial.model';

// Testimonios demostrativos: no representan clientes reales. En la siguiente fase
// este contenido será reemplazado por reseñas reales administradas desde backend.
export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mariana Torres',
    role: 'Directora Operativa',
    company: 'Nova Gestión Empresarial',
    projectType: 'Sitio web corporativo',
    rating: 5,
    initials: 'MT',
    comment:
      'Nos ayudaron a aterrizar una idea confusa en una solución clara, funcional y fácil de administrar.',
    isDemo: true,
  },
  {
    id: 2,
    name: 'Ricardo Valenzuela',
    role: 'Coordinador Comercial',
    company: 'Grupo Altaria Digital',
    projectType: 'Panel administrativo',
    rating: 5,
    initials: 'RV',
    comment:
      'El proceso fue ordenado desde el inicio. Siempre supimos qué se estaba construyendo y por qué.',
    isDemo: true,
  },
  {
    id: 3,
    name: 'Laura Méndez',
    role: 'Administración',
    company: 'Punto Norte Servicios',
    projectType: 'Sistema interno',
    rating: 5,
    initials: 'LM',
    comment:
      'La comunicación fue muy clara y el resultado nos permitió mejorar la forma en que damos seguimiento a nuestros clientes.',
    isDemo: true,
  },
  {
    id: 4,
    name: 'Diego Salazar',
    role: 'Fundador',
    company: 'Innova Local Studio',
    projectType: 'Presencia digital',
    rating: 5,
    initials: 'DS',
    comment:
      'Buscábamos una presencia digital más profesional y el resultado se sintió alineado con nuestra marca.',
    isDemo: true,
  },
  {
    id: 5,
    name: 'Fernanda Ríos',
    role: 'Gerente General',
    company: 'Bruma Consultores',
    projectType: 'Consultoría técnica',
    rating: 5,
    initials: 'FR',
    comment:
      'Nos gustó que no solo desarrollaran pantallas, sino que entendieran el flujo real del negocio.',
    isDemo: true,
  },
  {
    id: 6,
    name: 'Alejandro Cota',
    role: 'Operaciones',
    company: 'Redline Solutions Hub',
    projectType: 'Automatización',
    rating: 5,
    initials: 'AC',
    comment:
      'La solución quedó limpia, rápida y preparada para seguir creciendo con nuevas funciones.',
    isDemo: true,
  },
  {
    id: 7,
    name: 'Sofía Aguilar',
    role: 'Marketing',
    company: 'Distrito Creativo Lab',
    projectType: 'Rediseño web',
    rating: 5,
    initials: 'SA',
    comment: 'El diseño final transmitió mucha más confianza que nuestra versión anterior.',
    isDemo: true,
  },
  {
    id: 8,
    name: 'Manuel Duarte',
    role: 'Administración',
    company: 'Finova Servicios Integrales',
    projectType: 'Organización de procesos',
    rating: 5,
    initials: 'MD',
    comment:
      'Nos orientaron con una estructura sencilla para organizar información y procesos internos.',
    isDemo: true,
  },
  {
    id: 9,
    name: 'Carolina Beltrán',
    role: 'Dirección',
    company: 'Luma Digital Partners',
    projectType: 'Solución empresarial',
    rating: 5,
    initials: 'CB',
    comment:
      'El acompañamiento fue profesional y cada entrega tuvo sentido dentro del objetivo general.',
    isDemo: true,
  },
];
