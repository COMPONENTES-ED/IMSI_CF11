<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Interpretación de resultados</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/46.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bgi p-3 h-100 j1">
            <p class="mb-0">
              La interpretación de los resultados obtenidos de las pruebas de
              certificación de cableado estructurado garantiza que la red
              funcione conforme a los estándares de rendimiento requeridos.
              Comprender y analizar los datos recogidos permite a los técnicos
              identificar problemas y tomar medidas correctivas para optimizar
              la infraestructura de la red.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_1" class="titulo-segundo color-acento-contenido">
        <h2>3.1 Análisis de mediciones</h2>
      </div>
      <p>
        El análisis de las mediciones es el primer paso para evaluar si el
        cableado cumple con las especificaciones técnicas. Los resultados de las
        pruebas, que incluyen parámetros como atenuación, diafonía y retardo de
        propagación, deben ser comparados con los valores límite establecidos
        por los estándares de la industria, como TIA/EIA e ISO/IEC.
      </p>
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-6 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="bg13 brad h-100">
            <img src="@/assets/curso/temas/47.png" alt="alt" />
            <div class="p-4">
              <h4 class="mb-3">Interpretar valores en decibelios (dB)</h4>
              <p class="mb-0">
                Las mediciones de parámetros como la atenuación y la pérdida de
                retorno se expresan en dB. Es importante saber que un valor más
                bajo de atenuación es mejor, mientras que un valor más alto de
                pérdida de retorno es deseable.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="bg13 brad h-100">
            <img src="@/assets/curso/temas/48.png" alt="alt" />
            <div class="p-4">
              <h4 class="mb-3">Uso de <i>software</i> de certificación</h4>
              <p class="mb-0">
                Los equipos de certificación suelen venir con
                <i>software</i> que facilita el análisis de los resultados. Este
                <i>software</i> puede generar informes automáticos que indican
                si las pruebas han sido exitosas o si se requiere una
                intervención.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <h5>Ejemplo de análisis</h5>
          <p class="mb-0">
            Si una prueba de atenuación muestra un valor que supera el límite
            permitido, el técnico debe investigar las posibles causas, como una
            conexión deficiente o un cable de baja calidad. Del mismo modo, si
            la diafonía (NEXT o FEXT) es alta, podría indicar que los pares de
            cables no están lo suficientemente trenzados o que los conectores no
            están correctamente instalados.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/49.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_2" class="titulo-segundo color-acento-contenido">
        <h2>3.2 Diagnóstico de problemas</h2>
      </div>
      <p>
        Una vez analizados los resultados, el siguiente paso es diagnosticar los
        problemas específicos que afectan el rendimiento del cableado. Este
        diagnóstico puede requerir una inspección física del cableado o la
        realización de pruebas adicionales para determinar el origen exacto de
        las deficiencias.
      </p>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Problemas comunes y sus soluciones</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/50.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Alta atenuación ">
              <p>
                Puede ser causada por un cable de longitud excesiva, conexiones
                defectuosas o daños físicos en el cable. Solución: Reemplazar el
                cable con uno de menor longitud o mejor calidad y revisar las
                conexiones.
              </p>
            </div>
            <div titulo="Diafonía excesiva ">
              <p>
                Generalmente resulta de pares de cables trenzados de manera
                inadecuada o conectores defectuosos. Solución: Rehacer las
                terminaciones de los cables y asegurar un trenzado adecuado.
              </p>
            </div>
            <div titulo="Pérdida de retorno alta ">
              <p>
                Puede deberse a una instalación incorrecta de los conectores o a
                variaciones en la impedancia. Solución: Reinstalar o reemplazar
                los conectores y revisar que el cableado cumpla con las
                especificaciones.
              </p>
            </div>
            <div titulo="Herramientas de diagnóstico ">
              <p>
                Los certificadores avanzados suelen ofrecer funciones de
                diagnóstico que ayudan a identificar rápidamente las áreas
                problemáticas. Estos equipos pueden indicar la ubicación
                aproximada de un fallo, lo que facilita las reparaciones.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_3" class="titulo-segundo color-acento-contenido">
        <h2>3.3 Límites aceptables</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/51.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg1 p-3 h-100 j1">
            <p class="mb-0">
              Los límites aceptables para cada parámetro están definidos por los
              estándares internacionales y varían según la categoría del cable y
              el tipo de aplicación. Es fundamental conocer estos límites para
              determinar si el cableado es adecuado para las aplicaciones
              previstas, como redes <i>gigabit</i>, VoIP o transmisión de video
              en alta definición.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-start my-4">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Estándares de referencia</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg8 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-6 my-2">
              <div class="bg4 p-4 brad h-100">
                <img
                  class="img-t mb-4"
                  src="@/assets/curso/temas/52.png"
                  alt=""
                />
                <h5 class="mb-4">TIA/EIA y ISO/IEC.</h5>
                <p class="mb-0">
                  Estos estándares establecen los requisitos mínimos para
                  parámetros como la atenuación, la diafonía, el retardo de
                  propagación y la pérdida de retorno. Por ejemplo, para un
                  cable de categoría 6, la atenuación no debe exceder un cierto
                  valor para garantizar un rendimiento adecuado.
                </p>
              </div>
            </div>
            <div class="col-lg-6 my-2">
              <div class="bg2 p-4 brad h-100">
                <img
                  class="img-t mb-4"
                  src="@/assets/curso/temas/53.png"
                  alt=""
                />
                <h5 class="mb-4">Categorías de cables.</h5>
                <p class="mb-0">
                  Los límites varían según la categoría del cable (Cat 5e, Cat
                  6, Cat 6a, etc.). A medida que la categoría del cable aumenta,
                  los estándares permiten valores más estrictos para la
                  atenuación y la diafonía.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 1.</h5>
            <span>Características y consideraciones de formatos comunes</span>
          </div>
          <div class="tabla-a color-acento-botones text-center mb-5">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Categoría de Cable</th>
                  <th>Velocidad Máxima</th>
                  <th>Ancho de Banda</th>
                  <th>Frecuencia Máxima</th>
                  <th>Aplicaciones Comunes</th>
                  <th>Notas Importantes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fast-bold bgt1">Cat 5</td>
                  <td>Hasta 100 Mbps</td>
                  <td>100 MHz</td>
                  <td>100 MHz</td>
                  <td>Redes <i>Ethernet</i> estándar (Fast <i>Ethernet</i>)</td>
                  <td>
                    Descontinuada; reemplazada por Cat 5e debido a mejoras en la
                    diafonía y rendimiento.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">Cat 5e</td>
                  <td>Hasta 1 Gbps</td>
                  <td>100 MHz</td>
                  <td>100 MHz</td>
                  <td>
                    Redes <i>Ethernet</i> <i>gigabit</i>, VoIP, transmisión de
                    video
                  </td>
                  <td>
                    Mayor control de diafonía en comparación con Cat 5; sigue
                    siendo común en instalaciones.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">Cat 6</td>
                  <td>Hasta 1 Gbps (10 Gbps a distancias cortas)</td>
                  <td>250 MHz</td>
                  <td>250 MHz</td>
                  <td>
                    Redes <i>gigabit</i>, aplicaciones multimedia,
                    videoconferencia
                  </td>
                  <td>
                    Recomendado para redes que necesitan alta velocidad y menor
                    interferencia.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">Cat 6a</td>
                  <td>Hasta 10 Gbps</td>
                  <td>500 MHz</td>
                  <td>500 MHz</td>
                  <td>Centros de datos, redes de alta densidad</td>
                  <td>
                    Mayor blindaje contra interferencias; ideal para largas
                    distancias en entornos exigentes.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">Cat 7</td>
                  <td>Hasta 10 Gbps</td>
                  <td>600 MHz</td>
                  <td>600 MHz</td>
                  <td>
                    Redes industriales, transmisión de video de alta calidad
                  </td>
                  <td>
                    Cables blindados individualmente (S/FTP) para una mejor
                    protección contra interferencias.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold bgt1">Cat 8</td>
                  <td>Hasta 40 Gbps</td>
                  <td>2000 MHz</td>
                  <td>2000 MHz</td>
                  <td>Centros de datos, aplicaciones de servidores</td>
                  <td>
                    Uso principalmente en centros de datos; diseñado para
                    conexiones de corta distancia.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-start mb-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Importancia de cumplir con los límites</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row justify-content-center bgi p-4 brad">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/54.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                No respetar los límites establecidos puede tener consecuencias
                graves, como la inestabilidad de la red, la pérdida de paquetes
                de datos y un rendimiento deficiente en aplicaciones críticas.
                Asegurar que todas las mediciones estén dentro de los límites
                aceptables es un paso fundamental para una red fiable y
                duradera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
