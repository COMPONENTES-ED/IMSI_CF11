<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Equipos de certificación',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2024, 12 junio). Conceptos básicos y componentes de una red.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=xaXbMzXJL3U',
        },
        {
          tema: '1. Equipos de certificación',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023e, marzo 25). Introducción - Red física de datos.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=4PsaVqMeZJY',
        },
        {
          tema: '1. Equipos de certificación',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023d, marzo 25). Centros de datos.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=w4h4vsglRe4',
        },
        {
          tema: '2. Pruebas de rendimiento',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 23). Importancia de los equipos certificadores y los resultados de prueba.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=c0XkdVBPHlE>',
        },
        {
          tema: '2. Pruebas de rendimiento',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023f, marzo 27). Importancia de la correcta instalación de redes de fibra óptica 2023.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=RBa6CSZDwaQ',
        },
        {
          tema: '2. Pruebas de rendimiento',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023g, marzo 27). Importancia de la instalación y el montaje del sistema eléctrico de una infraestructura de (TI).',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=EKokaMonPPI',
        },
        {
          tema: '4. Documentación y garantía',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, marzo 23). Introducción a la documentación técnica de la instalación eléctrica.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=rtFjKCqvo04',
        },
        {
          tema: '4. Documentación y garantía',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). Importancia de la ficha técnica en la infraestructura tecnológica.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=zKLQxejRQ-s',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
