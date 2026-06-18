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
export interface FaqItem {
  question: string;
  answer: string;
}

export const LANDING_CONTENT = {
  // Estructura narrativa: inicio → dolores → transformación → servicios → ejemplos → proceso → confianza → preguntas → contacto.
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cómo te ayudamos', href: '#como-ayudamos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Ejemplos', href: '#ejemplos' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'Preguntas', href: '#preguntas' },
  ] satisfies LinkItem[],
  badges: [
    'Páginas web',
    'Sistemas',
    'Apps',
    'Automatización',
    'Conexión de herramientas',
    'Reportes',
  ],
  needs: [
    {
      icon: '01',
      title: 'Procesos manuales que consumen tiempo',
      description:
        'Cuando tu equipo repite tareas, copia datos entre archivos o depende de pasos manuales para avanzar.',
    },
    {
      icon: '02',
      title: 'Información dispersa',
      description:
        'Cuando los datos viven en correos, hojas de cálculo, WhatsApp o sistemas separados y cuesta ver qué está pasando.',
    },
    {
      icon: '03',
      title: 'Herramientas desconectadas',
      description:
        'Cuando formularios, correos, bases de datos o sistemas internos no se comunican y generan doble trabajo.',
    },
    {
      icon: '04',
      title: 'Ideas que no sabes cómo aterrizar',
      description:
        'Cuando tienes una oportunidad digital clara, pero necesitas ordenar alcance, prioridades y primer paso.',
    },
    {
      icon: '05',
      title: 'Falta de control operativo',
      description:
        'Cuando es difícil dar seguimiento a clientes, pagos, inventario, solicitudes, servicios o tareas del equipo.',
    },
    {
      icon: '06',
      title: 'Reportes difíciles de obtener',
      description:
        'Cuando necesitas indicadores claros, pero hoy obtenerlos implica revisar todo manualmente.',
    },
  ] satisfies ContentCard[],
  capabilities: [
    {
      icon: 'web',
      title: 'Presencia digital',
      benefit: 'Te ayuda a verte más profesional y generar más contactos.',
      description:
        'Creamos sitios web y landing pages que explican tu servicio, transmiten confianza y facilitan que un cliente te contacte.',
      result: 'Ideal para presentar servicios, campañas o nuevas líneas de negocio.',
    },
    {
      icon: 'systems',
      title: 'Sistemas para tu negocio',
      benefit: 'Te ayuda a trabajar con más orden y menos errores.',
      description:
        'Desarrollamos herramientas para controlar clientes, ventas, registros, pagos, inventario, servicios o procesos internos.',
      result: 'Ideal para centralizar lo que hoy vive en Excel, papel o mensajes.',
      badge: 'Más solicitado',
      featured: true,
    },
    {
      icon: 'automation',
      title: 'Automatización de tareas',
      benefit: 'Te ayuda a ahorrar tiempo todos los días.',
      description:
        'Creamos flujos que envían avisos, registran información, generan seguimientos o reducen trabajo repetitivo.',
      result: 'Ideal para equipos que quieren operar con menos carga manual.',
    },
    {
      icon: 'integrations',
      title: 'Conexión entre herramientas',
      benefit: 'Te ayuda a tener información sincronizada.',
      description:
        'Conectamos formularios, correos, WhatsApp, bases de datos, sistemas internos o paneles administrativos para que trabajen juntos.',
      result: 'Ideal para evitar capturas dobles y datos separados.',
    },
    {
      icon: 'data',
      title: 'Datos y reportes',
      benefit: 'Te ayuda a tomar decisiones con más claridad.',
      description:
        'Organizamos tu información en reportes, gráficas y tableros de indicadores fáciles de consultar.',
      result: 'Ideal para saber cómo va tu negocio sin revisar todo manualmente.',
    },
    {
      icon: 'infrastructure',
      title: 'Publicación y soporte técnico',
      benefit: 'Te ayuda a operar con estabilidad.',
      description:
        'Te apoyamos con publicación, servidores, dominios, correos, ambientes de prueba, mantenimiento y soporte técnico.',
      result: 'Ideal para lanzar, mantener y preparar una solución para crecer.',
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
      badge: '01',
      title: 'Entendemos',
      description:
        'Conocemos tu operación, tus procesos y los problemas que hoy te quitan tiempo o generan desorden.',
    },
    {
      badge: '02',
      title: 'Definimos',
      description:
        'Elegimos la solución adecuada: página web, sistema, automatización, reportes, conexión entre herramientas o plataforma completa.',
    },
    {
      badge: '03',
      title: 'Diseñamos',
      description:
        'Organizamos la experiencia para que la herramienta sea clara, profesional y fácil de usar.',
    },
    {
      badge: '04',
      title: 'Construimos',
      description:
        'Desarrollamos la solución cuidando rendimiento, seguridad, estabilidad y mantenimiento.',
    },
    {
      badge: '05',
      title: 'Acompañamos',
      description:
        'Te ayudamos a publicar, ajustar y preparar la solución para que pueda crecer conforme tu negocio lo necesite.',
    },
  ] satisfies ContentCard[],
  examples: [
    {
      title: 'Presencia digital para vender mejor',
      description:
        'Sitios o landing pages que expliquen tu servicio, generen confianza y conviertan visitas en contactos.',
    },
    {
      title: 'Operación interna más ordenada',
      description:
        'Sistemas para administrar clientes, registros, pagos, inventario, servicios, solicitudes o procesos internos.',
    },
    {
      title: 'Información clara para decidir',
      description:
        'Paneles de información, reportes e indicadores para saber cómo va tu negocio sin revisar todo manualmente.',
    },
    {
      title: 'Automatización de tareas repetitivas',
      description:
        'Flujos que envían avisos, registran información, conectan herramientas o reducen trabajo manual.',
    },
    {
      title: 'Herramientas conectadas',
      description:
        'Conexión entre formularios, correos, bases de datos, WhatsApp, sistemas internos o paneles administrativos.',
    },
    {
      title: 'Plataformas preparadas para crecer',
      description:
        'Soluciones completas que pueden empezar por etapas y evolucionar conforme tu operación lo necesite.',
    },
  ] satisfies ContentCard[],
  footerServices: [
    'Presencia digital',
    'Sistemas para tu negocio',
    'Automatización de tareas',
    'Conexión entre herramientas',
    'Datos y reportes',
    'Publicación y soporte técnico',
  ],
  before: [
    'Procesos dispersos y difíciles de seguir',
    'Información repartida en muchos lugares',
    'Tareas manuales que consumen tiempo',
    'Herramientas desconectadas entre sí',
    'Decisiones sin datos claros a la mano',
  ],
  after: [
    'Operación más clara y organizada',
    'Información centralizada y fácil de consultar',
    'Tareas repetitivas automatizadas',
    'Herramientas conectadas para evitar doble trabajo',
    'Reportes visibles para tener más control',
  ],
  faqs: [
    {
      question: '¿Necesito saber qué tecnología usar?',
      answer:
        'No. Tú nos cuentas qué quieres resolver y nosotros te ayudamos a definir la solución y el alcance adecuado.',
    },
    {
      question: '¿Puedo empezar con algo pequeño?',
      answer:
        'Sí. Podemos iniciar con una primera versión enfocada, medir su utilidad y hacerla crecer por etapas.',
    },
    {
      question: '¿También mejoran sistemas existentes?',
      answer:
        'Sí. Revisamos lo que ya tienes, detectamos oportunidades de mejora y proponemos una ruta clara para modernizarlo.',
    },
    {
      question: '¿Me ayudan a definir qué necesito?',
      answer:
        'Sí. Parte de nuestro trabajo es ordenar la idea, priorizar necesidades y recomendar el primer paso más conveniente.',
    },
    {
      question: '¿Qué pasa después de publicar?',
      answer:
        'Podemos acompañarte con ajustes, soporte, mantenimiento y nuevas etapas según lo que tu operación necesite.',
    },
    {
      question: '¿Pueden ayudar con dominio, servidor o correo?',
      answer:
        'Sí. Te apoyamos con publicación, servidores, dominios, correos y la configuración técnica necesaria para operar.',
    },
    {
      question: '¿Cómo se define el alcance del proyecto?',
      answer:
        'Primero entendemos el objetivo, luego definimos prioridades, entregables y una ruta de implementación clara.',
    },
  ] satisfies FaqItem[],
};
