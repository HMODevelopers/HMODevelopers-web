export interface LinkItem { label: string; href: string; }
export interface ContentCard { title: string; description: string; icon?: string; }
export interface ProcessStep extends ContentCard { }
export interface FaqItem { question: string; answer: string; }

export const LANDING_CONTENT = {
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cómo ayudamos', href: '#como-ayudamos' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Preguntas', href: '#preguntas' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies LinkItem[],
  badges: ['Páginas web', 'Sistemas a medida', 'Automatización', 'Bots', 'Integraciones', 'Datos e inteligencia', 'Infraestructura'],
  needs: [
    { icon: '◈', title: 'Quiero digitalizar una idea', description: 'Convertimos una idea inicial en una página, app, sistema, plataforma o herramienta funcional.' },
    { icon: '⟳', title: 'Quiero automatizar tareas', description: 'Creamos flujos, bots y procesos automatizados para reducir trabajo repetitivo y ahorrar tiempo.' },
    { icon: '⌁', title: 'Quiero conectar herramientas', description: 'Integramos plataformas, formularios, servicios, sistemas o fuentes de información para que todo trabaje mejor.' },
    { icon: '▦', title: 'Quiero entender mejor mi información', description: 'Transformamos datos dispersos en tableros, reportes e indicadores fáciles de consultar.' },
    { icon: '↗', title: 'Quiero mejorar un proceso', description: 'Revisamos tu forma actual de trabajar y diseñamos una solución digital más clara, ordenada y eficiente.' },
    { icon: '✦', title: 'Quiero crear algo a medida', description: 'Construimos soluciones personalizadas cuando una herramienta genérica no se adapta a lo que necesitas.' },
  ] satisfies ContentCard[],
  capabilities: [
    { icon: '🌐', title: 'Presencia digital', description: 'Páginas web, landing pages y sitios corporativos para presentar tu empresa, captar prospectos o mostrar tus servicios.' },
    { icon: '▣', title: 'Sistemas y plataformas', description: 'Herramientas web o móviles hechas a medida para operar, administrar, consultar, registrar o dar seguimiento a procesos.' },
    { icon: '⚡', title: 'Automatización y bots', description: 'Flujos automatizados, asistentes digitales y bots que ayudan a reducir tareas manuales y responder más rápido.' },
    { icon: '🔗', title: 'Integraciones', description: 'Conectamos herramientas, plataformas, formularios, servicios y sistemas para que la información fluya mejor.' },
    { icon: '📊', title: 'Datos e inteligencia', description: 'Creamos tableros, reportes, indicadores y procesos de información para apoyar la toma de decisiones.' },
    { icon: '☁', title: 'Infraestructura tecnológica', description: 'Apoyamos con dominios, servidores, despliegues, ambientes y configuración técnica para que tus soluciones funcionen correctamente.' },
  ] satisfies ContentCard[],
  trustPoints: [
    { title: 'Tecnología adecuada para cada proyecto', description: 'No forzamos una solución genérica. Analizamos tu necesidad y elegimos la mejor forma de resolverla.' },
    { title: 'Preparado para crecer', description: 'Creamos herramientas que pueden iniciar de forma sencilla y evolucionar conforme tu empresa lo necesite.' },
    { title: 'Seguridad y estabilidad', description: 'Cuidamos que tus soluciones funcionen correctamente y tengan una base confiable.' },
    { title: 'Experiencia fácil de usar', description: 'Diseñamos herramientas claras para que tu equipo o tus clientes puedan adoptarlas con facilidad.' },
    { title: 'Integración con tu operación', description: 'La tecnología debe adaptarse a tu empresa, no obligar a tu empresa a trabajar de forma complicada.' },
    { title: 'Acompañamiento profesional', description: 'Te orientamos desde la idea inicial hasta la puesta en marcha y futuras mejoras.' },
  ] satisfies ContentCard[],
  solutions: [
    'Página web para presentar tu empresa', 'Landing page para vender un servicio o captar prospectos', 'Sistema web a medida', 'Aplicación móvil', 'Automatización con bots o flujos inteligentes', 'Integración entre herramientas', 'Dashboard para visualizar información', 'Reportes ejecutivos', 'Procesos de datos', 'Mejora o modernización de sistemas existentes', 'Herramientas internas', 'Plataforma completa para tu empresa', 'Solución digital personalizada',
  ],
  before: ['Ideas sin aterrizar', 'Procesos manuales', 'Herramientas desconectadas', 'Información dispersa', 'Tareas repetitivas', 'Reportes complicados', 'Falta de una solución adaptada'],
  after: ['Solución digital clara', 'Procesos mejor organizados', 'Herramientas conectadas', 'Información útil', 'Automatizaciones funcionando', 'Mejor visibilidad', 'Base tecnológica para crecer'],
  process: [
    { title: 'Escuchamos tu necesidad', description: 'Entendemos qué quieres resolver, mejorar o construir.' },
    { title: 'Analizamos la mejor ruta', description: 'Revisamos si conviene una página, sistema, app, automatización, integración, dashboard u otra solución.' },
    { title: 'Diseñamos la propuesta', description: 'Definimos alcance, prioridades, experiencia de usuario, flujo de trabajo y estrategia técnica.' },
    { title: 'Construimos la solución', description: 'Desarrollamos la herramienta con una base profesional, moderna y preparada para crecer.' },
    { title: 'Implementamos y mejoramos', description: 'Te ayudamos a ponerla en marcha y dejamos una base lista para futuras mejoras.' },
  ] satisfies ProcessStep[],
  useCases: [
    { title: 'Una página para presentar tu negocio', description: 'Comunica quién eres, qué ofreces y cómo pueden contactarte con una presencia profesional.' },
    { title: 'Una landing para promocionar un servicio', description: 'Enfoca el mensaje en una oferta específica y facilita que los prospectos pidan información.' },
    { title: 'Un sistema para operar mejor', description: 'Ordena registros, seguimientos, permisos y procesos internos en una herramienta clara.' },
    { title: 'Un bot para responder o canalizar solicitudes', description: 'Reduce tiempos de respuesta y dirige cada solicitud al lugar correcto.' },
    { title: 'Una automatización para ahorrar tiempo', description: 'Conecta pasos repetitivos para que tu equipo invierta energía en tareas de mayor valor.' },
    { title: 'Un tablero para entender tu información', description: 'Convierte datos dispersos en indicadores visuales y reportes fáciles de consultar.' },
    { title: 'Una app para conectar con clientes o equipo', description: 'Acerca servicios, información o flujos de trabajo a las personas que los necesitan.' },
    { title: 'Una integración entre herramientas', description: 'Haz que plataformas, formularios y sistemas compartan información de forma más ordenada.' },
    { title: 'Una plataforma completa para tu empresa', description: 'Centraliza operación, información y experiencia digital en una solución preparada para crecer.' },
    { title: 'Una solución totalmente personalizada', description: 'Diseñamos una ruta específica cuando tu necesidad no encaja en una herramienta genérica.' },
  ] satisfies ContentCard[],
  recommendations: [
    'Espacio reservado para recomendación de cliente.',
    'Aquí se mostrará la experiencia de empresas que hayan trabajado con HMODevelopers.',
    'Testimonio pendiente de publicación.',
  ],
  faqs: [
    { question: '¿Necesito saber qué tecnología usar?', answer: 'No. Tú nos cuentas qué quieres resolver y nosotros te ayudamos a definir la solución adecuada.' },
    { question: '¿Pueden crear algo desde cero?', answer: 'Sí. Podemos ayudarte desde una idea inicial hasta una solución funcional y lista para usarse.' },
    { question: '¿Solo hacen páginas web?', answer: 'No. Podemos crear páginas, sistemas, aplicaciones, automatizaciones, bots, integraciones, tableros, reportes y soluciones personalizadas.' },
    { question: '¿Pueden automatizar procesos?', answer: 'Sí. Podemos ayudarte a reducir tareas repetitivas mediante flujos automatizados, bots, integraciones o herramientas digitales.' },
    { question: '¿Pueden mejorar algo que ya tengo?', answer: 'Sí. Podemos revisar una solución existente, detectar mejoras y proponer una ruta de modernización.' },
    { question: '¿Puedo empezar con algo pequeño?', answer: 'Sí. Podemos iniciar con una primera versión y hacerla crecer por etapas.' },
    { question: '¿También ayudan con dominios, servidores o despliegues?', answer: 'Sí. Podemos apoyarte con la parte técnica necesaria para que tu solución funcione correctamente.' },
  ] satisfies FaqItem[],
};
