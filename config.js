// ============================================================
//  Configuración del carrusel de Power BI para TV
//  Edita este archivo y recarga la página.
// ============================================================
window.PBI_TV_CONFIG = {
  // URL del informe. Sirve cualquiera de estas dos:
  //  - "Publicar en la web" (público):
  //      https://app.powerbi.com/view?r=XXXXXXXX
  //  - "Insertar informe > Sitio web o portal" (requiere que el navegador
  //    de la TV haya iniciado sesión en Power BI):
  //      https://app.powerbi.com/reportEmbed?reportId=XXXX&autoAuth=true&ctid=XXXX
  // PBI_MARKETING_trafico (Publicar en la web)
  reportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDI2OWJmNTItMGNmYy00MmM2LThhOWItOTZhOGMxNDhmNmQ3IiwidCI6ImE1ZGVjZDEwLTkxNjUtNDYzNi1hNjRjLTc5NTgwMDQyMTVmYSIsImMiOjR9",

  // Páginas a rotar, en orden.
  //  pageName: identificador interno de la página (el último tramo de la URL
  //            al abrir esa página en app.powerbi.com, p. ej. "ReportSection1a2b3c"
  //            o un código hexadecimal).
  //  seconds:  tiempo en pantalla (si se omite, usa defaultSeconds).
  //  title:    texto que aparece en la esquina (opcional).
  //  url:      opcional; si lo pones, se usa tal cual en lugar de reportUrl + pageName
  //            (sirve para mezclar páginas de distintos informes).
  pages: [
    { pageName: "2b107dd70d9d3d40b005", title: "Sesiones", seconds: 60 },
    { pageName: "36f02ce5b0a7007748dd", title: "Unbounce", seconds: 60 },
    { pageName: "a7a3c54710ea8e09c060", title: "WhatsApp", seconds: 60 },
    { pageName: "e5617d570ab76aca7060", title: "CRM",      seconds: 60 },
  ],

  defaultSeconds: 60,

  // Segundos antes del cambio en que se empieza a cargar la siguiente página
  // en segundo plano, para que aparezca ya dibujada. Súbelo si tus informes tardan.
  preloadSeconds: 20,

  // Duración del fundido entre páginas (ms).
  transitionMs: 900,

  // Parámetros añadidos a la URL de Power BI. Ocultan los paneles de
  // filtros y de páginas en los informes "reportEmbed".
  extraParams: {
    filterPaneEnabled: "false",
    navContentPaneEnabled: "false",
  },

  // Recorta píxeles arriba/abajo del informe (útil para esconder la barra
  // inferior gris de "Publicar en la web"; prueba con 36).
  cropTopPx: 0,
  cropBottomPx: 0,

  // Elementos superpuestos
  showProgressBar: true,
  showPageTitle: true,
  showClock: true,
  showDate: true,   // fecha junto a la hora: "Jueves 19 de noviembre · 15:23"

  // Si es false, una capa transparente cubre el informe: el teclado/mando
  // siempre controla el carrusel y nadie puede tocar filtros sin querer.
  interactive: false,

  // Recarga completa de la página cada N horas (libera memoria en equipos
  // que pasan días encendidos). 0 = nunca.
  reloadEveryHours: 1,
};
