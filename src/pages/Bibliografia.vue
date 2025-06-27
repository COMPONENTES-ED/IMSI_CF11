<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'ANSI/TIA-1152-A. (2016). Requisitos para Instrumentos de Prueba de Campo y Mediciones para Cableado de Par Trenzado Balanceado. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'ANSI/TIA-568.3-D. (2016). Estándar de Cableado y Componentes de Fibra Óptica. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'BICSI. (2018). Manual de Métodos de Instalación de Sistemas de Tecnología de la Información (7ª ed.). BICSI.',
      },
      {
        referencia:
          'CENELEC EN 50173-1. (2018). Tecnología de la Información - Sistemas de Cableado Genérico - Parte 1: Requisitos Generales. Comité Europeo de Normalización Electrotécnica.',
      },
      {
        referencia:
          'CENELEC EN 50346. (2002). Tecnología de la Información - Instalación de Cableado - Pruebas del Cableado Instalado. Comité Europeo de Normalización Electrotécnica.',
      },
      {
        referencia:
          'Código Eléctrico Nacional (NEC). (2020). NFPA 70: Código Eléctrico Nacional. Asociación Nacional de Protección contra Incendios.',
      },
      {
        referencia:
          'Fluke Networks. (2015). Comprendiendo los Requisitos para Certificar el Cableado Categoría 6A. Fluke Networks.',
      },
      {
        referencia:
          'ISO/IEC 11801-1. (2017). Tecnología de la Información - Cableado Genérico para Locales de Clientes - Parte 1: Requisitos Generales. Organización Internacional de Normalización.',
      },
      {
        referencia:
          'ISO/IEC 14763-3. (2014). Tecnología de la Información - Implementación y Operación del Cableado en Locales de Clientes - Parte 3: Pruebas del Cableado de Fibra Óptica. Organización Internacional de Normalización.',
      },
      {
        referencia:
          'ISO/IEC 61935-1. (2019). Pruebas del Cableado de Comunicación Balanceado de Acuerdo con ISO/IEC 11801 - Parte 1: Cableado Instalado. Organización Internacional de Normalización.',
      },
      {
        referencia:
          'Johnson, H. W., & Graham, M. (2003). Propagación de Señales de Alta Velocidad: Magia Negra Avanzada. Prentice Hall.',
      },
      {
        referencia:
          'Kuchta, D. M., & Tolley, D. (2014). Cableado: La Guía Completa para Redes de Cobre y Fibra Óptica (5ª ed.). Sybex.',
      },
      {
        referencia:
          'Miller, R. (2012). Cableado de Redes Iluminado. Jones & Bartlett Learning',
      },
      {
        referencia:
          'Panduit Corp. (2016). Guías de Diseño de Cableado Estructurado. Panduit Corp.',
      },
      {
        referencia:
          'Siemon Company. (2017). Instalación y Mantenimiento de Cableado: Mejores Prácticas. Siemon Company.',
      },
      {
        referencia:
          'TIA-942-B. (2017). Estándar de Infraestructura de Telecomunicaciones para Centros de Datos. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-184-A. (2017). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-190. (2011). Guías sobre Vías Compartidas y Envolventes Compartidas. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5019. (2019). Cableado Estructurado de Alto Rendimiento para Centros de Datos. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5021. (2019). Guías para la Evaluación y Mitigación del Cableado Categoría 6 Instalado para Soportar 2.5GBASE-T y 5GBASE-T. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5028. (2020). Guías para la Evaluación y Mitigación del Cableado Categoría 5e Instalado para Soportar 2.5GBASE-T. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5048. (2018). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado de 4 Pares. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5069. (2020). Guías para la Evaluación y Mitigación del Cableado Categoría 6A Instalado para Soportar 25GBASE-T. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5079. (2021). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado de 4 Pares. Asociación de la Industria de las Telecomunicaciones.',
      },
      {
        referencia:
          'TIA-TSB-5080. (2021). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado de 4 Pares. Asociación de la Industria de las Telecomunicaciones.',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
