<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/1.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Este componente aborda los principios y técnicas para la
                certificación de cableado estructurado, garantizando la calidad
                y el rendimiento de las redes de datos. Inicia con la
                preparación del entorno y la selección adecuada de los equipos
                de certificación, seguidos de pruebas como la medición de
                atenuación, diafonía y retardo, que permiten evaluar la
                capacidad del cableado para soportar aplicaciones modernas.
              </p>
            </div>
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/2.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center bg1 p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/3.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Se exploran también los métodos de diagnóstico para identificar
                problemas, así como las estrategias de corrección necesarias,
                como el reemplazo de componentes defectuosos y el ajuste de
                conexiones, asegurando que la infraestructura cumpla con los
                estándares internacionales. La precisión en estas etapas es
                fundamental para optimizar la transmisión de datos y prevenir
                interferencias que puedan afectar el funcionamiento de la red.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5">
        Complementariamente, el componente enfatiza la importancia de la
        documentación completa y precisa, incluyendo la generación de informes
        detallados que validan las instalaciones y facilitan el soporte técnico
        futuro. Se destaca la gestión de garantías y la planificación de
        mantenimiento preventivo, permitiendo que las redes permanezcan
        funcionales y fiables a lo largo del tiempo.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 bgs p-4 brad">
          <figure>
            <img
              class="img-a img-t"
              src="@/assets/curso/sintesisC11.svg"
              alt="La imagen muestra la «Síntesis temática del componente», y allí se ilustra el proceso de certificación de cableado estructurado, que abarca desde la preparación y pruebas de rendimiento hasta el diagnóstico, corrección, y la validación con documentación final."
            />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/SintesisC11.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
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
