export interface LinkItem {
  label: string;
  href: string;
}
export interface ContentCard {
  title: string;
  description: string;
  icon?: string;
  benefit?: string;
  result?: string;
  badge?: string;
  featured?: boolean;
}
export interface ProcessStep extends ContentCard {}
export interface FaqItem {
  question: string;
  answer: string;
}

export const LANDING_CONTENT = {
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cómo ayudamos', href: '#como-ayudamos' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Preguntas', href: '#preguntas' },
  ] satisfies LinkItem[],
  badges: [
    'Páginas web',
    'Sistemas',
    'Apps',
    'Automatización',
    'Bots',
    'Integraciones',
    'Datos',
    'Infraestructura',
  ],
  needs: [
    {
      icon: '01',
      title: 'Digitalizar una idea',
      description:
        'Convertimos una necesidad inicial en una presencia digital, app, sistema o plataforma funcional con una ruta clara.',
    },
    {
      icon: '02',
      title: 'Automatizar tareas',
      description:
        'Diseñamos flujos, bots y procesos que reducen trabajo repetitivo y liberan tiempo del equipo.',
    },
    {
      icon: '03',
      title: 'Conectar herramientas',
      description:
        'Integramos formularios, plataformas, sistemas y fuentes de información para que tu operación fluya mejor.',
    },
    {
      icon: '04',
      title: 'Entender la información',
      description:
        'Transformamos datos dispersos en dashboards, reportes e indicadores comprensibles para decidir con más claridad.',
    },
    {
      icon: '05',
      title: 'Mejorar procesos',
      description:
        'Ordenamos pasos, roles y seguimiento para convertir procesos manuales en experiencias digitales más eficientes.',
    },
    {
      icon: '06',
      title: 'Crear algo a medida',
      description:
        'Cuando una herramienta genérica no encaja, diseñamos una solución específica para tu empresa, negocio o institución.',
    },
  ] satisfies ContentCard[],
  // Las capacidades priorizan beneficios claros para que usuarios no técnicos entiendan rápido el valor.
  capabilities: [
    {
      icon: 'web',
      title: 'Presencia digital',
      benefit: 'Te ayuda a verte más profesional y generar más contactos.',
      description:
        'Creamos páginas web profesionales para que tu negocio inspire confianza, explique claramente lo que ofrece y pueda recibir clientes desde internet.',
      result: 'Ideal para presentar servicios y atraer oportunidades.',
    },
    {
      icon: 'systems',
      title: 'Sistemas para tu negocio',
      benefit: 'Te ayuda a trabajar con más orden y menos errores.',
      description:
        'Desarrollamos herramientas web o móviles para controlar clientes, ventas, registros, pagos, inventario, servicios o procesos que hoy haces en Excel, papel o WhatsApp.',
      result: 'Ideal para negocios que necesitan centralizar su operación.',
      badge: 'Más solicitado',
      featured: true,
    },
    {
      icon: 'automation',
      title: 'Automatización de tareas',
      benefit: 'Te ayuda a ahorrar tiempo todos los días.',
      description:
        'Hacemos que tareas repetitivas se realicen solas: enviar avisos, responder mensajes, registrar información, generar reportes o dar seguimiento.',
      result: 'Ideal para equipos con tareas repetitivas.',
    },
    {
      icon: 'integrations',
      title: 'Conexión entre sistemas',
      benefit: 'Te ayuda a tener todo conectado.',
      description:
        'Integramos formularios, bases de datos, correos, WhatsApp, sistemas internos o paneles administrativos para que la información no esté duplicada ni separada.',
      result: 'Ideal para evitar capturas dobles y datos dispersos.',
    },
    {
      icon: 'data',
      title: 'Datos y reportes',
      benefit: 'Te ayuda a tomar mejores decisiones.',
      description:
        'Convertimos tu información en reportes, gráficas e indicadores para que puedas saber cómo va tu negocio sin revisar todo manualmente.',
      result: 'Ideal para tener visibilidad clara del negocio.',
    },
    {
      icon: 'infrastructure',
      title: 'Soporte e infraestructura',
      benefit: 'Te ayuda a operar con estabilidad.',
      description:
        'Te apoyamos con dominios, servidores, despliegues, correos, ambientes de prueba, publicación de sistemas y soporte técnico.',
      result: 'Ideal para publicar, mantener y escalar soluciones.',
    },
  ] satisfies ContentCard[],
  capabilityBenefits: [
    'Más control de tu operación',
    'Menos trabajo manual',
    'Mejor atención al cliente',
    'Información clara para decidir',
  ],
  trustPoints: [
    {
      title: 'Tecnología adecuada',
      description:
        'No tienes que saber qué tecnología usar. Nosotros te ayudamos a definir el camino correcto.',
    },
    {
      title: 'Preparado para crecer',
      description:
        'Creamos soluciones que pueden empezar por etapas y evolucionar conforme tu operación lo necesite.',
    },
    {
      title: 'Seguridad y estabilidad',
      description:
        'Cuidamos la base técnica, el rendimiento y la confiabilidad para que tu solución funcione correctamente.',
    },
    {
      title: 'Experiencia fácil de usar',
      description:
        'Diseñamos interfaces claras para que tu equipo o tus clientes adopten la herramienta sin fricción.',
    },
  ] satisfies ContentCard[],
  solutions: [
    'Página web para presentar tu empresa',
    'Landing para promocionar un servicio',
    'Sistema web a medida',
    'Aplicación móvil',
    'Automatización con bots o flujos inteligentes',
    'Integración entre herramientas',
    'Dashboard para visualizar información',
    'Reportes ejecutivos',
    'Procesos de datos',
    'Modernización de sistemas existentes',
    'Herramientas internas',
    'Plataforma completa',
    'Solución digital personalizada',
  ],
  before: [
    'Ideas sin aterrizar',
    'Procesos manuales o dispersos',
    'Herramientas desconectadas',
    'Información difícil de consultar',
    'Tareas repetitivas que consumen tiempo',
  ],
  after: [
    'Solución digital clara y funcional',
    'Procesos mejor organizados',
    'Herramientas conectadas',
    'Datos convertidos en visibilidad',
    'Automatizaciones listas para crecer',
  ],
  process: [
    {
      title: 'Escuchamos tu necesidad',
      description:
        'Entendemos qué quieres mejorar, construir o automatizar sin obligarte a hablar en términos técnicos.',
    },
    {
      title: 'Analizamos la mejor ruta',
      description:
        'Definimos si conviene una página, sistema, app, automatización, integración, dashboard u otra solución.',
    },
    {
      title: 'Diseñamos la propuesta',
      description:
        'Aterrizamos alcance, prioridades, experiencia, flujo de trabajo y plan de implementación.',
    },
    {
      title: 'Construimos la solución',
      description:
        'Desarrollamos una herramienta moderna, estable y alineada con tu operación real.',
    },
    {
      title: 'Implementamos y mejoramos',
      description:
        'La ponemos en marcha, acompañamos la adopción y dejamos una base lista para futuras mejoras.',
    },
  ] satisfies ProcessStep[],
  useCases: [
    {
      title: 'Operación interna más ordenada',
      description:
        'Un sistema que centraliza solicitudes, registros, seguimiento y reportes para que el equipo trabaje con mayor claridad.',
    },
    {
      title: 'Presencia digital lista para convertir',
      description:
        'Un sitio o landing que explica tu valor, orienta al visitante y facilita iniciar una conversación comercial.',
    },
    {
      title: 'Información ejecutiva en un solo lugar',
      description:
        'Dashboards que consolidan indicadores, fuentes de datos y reportes para tomar mejores decisiones.',
    },
    {
      title: 'Automatización entre herramientas',
      description:
        'Flujos que conectan formularios, sistemas, mensajes y tareas para reducir pasos manuales.',
    },
  ] satisfies ContentCard[],
  faqs: [
    {
      question: '¿Necesito saber qué tecnología usar?',
      answer:
        'No. Tú nos cuentas qué quieres resolver y nosotros te ayudamos a definir el camino, la solución y el alcance adecuado.',
    },
    {
      question: '¿Pueden crear algo desde cero?',
      answer:
        'Sí. Podemos ayudarte desde una idea inicial hasta una solución funcional, publicada y lista para usarse.',
    },
    {
      question: '¿Solo hacen páginas web?',
      answer:
        'No. Creamos páginas, landing pages, sistemas, aplicaciones, automatizaciones, bots, integraciones, dashboards, infraestructura y soluciones personalizadas.',
    },
    {
      question: '¿Pueden automatizar procesos?',
      answer:
        'Sí. Podemos reducir tareas repetitivas mediante flujos automatizados, bots, integraciones o herramientas digitales a medida.',
    },
    {
      question: '¿Pueden mejorar algo que ya tengo?',
      answer:
        'Sí. Revisamos soluciones existentes, detectamos oportunidades y proponemos una ruta de modernización o mejora.',
    },
    {
      question: '¿Puedo empezar con algo pequeño?',
      answer: 'Sí. Podemos iniciar con una primera versión enfocada y hacerla crecer por etapas.',
    },
    {
      question: '¿También ayudan con dominios, servidores o despliegues?',
      answer:
        'Sí. Podemos apoyarte con la parte técnica necesaria para que tu solución funcione correctamente y tenga una base estable.',
    },
  ] satisfies FaqItem[],
};
