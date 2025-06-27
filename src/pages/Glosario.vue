<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Atenuación',
          significado:
            'Disminución de la intensidad de la señal a medida que viaja por el cable, medida en decibelios (dB).',
        },
        {
          termino: 'BIOS/UEFI',
          significado:
            '<i>Software</i> de bajo nivel que inicia y gestiona el <i>hardware</i> del sistema antes de cargar el sistema operativo.',
        },
        {
          termino: 'Calibración',
          significado:
            'Proceso de ajuste de un equipo de medición para que sus lecturas sean precisas y conformes a estándares.',
        },
        {
          termino: 'Categoría de cable',
          significado:
            'Clasificación que indica las especificaciones de rendimiento de un cable de red, como Cat5e, Cat6, etc.',
        },
        {
          termino: 'Certificación',
          significado:
            'Proceso de validación que asegura que el cableado cumple con los estándares de calidad y rendimiento.',
        },
        {
          termino: 'Configuración',
          significado:
            'Ajustes realizados en un sistema operativo o dispositivo para optimizar su rendimiento o funcionalidad.',
        },
        {
          termino: 'Diafonía (NEXT/FEXT)',
          significado:
            'Interferencia entre señales transmitidas por pares de cables cercanos. NEXT es la interferencia cercana, FEXT es la lejana.',
        },
        {
          termino: 'Documentación',
          significado:
            'Registro detallado de pruebas, configuraciones y resultados utilizados para la gestión y el soporte técnico.',
        },
        {
          termino: 'Equipo de certificación',
          significado:
            'Dispositivos utilizados para realizar pruebas en el cableado y validar su rendimiento y conformidad.',
        },
        {
          termino: 'Garantía extendida',
          significado:
            'Protección adicional ofrecida por fabricantes para asegurar el funcionamiento correcto del cableado a largo plazo.',
        },
        {
          termino: 'Impedancia',
          significado:
            'Resistencia total que un cable ofrece al flujo de corriente alterna, importante para minimizar la pérdida de señal.',
        },
        {
          termino: 'Instalación',
          significado:
            'Proceso de colocar y configurar físicamente el cableado y los componentes de red en un entorno específico.',
        },
        {
          termino: 'Mapeo de cables',
          significado:
            'Proceso que verifica que los conductores de un cable estén correctamente conectados en ambos extremos.',
        },
        {
          termino: 'Mantenimiento preventivo',
          significado:
            'Inspecciones y ajustes periódicos realizados para mantener los equipos y sistemas en buen estado.',
        },
        {
          termino: 'Par trenzado',
          significado:
            'Técnica en la que dos conductores eléctricos se tuercen para reducir la interferencia electromagnética.',
        },
        {
          termino: 'Pérdida de retorno',
          significado:
            'Cantidad de señal que se refleja de vuelta al transmisor debido a discontinuidades o fallos en el cableado.',
        },
        {
          termino: 'Pruebas de rendimiento',
          significado:
            'Evaluaciones que miden la calidad del cableado en términos de parámetros como atenuación, diafonía y retardo.',
        },
        {
          termino: 'Retardo de propagación',
          significado:
            'Tiempo que tarda una señal en viajar de un extremo al otro del cable.',
        },
        {
          termino: '<i>Skew</i> de retardo',
          significado:
            'Diferencia en el tiempo de llegada de las señales a través de diferentes pares de cables, afectando la sincronización.',
        },
        {
          termino: '<i>Software</i> de certificación',
          significado:
            'Programas que acompañan a los equipos de certificación, usados para analizar y documentar los resultados de las pruebas.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
