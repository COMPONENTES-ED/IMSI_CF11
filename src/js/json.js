export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Equipos de certificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de certificadores',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Calibración y mantenimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Parámetros de medición',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pruebas de rendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atenuación y pérdida',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diafonía y retardo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mapeo de cables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interpretación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de mediciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diagnóstico de problemas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Límites aceptables',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación y garantía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Informes de certificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Garantías extendidas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Registros y archivos',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF011_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Certificación de cableado estructurado: pruebas y estándares',
    Description:
      'El presente componente formativo enseña los fundamentos de la certificación de cableado estructurado, incluyendo el uso y mantenimiento de equipos, pruebas de rendimiento como atenuación y diafonía, y la interpretación de resultados. Los aprendices entenderán cómo documentar instalaciones y aplicar prácticas que aseguren la conformidad con estándares internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
}
