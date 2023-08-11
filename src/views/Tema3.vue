<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Redes de acueducto, alcantarillado e infraestructura
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-3
          p.mb-0 La calidad de agua no solo depende de los procesos de potabilización, también aquellos relacionados con protocolos de vertimientos en las diferentes ciudades; por consiguiente, para que los diferentes tipos de aguas no se mezclen entre sí, se diseñaron desde los tiempos romanos sistemas de alcantarillado que separan el agua de acuerdo con el uso que se le ha dado, evitando así la contaminación cruzada.
        p Estos sistemas han venido evolucionando desde aquellos tiempos hasta contar hoy con redes de acueducto modernas, automáticas, al igual que sistemas de alcantarillado que atienden las demandas de grandes ciudades. 
        p En Colombia, el Reglamento técnico para el sector de agua potable y saneamiento básico (RAS), establece los protocolos que se deben tener en cuenta para definir los sistemas de alcantarillado y las características de las infraestructuras.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 530px").m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Normativa
    .row.justify-content-center.mb-5.mb-md-0
      .col-12.d-none.d-sm-block(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema3/img2.png').m-auto
      .col-lg-10.bg-p1(data-aos="fade-right")
        .p-4
          p.mb-0 Conforme al cumplimiento de la constitución política de Colombia en su Artículo 78, en el cual se establece que “#[i la ley regulará el control de calidad de bienes y servicios  ofrecidos y prestados a la comunidad]”, en su momento la Comisión de Regulación de Agua potable y saneamiento básico (CRA) solicitó al Ministerio de Desarrollo Económico (hoy Ministerio de Vivienda, Ciudad y Territorio), definir los requisitos técnicos para la prestación de servicios de agua potable y saneamiento básico con calidad, en relación con los aspectos relacionados con obras, procedimientos y actividades objeto de sus competencias; lo anterior amparado también en el marco de la ley 142 (1994) en relación al régimen de los servicios públicos domiciliarios, por lo cual se expidió la Resolución 1096 de 2000, “por la cual se adopta el Reglamento técnico para el sector de agua potable y saneamiento básico (RAS)” y los ajustes contemplados bajo la Resolución 330 (2017).
    p.mb-5(data-aos="fade-left") La aplicación del RAS está dirigida a entes territoriales, entes de vigilancia y control, los prestadores de servicios públicos (acueducto, alcantarillado y aseo), y otras del sector, así como a los diseñadores, constructores, operadores, sean personas naturales o jurídicas que estén relacionadas. La consulta de los criterios unificados para el territorio nacional en el RAS está agrupada de la siguiente manera:
    .row.justify-content-center
      .col-lg-10.bg-c11.shadow(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img1.svg', style="width: 430px").m-auto
            .col-lg-8
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Aspectos generales de los sistemas de agua potable y saneamiento básico
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Sistemas de acueducto
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Sistemas de potabilización
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Sistemas de recolección y evacuación de aguas residuales domésticas y aguas lluvias
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Tratamiento de aguas residuales
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Sistemas de aseo urbano
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Aspectos complementarios
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Compendio de la normatividad técnica y jurídica del sector de agua potable y saneamiento básico y sus actividades complementarias
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Componente ambiental para los sistemas de acueducto, alcantarillado y aseo
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFA031")
                  | Alternativas tecnológicas en agua y saneamiento para el sector rural
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Entidades de vigilancia y sus funciones de control de calidad del agua potable
    p.mb-5(data-aos="fade-right") En Colombia existen entidades del orden nacional, regional y local con diferentes competencias ambientales, normatividad, protocolos y estándares relacionados con el recurso hídrico, esencialmente las funciones y entidades las podrá conocer a mayor profundidad a través del video que se dispone a continuación:
    .row.bg-c10
      .col-12(data-aos="fade-down")
        .px-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/yD5fkjQoaQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Sistemas de abastecimiento
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los sistemas de tratamiento son un conjunto de actividades y procesos unitarios definidos como reacciones químicas y biológicas (por ejemplo, la coagulación), así como operaciones unitarias entendidas como fenómenos físicos (por ejemplo, la decantación), como menciona García (2012), que ocurren de manera organizada para mejorar las condiciones de calidad del agua respecto a su entrada (afluente) para distribuirse a una población determinada (efluente).
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Fuentes de contaminación
    p(data-aos="fade-up") Las problemáticas en los sistemas de abastecimiento están asociadas a factores naturales y de origen antrópico, tales como:
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Erosión hídrica en zonas de laderas y remoción en masa.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Deforestación.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Sobrepastoreo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Agricultura intensiva.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Tala incontrolada.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Inadecuado manejo de vertimientos y manejo de residuos sólidos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Expansión urbana y hacinamiento próximo a fuentes hídricas.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img4.png', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular En Colombia, según datos del reporte de avance del Estudio Nacional del Agua (ENA), los departamentos que concentran alrededor del 50 % de sus municipios con problemas de abastecimiento son La Guajira, Magdalena, Cesar, Tolima, Bolívar, Quindío, Santander, San Andrés y Providencia y Valle del Cauca, esto en razón a la disminución de la precipitación, poca oferta hídrica en el territorio e insuficiencia en los sistemas de abastecimiento.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 IDEAM, (2018)
          .col-lg-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img2.svg', style="width: 250px").m-auto
    .row.bg-c10.mb-5
      .col-12(data-aos="fade-down")
        .px-5
          p.mb-4 La deficiencia en los sistemas de abastecimiento de agua y tratamiento de los vertimientos como mecanismo de control de la contaminación en las fuentes hídricas también está relacionado con enfermedades de transmisión vía oral y cutáneo-mucosas, como lo menciona el Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente- OPS/ CEPIS (2002), tales como:
          figure
            img(src='@/assets/curso/tema3/img3.svg', style="width: 850px", alt="Muestra enfermedades de transmisión vía oral y cutáneo-mucosas por deficiencia en sistemas de abastecimiento de agua y tratamiento de los vertimientos tales como: hepatitis, enfermedades parasitarias, fiebre tiroidea, disentería y cólera.").m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Funcionamiento y operación
    p(data-aos="fade-down") El programa de mantenimiento de cada una de las etapas debe ser de acuerdo con las condiciones de operación del sistema de tratamiento y abastecimiento.
    p.mb-4(data-aos="fade-down") Con el fin de garantizar el suministro permanente y control de calidad, las Plantas de Tratamiento de Agua Potable (PTAP) tendrán en cuenta las siguientes consideraciones enmarcadas en los Artículos 99 y 122 de la Resolución 330 (2017):
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta
                  span a
                | Capacidad de producción que cubra el Caudal Máximo Diario (QMD).
              li.d-flex
                .lista-ol--cuadro__vineta
                  span b
                | Acceso permanente a energía eléctrica y evaluación de fuentes alternas.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span c
                | Condiciones de accesibilidad a la planta.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span d
                | Priorizar en lo posible condiciones de operación de la planta por gravedad.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span e
                | Áreas suficientes para el manejo y tratamiento de lodos generados.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span f
                | Monitoreo en el afluente (entrada) y el efluente (salida) de todas las unidades de la PTAP: caudal, turbiedad, color, temperatura, pH y conductividad.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span g
                | A la salida del sistema de tratamiento se deberá medir el residual del desinfectante.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img5.png', style="width: 450px").m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Estructuras
    p.mb-5(data-aos="fade-down") El sistema de potabilización comprende una serie de procesos, etapas, actividades y operaciones unitarias, las cuales se describen a continuación.
    LineaTiempoD.color-acento-contenido(data-aos="fade-left")
      .row(numero="1" titulo="Bocatoma")
        .col-12
          p.mb-0 Estructura hidráulica que permite la conducción del agua desde la fuente hasta la planta de tratamiento correspondiente. De acuerdo con su colocación, las bocatomas para fuentes superficiales pueden ser (Capítulo 2, Artículo 54): laterales, sumergidas, mixtas, en dique o flotante con elevación mecánica (RAS, 2017).
      .row(numero="2" titulo="Aducción y conducción")
        .col-12
          p De acuerdo con la Resolución 330 (2017), se tienen en cuenta aspectos como (Artículos 56, 59, 63, 69, 39, 40, 42, 45 y 47):
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Trazados captación-distribución, serán en lo posible por vías públicas evitando zonas de riesgo (inundación y/o deslizamiento). En caso de que sea necesario, se indicará el tipo de amenaza expuesta y las obras de mitigación correspondientes.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Rangos de velocidad máxima y presiones estarán de acuerdo con las especificaciones técnicas de materiales usados (tuberías y accesorios). Velocidad mínima 0,5 m/s.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 El diseño deberá contemplar mediciones de caudal y piezométricas en líneas de aducción y/o conducción de acuerdo con la longitud de tuberías.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Las tuberías del acueducto no deben estar ubicadas en la misma zanja que la red de tuberías de alcantarillado, aguas lluvias y combinadas.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 La distancia mínima con otras redes de servicios públicos respecto a la horizontal es de 1 m y 0.3 m respecto a la vertical.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Los diámetros internos mínimos para red de distribución en sectores urbanos serán 75 mm y sector rural de 50 mm.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Medidas preventivas y de corrección en líneas de aducción y conducción en torno al golpe de ariete por sobrepresiones y subpresiones.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Verificar que las condiciones de presión garanticen condiciones de operación efectiva en la red de distribución.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Al realizar mantenimiento en tuberías o instalación, garantizar limpieza y desinfección de estas antes de iniciar su operación conforme a los métodos de la NTC 4246 (1997).
      .row(numero="3" titulo="Sistema de bombeo, válvulas y accesorios")
        .col-lg-8.mb-4.mb-lg-0
          p Verificar la operación y mantenimiento de los equipos, de acuerdo con las especificaciones técnicas del fabricante dadas en la Resolución 330 (2017) (p.55, 56), y otros aspectos como:
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Válvulas en red de distribución: garantizar mantenimiento preventivo y operación continua en un lapso de 1 año.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Válvulas reductoras de presión: verificar la operación y calibración cada 3 meses.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Accesorios en aducciones: verificar operación mínima una vez al año.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Verificar lubricación, limpieza, operación, ruido y vibración del equipo, así como los consumos de energía mensuales del sistema de válvulas, bombeo y otros accesorios.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img6.png', style="width: 450px").m-auto
      .row(numero="4" titulo="Desarenador")
        .col-12
          p.mb-0 Estructuras cercanas a la fuente de abastecimiento que permiten la remoción de partículas que por su tamaño no lograron quedar retenidas en la rejilla de la bocatoma, tales como barro, arena y grava. De acuerdo con el RAS, el tiempo de retención no debe ser inferior a 20 minutos, deben estar diseñados con la suficiente capacidad hidráulica para caudal máximo diario (QMD), pendientes superiores al 10 % para facilitar la evacuación de las partículas sólidas y con módulos alternos que permitan la operación y el mantenimiento en forma simultánea (RAS, 2000) (RAS, 2017). Verificar la correcta operación garantizando la remoción y disposición de material mensualmente.
      .row(numero="5" titulo="Torre de aeración")
        .col-lg-8.mb-4.mb-lg-0
          p En esta etapa se realiza un intercambio gaseoso aire-agua para mejorar condiciones organolépticas como el sabor, así como facilitar la remoción de gases (ejemplo: sulfhídrico) y oxidación de hierro y manganeso. Los tipos de aireadores son de bandeja, de cascada, aire difuso y por dispersión (CEPIS, 2002). No es tan común en tratamiento convencional de agua, pero sí muy apropiada para el tratamiento de agua subterránea.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img7.png', style="width: 450px").m-auto
      .row(numero="6" titulo="Coagulación")
        .col-lg-8.mb-4.mb-lg-0
          p También conocida como mezcla rápida (por mecanismos hidráulicos o mecánicos). Es un proceso unitario químico, en el cual se debe garantizar la mezcla homogénea del coagulante en el agua, de acuerdo con los ensayos de tratabilidad (prueba de jarras) con la dosis óptima del coagulante y/o auxiliares de coagulación. Las condiciones de coagulación útiles para verificar una correcta operación de la planta varían de acuerdo con el tipo de agua a tratar que puede fluctuar en el año (por ejemplo: turbidez, pH, temperatura) y otros aspectos como el tipo y cantidad de coagulante, así como el mecanismo de mezcla, que puede ser hidráulico, como la canaleta #[i Parshall], o mecánico (CEPIS, 2002).
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img8.png', style="width: 450px").m-auto
      .row(numero="7" titulo="Floculación")
        .col-lg-8.mb-4.mb-lg-0
          p La mezcla lenta es una operación unitaria a través de estructuras hidráulicas o mecánicas (solo mecánicas para caudales superiores a 250 L/s), las cuales deben garantizar rangos de velocidades entre 0.2 a 0.6 m/s (RAS, 2000) y tiempos de retención hidráulica de 20 a 40 minutos, según la Resolución 330 de 2017 (Artículo 112). Para garantizar una adecuada floculación, es necesario tener en cuenta aspectos relacionados con el mantenimiento, por ejemplo, la limpieza periódica, así como otros de su operación, por ejemplo, la formación de floc (se recomienda sea en el primer tercio de la unidad) y control de velocidad que no fracture el flóculo, verificación de posibles zonas muertas en las unidades, lubricación de piezas mecánicas y ajuste de la dosificación de coagulante en caso de que exista formación de espuma (CEPIS, 2002).
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img9.png', style="width: 450px").m-auto
      .row(numero="8" titulo="Sedimentación")
        .col-12
          p.mb-4 También conocida como decantación es un proceso que permite que las partículas en suspensión, por acción de la gravedad, se depositen en el fondo del tanque levemente inclinado a un punto de descarga, sea este circular o rectangular (CEPIS, 2002). Existen sedimentadores de flujo horizontal, laminar de placas paralelas (a), alta tasa o tipo colmena (b).  De acuerdo con el tipo de sedimentador, varían la velocidad del flujo y los tiempos de retención hidráulica.  Se debe verificar el adecuado funcionamiento del sedimentador, realizando extracción periódica de los lodos generados (de forma mecánica o manual), evitando la acumulación y/o fermentación de la materia orgánica, que pueda alterar las características del agua tratada. Los lodos deben ser tratados de acuerdo con los criterios de diseño en cada planta (homogeneización, espesamiento y deshidratación) para finalmente disponerlos conforme a las disposiciones de la autoridad ambiental local establecidas en los Artículos 125 y 126 de la Resolución 330 (2017).
          .row.justify-content-center
            .col-lg-6
              .titulo-sexto.color-acento-botones.mb-4
                p.mb-0 #[b Figura 2]. Sedimentadores en planta de tratamiento de agua
              figure
                img(src='@/assets/curso/tema3/img10.png' style="width: 550px").m-auto
      .row(numero="9" titulo="Filtración")
        .col-12
          p.mb-0 Es un proceso de percolación del agua a través de un medio o lecho filtrante. Puede ser filtración por gravedad o presión, y según la velocidad de filtración pueden ser lentos, 7-14 m3/m2/día, y rápidos, mayores a 120 m3/m2/día (Artículo 114 de la Resolución 330 de 2017). La correcta operación del filtro está determinada por el mantenimiento de este, basado en la verificación de la colmatación del lecho filtrante por acumulación del lodo (capa biológica) y su consecuente pérdida de carga, lo que genera una reducción en el caudal de salida. Para esto, se realizan actividades de limpieza con agua en dirección contraria al flujo, proceso conocido como retrolavado (CEPIS, 2002). De acuerdo con el RAS (Título C, Sistemas de potabilización), el lecho filtrante convencional puede ser: arena, grava, antracita, ilmenita, granate y carbón activado (p. 85).
      .row(numero="10" titulo="Desinfección")
        .col-12
          p.mb-0 El proceso de desinfección es de obligatoriedad para cualquier sistema de tratamiento en Colombia. Se pueden utilizar compuestos como hipoclorito de sodio (NaClO), hipoclorito de Calcio (Ca (OCl)2) y dióxido de cloro (ClO2). Otros como el ozono y radiación ultravioleta, deben asegurar un efecto residual con un desinfectante secundario. Se debe garantizar un tiempo de contacto del desinfectante en el agua de 20 minutos (tanque de contacto), previo al almacenamiento, como se establece en la Resolución 330 (2017), en el Artículo 121.
      .row(numero="11" titulo="Tanques de almacenamiento")
        .col-lg-8.mb-4.mb-lg-0
          p De acuerdo con la Resolución 330 (2017), en sus Artículos 79 y 98:
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Todos los sistemas de abastecimiento deberán contar con un tanque de almacenamiento.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 El mecanismo hidráulico debe permitir la circulación interior del agua almacenada evitando zonas muertas, así como la descarga de esta deberá ser en relación con lo primero que entra-lo primero que sale, esquema de mezcla tipo FIFO (por sus siglas en inglés #[i First In], #[i First Out]).
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 El borde libre de los tanques será mínimo de 0.3 m y provisto de mecanismos de ventilación que impidan entrada de vectores y contaminantes.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Los tanques de almacenamiento deben tener pendiente de fondo para facilitar labores de limpieza.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Control y seguimiento a las condiciones del cloro residual en los tanques, con el fin de cumplir la norma.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Tanques deben contar con aliviadero para evacuar excesos y estar construidos en terrenos que cuenten con sistema de drenaje.
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Verificar la limpieza de tanques mínimo cada 6 meses.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img11.png', style="width: 450px").m-auto

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
