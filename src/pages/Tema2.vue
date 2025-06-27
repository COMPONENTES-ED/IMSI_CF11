<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Pruebas de rendimiento</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/22.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <p class="mb-0">
            Las pruebas de rendimiento se aplican para verificar que el cableado
            estructurado cumpla con los requisitos de calidad y pueda soportar
            las demandas de las aplicaciones modernas. Estas pruebas permiten
            identificar problemas relacionados con la pérdida de señal,
            interferencias y otras deficiencias que pueden afectar la eficacia
            de la red.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_1" class="titulo-segundo color-acento-contenido">
        <h2>2.1 Atenuación y pérdida</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center my-4">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/23.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La atenuación y la pérdida de señal son factores fundamentales
                que afectan la calidad y la eficiencia de la transmisión de
                datos en los sistemas de cableado estructurado. Una correcta
                evaluación y manejo de estos fenómenos garantiza que el cableado
                sea capaz de soportar las demandas de las redes modernas sin
                interrupciones o degradación significativa del rendimiento.
              </p>
            </div>
          </div>
          <div class="bgi p-4 brad">
            <p class="mb-0">
              La atenuación se define como la reducción de la intensidad de la
              señal a medida que esta se propaga a través del cable. Es un
              fenómeno inevitable debido a la resistencia eléctrica inherente
              del material del cable y a las interferencias que la señal
              encuentra en su camino. La atenuación se mide en decibelios (dB) y
              es un parámetro crítico que debe ser minimizado para asegurar la
              eficacia de la red.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1 d-none d-lg-block">
          <img class="img-a img-t" src="@/assets/curso/temas/24.png" alt="" />
        </div>
      </div>
      <div class="row bg8 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-start">
            <div class="col-auto mb-lg-4 mb-0">
              <div class="list">
                <div class="list__item">
                  <div class="list__item__icon">
                    <img src="@/assets/curso/temas/icon.svg" alt="" />
                  </div>
                </div>
                <div class="list__txt bgicon text-white p-0 px-4">
                  <h3 class="mb-1">Factores que influyen en la atenuación</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-3 d-none d-lg-block j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/25.png"
                alt=""
              />
            </div>
            <div class="col-lg-9">
              <div class="bg-slyder p-3 brad">
                <CarouselRED tipo="b">
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3 d-none d-lg-block">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/26.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-8 my-lg-0 my-3">
                        <h5>Longitud del cable</h5>
                        <p class="mb-0">
                          A medida que la distancia entre el punto de
                          transmisión y el de recepción aumenta, también lo hace
                          la atenuación. Por lo tanto, se deben seguir las
                          recomendaciones de longitud máxima establecidas por
                          los estándares.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3 d-none d-lg-block">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/26.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-8 my-lg-0 my-3">
                        <h5>Calidad del material del cable</h5>
                        <p class="mb-0">
                          Cables fabricados con materiales de baja calidad, como
                          aleaciones en lugar de cobre puro, presentan una mayor
                          atenuación.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3 d-none d-lg-block">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/26.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-8 my-lg-0 my-3">
                        <h5>Frecuencia de la señal</h5>
                        <p class="mb-0">
                          Las señales de alta frecuencia experimentan una
                          atenuación mayor que las de baja frecuencia. Esto es
                          particularmente relevante en redes que deben manejar
                          grandes volúmenes de datos a alta velocidad, como las
                          conexiones <i>gigabit</i> y superiores.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3 d-none d-lg-block">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/26.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-8 my-lg-0 my-3">
                        <h5>Condiciones ambientales:</h5>
                        <p class="mb-0">
                          La temperatura y la humedad pueden afectar las
                          propiedades eléctricas del cable, causando variaciones
                          en la atenuación.
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselRED>
              </div>
            </div>
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
              <h3 class="mb-1">Importancia de medir la atenuación</h3>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-4">
        La medición de la atenuación se realiza con equipos de certificación
        avanzados que envían una señal desde un extremo del cable y miden la
        intensidad de la señal en el otro extremo. Los resultados se comparan
        con los límites establecidos por los estándares de la industria, como
        TIA/EIA e ISO/IEC.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3 j1">
          <ol class="lista-ol--cuadro fa-ul">
            <li>
              <div class="lista-ol--cuadro__vineta"><span>1</span></div>
              <span
                ><b>Relevancia en la red:</b> Una atenuación excesiva puede
                llevar a la pérdida de datos, retransmisiones y un rendimiento
                deficiente de la red. Las aplicaciones sensibles, como las
                videoconferencias o las transmisiones en tiempo real, se ven
                particularmente afectadas por problemas de atenuación.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>2</span></div>
              <span
                ><b>Pruebas de certificación:</b> Antes de que una instalación
                se considere certificada, debe superar las pruebas de
                atenuación. Estas pruebas aseguran que la infraestructura de
                cableado pueda manejar las cargas de datos requeridas sin
                pérdida significativa de calidad.</span
              >
            </li>
            <hr />
          </ol>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/27.png" alt="" />
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
              <h3 class="mb-1">Pérdida de retorno</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg10 p-4 brad h-100">
            <p class="mb-0">
              La pérdida de retorno (<i>Return Loss</i>) es otra medida básica
              en la certificación de cableado estructurado. Se refiere a la
              cantidad de señal que se refleja de vuelta hacia el transmisor en
              lugar de continuar hacia el receptor. Estas reflexiones ocurren
              debido a discontinuidades en el cableado, como variaciones de
              impedancia, conexiones mal hechas o defectos en los cables.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/28.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-t mb-4" src="@/assets/curso/temas/29.png" alt="" />
          <p>
            <b>Medición de la pérdida de retorno:</b> Los certificadores
            avanzados miden la cantidad de señal reflejada y proporcionan un
            valor en decibelios (dB). Un valor alto de pérdida de retorno indica
            que una menor cantidad de señal se refleja, lo cual es deseable, ya
            que significa que la transmisión es más eficiente y hay menos
            interferencia con la señal que sigue su curso.
          </p>
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Causas comunes de la pérdida de retorno</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Conectores y terminaciones incorrectas">
              <p>
                Un mal crimpado o el uso de conectores de baja calidad pueden
                causar discontinuidades en el cableado, generando reflexiones de
                la señal.
              </p>
            </div>
            <div titulo="Variaciones en la impedancia">
              <p>
                Cualquier cambio en las propiedades del cable, como torceduras o
                empalmes incorrectos, afecta la impedancia y provoca la pérdida
                de retorno.
              </p>
            </div>
            <div titulo="Desgaste y deterioro del cable">
              <p>
                Cables dañados por factores ambientales o por el uso prolongado
                pueden tener puntos de alta pérdida de retorno, afectando el
                rendimiento global de la red.
              </p>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/31.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">
                Importancia de la atenuación y la pérdida de retorno
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/30.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3 j1">
          <ol class="lista-ol--cuadro fa-ul">
            <li>
              <div class="lista-ol--cuadro__vineta"><span>1</span></div>
              <span
                ><b>Eficiencia de la red:</b> Mantener la atenuación y la
                pérdida de retorno dentro de los límites aceptables es necesario
                para una transmisión de datos fiable. Las redes que no cumplen
                con estos parámetros tienden a experimentar problemas como
                caídas de velocidad, errores de transmisión y pérdida de
                paquetes.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>2</span></div>
              <span
                ><b>Impacto en aplicaciones sensibles:</b> Aplicaciones como
                VoIP, <i>streaming</i> de video y sistemas de datos en tiempo
                real dependen de una red que minimice la pérdida de señal.
                Incluso pequeñas desviaciones en estos parámetros pueden tener
                un impacto significativo en el rendimiento.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>3</span></div>
              <span
                ><b>Cumplimiento de estándares:</b> Las normativas
                internacionales exigen que las instalaciones de cableado
                estructurado se certifiquen para garantizar que la
                infraestructura sea adecuada para soportar las aplicaciones
                previstas.</span
              >
            </li>
            <hr />
          </ol>
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">
                Estrategias para minimizar la atenuación y la pérdida de retorno
              </h3>
            </div>
          </div>
        </div>
      </div>
      <TabsC class="color-acento-contenido mb-5">
        <div
          class="py-3 py-md-4 bg11"
          titulo="Elección de materiales de alta calidad"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/32.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Elección de materiales de alta calidad</h5>
              <p class="mb-0">
                Usar cables con conductores de cobre puro y blindaje adecuado
                reduce la atenuación. Además, elegir conectores de buena calidad
                ayuda a mantener la impedancia uniforme a lo largo de toda la
                instalación.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Prácticas de instalación correctas"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/33.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Prácticas de instalación correctas</h5>
              <p class="mb-0">
                Evitar doblar o torcer los cables de manera excesiva y
                asegurarse de que las conexiones se realicen de acuerdo con las
                especificaciones técnicas. Utilizar herramientas adecuadas para
                crimpar los conectores garantiza terminaciones uniformes.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Mantenimiento y revisión periódica"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/34.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Mantenimiento y revisión periódica</h5>
              <p class="mb-0">
                Realizar inspecciones regulares de la infraestructura de
                cableado para detectar y corregir problemas antes de que afecten
                el rendimiento de la red. Reemplazar cables o conectores
                deteriorados es una parte primordial del mantenimiento.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
      <Separador> </Separador>
      <div id="t_2_2" class="titulo-segundo color-acento-contenido">
        <h2>2.2 Diafonía y retardo</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <p>
            La diafonía y el retardo son parámetros importantes que influyen en
            la capacidad del cableado para transmitir datos de manera eficiente.
            Ambos deben ser cuidadosamente evaluados para asegurar que no haya
            interferencias ni retrasos que comprometan la calidad de la
            comunicación.
          </p>
          <div
            class="row justify-content-center align-items-center bg12 p-4 brad mb-4"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/36.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <h5>Diafonía</h5>
              <p class="mb-0">
                La diafonía ocurre cuando la señal transmitida por un par de
                cables induce una interferencia no deseada en otro par de cables
                cercano. Se mide de dos formas: NEXT (<i>Near-End Crosstalk</i>)
                y FEXT (<i>Far-End Crosstalk</i>).
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6 my-lg-0 my-3">
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/37.png"
                alt=""
              />
              <p class="mb-0">
                <b>1. NEXT (<i>Near-End Crosstalk):</i></b> Este tipo de
                diafonía se mide cerca del punto de transmisión y evalúa cuánto
                de la señal se acopla a un par adyacente en el extremo de
                transmisión. Un valor bajo de NEXT es deseable, ya que indica
                poca interferencia.
              </p>
            </div>
            <div class="col-lg-6 my-lg-0 my-3">
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/38.png"
                alt=""
              />
              <p class="mb-0">
                <b>2. FEXT (<i>Far-End Crosstalk):</i></b> Se mide en el extremo
                opuesto al de la transmisión y evalúa la cantidad de señal que
                se acopla a otro par en el extremo receptor. Al igual que con
                NEXT, un valor bajo de FEXT es preferible para minimizar las
                interferencias.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/35.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Factores que afectan la diafonía:</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/39.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Diseño del cable ">
              <p>
                Cables de par trenzado están diseñados para minimizar la
                diafonía mediante la torsión de los pares, lo que reduce la
                interferencia entre ellos.
              </p>
            </div>
            <div titulo="Calidad de los conectores ">
              <p>
                Conectores mal fabricados o dañados pueden aumentar la diafonía,
                especialmente en instalaciones donde la calidad de la señal es
                crítica.
              </p>
            </div>
            <div titulo="Proximidad de los cables ">
              <p>
                La proximidad entre cables puede exacerbar la diafonía. Separar
                adecuadamente los cables y mantener el trenzado cerca de los
                conectores ayuda a reducir la interferencia.
              </p>
            </div>
            <div titulo="Retardo y &lt;i&gt;skew&lt;/i&gt; de retardo ">
              <p>
                El retardo se refiere al tiempo que tarda una señal en viajar de
                un extremo al otro del cable. El <i>skew</i> de retardo es la
                diferencia en el tiempo de llegada de las señales en diferentes
                pares de cables, lo que puede afectar la sincronización en
                aplicaciones de alta velocidad.
              </p>
            </div>
            <div titulo="Retardo de propagación ">
              <p>
                Este parámetro mide la velocidad de la señal en el cable.
                Factores como la longitud y el tipo de material del cable pueden
                influir en el retardo de propagación. Un retardo excesivo puede
                resultar en problemas de sincronización, especialmente en
                aplicaciones como la transmisión de video en tiempo real.
              </p>
            </div>
            <div titulo="&lt;i&gt;Skew&lt;/i&gt; de retardo ">
              <p>
                La diferencia en los tiempos de llegada de las señales en
                distintos pares de cables es crítica en redes <i>gigabit</i> y
                superiores. Un <i>skew</i> de retardo elevado puede provocar
                fallos de sincronización, lo que afectará la eficacia general de
                la red.
              </p>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">
                Soluciones para mitigar el retardo y el <i>skew</i>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3 j1">
          <ol class="lista-ol--cuadro fa-ul">
            <li>
              <div class="lista-ol--cuadro__vineta"><span>1</span></div>
              <span
                ><b>Utilizar cables de alta calidad:</b> Los cables diseñados
                específicamente para aplicaciones de alta velocidad tienden a
                tener un mejor rendimiento en términos de retardo y
                <i>skew</i>.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>2</span></div>
              <span
                ><b>Instalación adecuada:</b> Asegurarse de que los cables no
                estén doblados ni sujetos a tensiones innecesarias puede ayudar
                a mantener la uniformidad del retardo en todos los pares.</span
              >
            </li>
            <hr />
          </ol>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/40.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-contenido">
        <h2>2.3 Mapeo de cables</h2>
      </div>
      <div
        class="row justify-content-center align-items-center bg1 p-4 brad mb-5"
      >
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/41.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            El mapeo de cables es un procedimiento que verifica que cada
            conductor del cable esté correctamente conectado desde un extremo al
            otro. Esta prueba asegura que no haya errores en la instalación,
            como cables cruzados, cortocircuitos o pares desconectados.
          </p>
        </div>
      </div>
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-6 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="bg13 brad h-100">
            <img src="@/assets/curso/temas/42.png" alt="alt" />
            <div class="p-4">
              <h4 class="mb-3">Importancia del mapeo de cables</h4>
              <p class="mb-0">
                Un mapeo incorrecto puede causar problemas significativos en la
                transmisión de datos y afectar el rendimiento general de la red.
                La prueba de mapeo confirma que los cables siguen el esquema de
                conexión adecuado, lo cual es fundamental para aplicaciones que
                requieren una conexión sin interrupciones.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="bg13 brad h-100">
            <img src="@/assets/curso/temas/43.png" alt="alt" />
            <div class="p-4">
              <h4 class="mb-3">Proceso de mapeo</h4>
              <p class="mb-0">
                El mapeo se realiza utilizando dispositivos de certificación que
                identifican el orden y la conexión de los conductores en el
                cable. Los resultados de la prueba indican si el cableado se ha
                realizado correctamente o si es necesario corregir alguna
                conexión.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Tipos de errores comunes</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xl mb-4 mb-xl-0">
              <div class="tarjeta-numerada color-secundario p-5 h-100">
                <div class="tarjeta-numerada__numero">
                  <div class="h2">1</div>
                </div>
                <p class="text-center"><b>Cables cruzados.</b></p>
                <p class="mb-0">
                  Ocurre cuando los conductores están conectados en un orden
                  incorrecto, lo que impide la comunicación adecuada entre los
                  dispositivos.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-xl mb-4 mb-xl-0">
              <div class="tarjeta-numerada color-acento-contenido p-5 h-100">
                <div class="tarjeta-numerada__numero">
                  <div class="h2">2</div>
                </div>
                <p class="text-center"><b>Cortocircuitos.</b></p>
                <p class="mb-0">
                  Se produce cuando dos o más conductores están en contacto, lo
                  que puede provocar fallos en la transmisión de señal.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-xl mb-4 mb-xl-0">
              <div class="tarjeta-numerada color-acento-botones p-5 h-100">
                <div class="tarjeta-numerada__numero">
                  <div class="h2">3</div>
                </div>
                <p class="text-center"><b>Conexiones abiertas. </b></p>
                <p class="mb-0">
                  Sucede cuando uno o más conductores no están conectados en uno
                  de los extremos, lo que interrumpe la comunicación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg8 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-start my-5">
            <div class="col-auto">
              <div class="list">
                <div class="list__item">
                  <div class="list__item__icon">
                    <img src="@/assets/curso/temas/icon.svg" alt="" />
                  </div>
                </div>
                <div class="list__txt bgicon text-white p-0 px-4">
                  <h3 class="mb-1">Soluciones para errores de mapeo</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 d-none d-lg-block j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/44.png"
                alt=""
              />
            </div>
            <div class="col-lg-9">
              <div class="bg-slyder p-3 brad mt-0">
                <CarouselRED tipo="b">
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3 d-none d-lg-block">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/45.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-8 my-lg-0 my-3">
                        <h5>Revisar las conexiones</h5>
                        <p class="mb-0">
                          Utilizar herramientas adecuadas para crimpar y
                          verificar las conexiones de los cables antes de la
                          instalación final.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3 d-none d-lg-block">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/45.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-8 my-lg-0 my-3">
                        <h5>Seguir estándares de cableado</h5>
                        <p class="mb-0">
                          Adherirse a las normas de cableado estructurado, como
                          T568A y T568B, para garantizar que los cables estén
                          correctamente mapeados.
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselRED>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
