<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/4.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La certificación de cableado estructurado es un proceso requerido en
            la instalación y mantenimiento de infraestructuras de red modernas.
            En un entorno donde las comunicaciones de datos son cada vez más
            críticas, garantizar que el cableado cumpla con los estándares
            internacionales no es solo una cuestión de calidad, sino también de
            asegurar un funcionamiento eficiente y fiable de las aplicaciones de
            alta demanda. Este componente formativo ofrece a los estudiantes de
            nivel técnico una comprensión integral de los principios, pruebas y
            mejores prácticas asociadas con la certificación de cableado
            estructurado.
          </p>
          <div class="row justify-content-center bgi p-4 brad">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/5.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                En el primer apartado, se abordan los equipos de certificación,
                destacando los distintos tipos de certificadores disponibles y
                la importancia de mantenerlos calibrados y en buen estado. Una
                correcta selección y uso de estos equipos ayuda a obtener
                mediciones precisas que validen la calidad del cableado. Se
                describen las características y aplicaciones de certificadores
                básicos, avanzados y multifunción, junto con las técnicas de
                mantenimiento y la relevancia de parámetros como la atenuación y
                la pérdida de retorno.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        El segundo apartado profundiza en las pruebas de rendimiento,
        enfocándose en parámetros críticos como la diafonía y el retardo de
        propagación. Estas pruebas permiten evaluar la capacidad del cableado
        para manejar altas velocidades de transmisión sin interferencias ni
        retrasos. Además, se explica la importancia de realizar un mapeo preciso
        de los cables para detectar y corregir errores en la instalación,
        garantizando así un rendimiento óptimo de la red.
      </p>
      <div class="row justify-content-center align-items-center my-5">
        <div class="col order-lg-1 order-2">
          <div class="bg2 p-4">
            <p class="mb-0">
              Finalmente, se discute la interpretación de los resultados
              obtenidos y la documentación necesaria para respaldar la
              certificación. Se destaca la importancia de generar informes
              detallados, que no solo validan la instalación, sino que también
              sirven como herramienta para gestionar futuras garantías y
              mantener registros precisos. Este enfoque holístico permite a los
              estudiantes no solo entender el proceso técnico, sino también su
              relevancia en el contexto de gestión de proyectos de redes.
            </p>
          </div>
        </div>
        <div class="col-lg-auto pt-lg-0 pt-md-4 order-lg-2 order-1">
          <img class="img-a img-t" src="@/assets/curso/temas/6.png" alt="" />
        </div>
      </div>
      <h5 class="mb-4">
        ¡Bienvenido a explorar los conceptos y prácticas fundamentales que
        garantizan la calidad y el rendimiento de las instalaciones de red.!
      </h5>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rraVJK8RICo?si=EwN5hhskEV4HXGNi"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </div>
            <figcaption>
              Video. Certificación de cableado estructurado: pruebas y
              estándares
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
