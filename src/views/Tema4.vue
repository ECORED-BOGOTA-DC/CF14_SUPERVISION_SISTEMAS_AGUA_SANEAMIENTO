<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Vigilancia del sistema de acueducto
    .row.justify-content-center
      .col-12
        figure
          img(src='@/assets/curso/tema4/img1.png').m-auto
      .col-lg-10.bg-p1
        .p-4
          p.mb-0 Las acciones de vigilancia de un sistema de agua incluyen desde la identificación de parámetros objetos de seguimiento por la normatividad vigente hasta los indicadores que deben ser reportados a la autoridad competente. De manera que a continuación se especificarán los más relevantes en el proceso de vigilancia.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Parámetros de análisis de agua #[i in situ]
    p.mb-5 La vigilancia del sistema de abastecimiento requiere el monitoreo de los siguientes parámetros como mínimo.
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Cloro residual
    .row.align-items-center.mb-3
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img2.png' style="width:450px").m-auto
      .col-lg-8
        .cajon.color-primario.p-4.mb-3
          p.mb-0 De acuerdo con la Organización Mundial de la Salud (OMS) y Organización Panamericana de la Salud (OPS) (2009), en su documento “medición de cloro residual en el agua”,  la última etapa de un sistema de tratamiento es la desinfección, la cual busca eliminar los microorganismos causantes de enfermedades como la fiebre tifoidea, diarrea, cólera y hepatitis entre otras, y según el Ministerio de Desarrollo Económico, en el Reglamento técnico para el sector de agua potable y saneamiento básico (RAS), en su  Título A, relacionado con los aspectos generales de los sistemas de agua potable y saneamiento básico, esta fase es obligatoria para todos los niveles de complejidad y sistemas de tratamiento.
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        p El cloro gaseoso Cl2 y los compuestos de cloro (hipoclorito de sodio NaClO o hipoclorito de calcio Ca(ClO)2, por ejemplo), son usados de manera muy frecuente en los procesos de desinfección, por su efecto residual en la acción bactericida. Usualmente se da mayor uso del ácido hipocloroso (HOCl) que del ion hipoclorito (OCl-) (Martínez, 2001), sin embargo, sea cual sea el insumo químico utilizado, se debe verificar que su concentración sea la adecuada, que no exceda ni se encuentre por debajo de lo requerido, lo que implica actividades de verificación y supervisión de este insumo. Veamos de qué se trata:
      .col-lg-4
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img1.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="40%" y="50%" numero="+")
            p.mb-0 En este caso, lo que sería objeto de verificación es el llamado cloro residual, que de acuerdo con la Resolución 2115 (2007) es aquella porción que queda en el agua después de un período de contacto definido, que reacciona química y biológicamente como ácido hipocloroso o como ion hipoclorito.
          .tarjeta.color-acento-botones.p-3(x="92%" y="50%" numero="+")
            p.mb-0 El cloro residual debe estar entre 0,3 y 2,0 mg/L en cualquier punto de la red de distribución. Cuando se utilice un desinfectante diferente al cloro o cualquiera de las formulaciones o sustancias que utilicen compuestos distintos para desinfectar el agua para consumo humano, los valores aceptables para el residual correspondiente u otras consideraciones al respecto serán los reconocidos por la Organización Mundial de la Salud y adoptados por el Ministerio de la Protección Social.
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img2.svg' style="width:450px").m-auto
      .col-lg-9
        h4.txt-c1 ¿Cómo hallar el cloro residual?
        p La determinación del cloro residual se puede llevar a cabo a través de las siguientes metodologías:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b Ortotolidina]: es un método colorimétrico en el cual la presencia de cloro reacciona con la ortotolidina formando un complejo amarillo, el cual varía de intensidad de acuerdo con la presencia del desinfectante.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b DPD (dietil-para-fenil-diamina)]: el reactivo reacciona con el desinfectante generando una coloración violeta-rojiza, de acuerdo con la intensidad del desinfectante (OMS y OPS, 2009).
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Potencial de hidrógeno (pH)
    p La escala de pH determina el grado de acidez o alcalinidad de una sustancia. El pH es un factor que incide en los procesos de la potabilización, como en la coagulación y la cloración.  Como se mencionaba anteriormente, en contacto con el agua, el cloro se disocia en ácido hipocloroso (HOCl) e ion hipoclorito (OCl-). Por debajo de un pH de 6 (ácido), predomina el primero, y por encima de un pH 8 (básico), el segundo; sin embargo, los dos coexisten en rangos de pH cercanos a la neutralidad, como se muestra en la figura que se expone a continuación.
    .row.bg-c12.mb-5
      .col-12
        .px-5
          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-botones.mb-4
                p.mb-0 #[b Figura 3]
                p.mb-0 Comportamiento del cloro en la desinfección 
              figure.mb-4
                img(src='@/assets/curso/tema4/img3.svg' style="width: 950px").m-auto
                figcaption.text-center.mt-3 Fuente. Tomada de Asociación española de abastecimiento de agua y saneamiento (n.d.).
              .cajon.color-secundario.p-4
                p.mb-0 De acuerdo con el marco normativo, Resolución 2115 (2007), en su Artículo 4, un rango de pH entre 6.5 y 9 para el agua de consumo humano. Si este valor no se encuentra entre este rango, puede reflejar un riesgo tanto para el efecto bactericida del cloro, como para los seres humanos.
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Turbiedad
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Ocurre cuando hay partículas en suspensión presentes en el agua, las cuales se visualizan por un cambio visual del agua, generalmente por materia orgánica que puede contener microorganismos que generan un tipo de riesgo en el agua para consumo, como es el caso de favorecer el crecimiento y presencia de la Giardia y el Cryptosporidium, cuya presencia puede disparar el puntaje de riesgo a 100, de acuerdo con la Resolución 2115 (2007), Artículo 13; razón por la cual el máximo permisible es 2 Unidades Nefelométricas de Turbiedad (UNT).
        .cajon.color-secundario.p-4
          p.mb-0 El incremento en los valores de la turbiedad está asociado con una incorrecta operación y mantenimiento de los filtros, así como en los procesos de coagulación. Por ello, se debe hacer el análisis en diferentes unidades de tratamiento de los sistemas de agua (OPS y CEPIS, 2002).
      .col-lg-5
        figure
          img(src='@/assets/curso/tema4/img3.png' style="width: 450px").m-auto
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Color aparente
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img4.svg' style="width: 350px").m-auto
      .col-lg-9
        p Según lo menciona García. (2012). Está relacionado con la presencia de partículas, tanto disueltas como en suspensión (Martínez y Osorio, 2018), sean estas de tipo orgánico, húmicas y fúlvicas (restos vegetales), o inorgánico (hierro, manganeso), las cuales le confieren una tonalidad amarilla.
        p El color está asociado con las características organolépticas que serán percibidas por el consumidor final y su posible rechazo, así que el valor máximo permitido, según Resolución 2115 (2007), es de 15 Unidades de Platino Cobalto (UPC) en agua tratada (antes de la filtración).
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Conductividad
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p Está relacionada como lo índica Giraldo. (1995),  con la capacidad de conducir electricidad y se debe a la presencia de iones, esencialmente de tipo inorgánico (sales, ácidos y bases) de sólidos disueltos. 
        p La Resolución 2115 (2007) establece en su Artículo 3 que el valor máximo aceptable para la conductividad puede ser hasta 1000 microsiemens/cm. Este valor podrá ajustarse según los promedios habituales y el mapa de riesgo de la zona. Un incremento de los valores habituales de la conductividad superior al 50 % en el agua de la fuente indica un cambio sospechoso en la cantidad de sólidos disueltos y su procedencia debe ser investigada de inmediato por las autoridades sanitarias y ambientales competentes, la persona prestadora que suministra o distribuye agua para consumo humano.
      .col-lg-3
        figure
          img(src='@/assets/curso/tema4/img5.svg' style="width: 350px").m-auto
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Temperatura
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img6.svg' style="width: 350px").m-auto
      .col-lg-9
        p La temperatura determina la velocidad de las reacciones químicas, la solubilidad de gases, la desinfección del agua, la presencia de microorganismos, entre otras cosas. El control de la temperatura es elemental, no solo para el consumo humano, sino para el mantenimiento de redes de alcantarillado y disminuir el grado de afectación en el caso de descargas a fuentes de agua.
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Índices de calidad del agua (IRCA)
    p.mb-5 Es aquel que contempla el puntaje de riesgo en relación con la evaluación cuantitativa de parámetros físicos, químicos y microbiológicos, de acuerdo con los niveles máximos permitidos según la norma, es decir, un IRCA de 100 puntos determina un incumplimiento a los estándares de calidad, como se muestra a continuación:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-4
            p.mb-0 #[b Tabla 2]
            p.mb-0 Clasificación y nivel de riesgo IRCA
        .tabla-a.color-secundario
          table
            caption.text-center Fuente: Tomada de Resolución 2115 de 2007.
            thead
              tr
                th
                  p.mb-0 Clasificación IRCA
                  p.mb-0 (%)
                th
                  p.mb-0 Nivel de riesgo
                th
                  p.mb-0 IRCA por muestra
                  p.mb-0 (Notificaciones que adelantará la autoridad sanitaria de manera inmediata)
                th
                  p.mb-0 IRCA mensual
                  p.mb-0 (Acciones)
            tbody
              tr(style="background-color: #ffffff")
                td
                  p.text-center.mb-0 #[b 80.1 - 100]
                td
                  p.text-center.mb-0 INVIABLE SINITARIAMENTE
                td
                  p.text-center.mb-0 Informar a la persona prestadora, al COVE, Alcalde, Gobernador, SSPD, MPS, INS, MAVDT, Contraloría General y Procuraduría General.
                td
                  p.text-center.mb-0 Agua no apta para consumo humano, gestión directa de acuerdo a su competencia de la persona prestadora, alcaldes, gobernadores y entidades del orden nacional.
              tr(style="background-color: #F6FBFF")
                td 
                  p.mb-0.text-center #[b 35.1 - 80]
                td
                  p.mb-0.text-center ALTO
                td
                  p.mb-0.text-center Informar a la persona prestadora, COVE, Alcalde, Goberador y a la SSPD.
                td
                  p.mb-0.text-center Agua по apta para consumo humano, gestión directa de acuerdo a su competencia de la persona prestadora y de los alcaldes y gobernadores respectivos.
              tr(style="background-color: #ffffff")
                td
                  p.text-center.mb-0 #[b 14.1 - 35]
                td
                  p.text-center.mb-0 MEDIO
                td
                  p.text-center.mb-0 Informar a la persona prestadora, COVE, Alcalde y Gobernador.
                td
                  p.text-center.mb-0 Agua no apta para consumo humano, gestión directa de la persona prestadora.
              tr(style="background-color: #F6FBFF")
                td 
                  p.mb-0.text-center #[b 5.1 - 14]
                td
                  p.mb-0.text-center BAJO
                td
                  p.mb-0.text-center Informar a la persona prestadora y al COVE.
                td
                  p.mb-0.text-center Agua no apta para consumo humano, susceptible de mejoramiento.
              tr(style="background-color: #ffffff")
                td
                  p.text-center.mb-0 #[b 0 - 5]
                td
                  p.text-center.mb-0 SIN RIESGO
                td
                  p.text-center.mb-0 Continuar el control y la vigilancia.
                td
                  p.text-center.mb-0 Agua apta para consumo humano. Continuar la vigilancia.
    p Las frecuencias y número de muestras para determinar la calidad de agua en relación con los parámetros físicos, químicos y microbiológicos están contemplados en el Título VI de la Resolución 2115 (2007) y varían de acuerdo con el número de habitantes y los mapas de riesgo.
    p.mb-5 Para consultar las fórmulas y la metodología para obtener el índice IRCA, se debe consultar la Resolución 2115 (2007) que se encuentra en el material complementario. Dirigirse al Título IV y revisar las páginas del 7 al 9.
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Procedimiento de registro en el IRCA
    p.mb-5 Una vez recolectada la muestra y obtenidos los resultados correspondientes, se registran los resultados en el Sistema de Información de la Vigilancia de la Calidad del Agua para Consumo Humano (SIVICAP) del Instituto Nacional de Salud por la autoridad sanitaria.
    p.text-center.mb-5 Los pasos básicos para realizar el registro de este procedimiento son:
    .row.justify-content-center.mb-5
      .col-lg-8
        PasosA.color-primario.mb-5(tipo="n")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 La autoridad sanitaria de los municipios categoría 1, 2 y 3 calculará los IRCAs provenientes de los resultados de las muestras de vigilancia.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img4.png' style="width: 350px").m-auto
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img5.png' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 Luego deben ser reportados a la autoridad sanitaria departamental de su jurisdicción.
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 La autoridad sanitaria departamental remitirá esta información al subsistema de vigilancia de la calidad del agua – Sivicap del Instituto Nacional de Salud.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img6.png' style="width: 350px").m-auto
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img7.png' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 La autoridad sanitaria notificará y tomará las acciones según lo establecido en la Tabla 2 (Resolución 2115, 2007).
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        h4.txt-c1 Otros valores a registrar
        p Existen otros datos numéricos que deben ser obtenidos y reportados. Dentro de ellos se resaltan:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b Índice de riesgo municipal por abastecimiento de agua para consumo humano (IRABAm)]: el valor de este oscila entre cero (0) y cien (100) puntos. Es cero (0) cuando cumple con las condiciones aceptables para cada uno de los criterios de tratamiento, distribución y continuidad del servicio, y cien (100) puntos para el más alto riesgo cuando no cumple ninguno de ellos (Resolución 2115, 2007).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b Índice de riesgo por abastecimiento de agua por parte de la persona prestadora (IRABApp)]: en este caso es obtenido por la persona prestadora del servicio, pero se clasifica y califica de igual forma.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema4/img8.png' style="width: 450px").m-auto
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop' style="width: 70%")
          .tarjeta.tarjeta--azul.shadow
            .p-4
              h4 Importante
              p.mb-0 Para consultar las fórmulas y la metodología para obtener el índice IRABAm y IRABApp se debe consultar la Resolución 2115 (2007), que se encuentra en el material complementario, dirigirse al Título IV y revisar desde el Artículo 17 en las páginas 9 a la 13.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3 Puntos de muestreo de calidad de agua en redes de distribución
    p Los puntos de muestreo son concertados entre las empresas prestadoras de servicios públicos y la autoridad sanitaria en los lugares definidos dentro del sistema de suministro, determinando las frecuencias y número de muestras requeridas para los respectivos análisis físicos, químicos y microbiológicos, según lo establecido en la Resolución 2115 (2007), en sus Artículos 24 al 27 y 29 al 30 (Instituto Nacional de Salud, 2011).
    p.mb-5 Los criterios para establecer un punto de muestreo para la vigilancia, por parte de la autoridad sanitaria, a la calidad del agua en la red de distribución de acuerdo con la Resolución 811 (2008), para puntos fijos de muestreo, son:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/tema4/img8.svg').m-auto
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img9.svg' style="width: 350px").m-auto
      .col-lg-9
        p #[b Puntos de muestreo para el monitoreo del funcionamiento hidráulico:]
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Puntos donde hay mezcla, ya sea por otros tratamientos o fuentes de abastecimiento en la red de distribución.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Como mínimo un punto de muestreo en red de distribución sectorizada.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Puntos donde exista otro mecanismo de abastecimiento.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 En puntos con alta probabilidad de riesgo por contaminación en la red de distribución.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Los puntos que se requieran a lo largo de la red de distribución de agua, teniendo en cuenta que el número mínimo de puntos de muestreo se establecen de acuerdo con la cantidad de usuarios bajo la cobertura de la empresa prestadora del servicio (Resolución 811, 2008).
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Puntos de muestreo
    p.mb-5 Los puntos de muestreo deben encontrarse en zonas de fácil acceso y adecuadamente identificados para permitir un ingreso seguro al momento de la toma. Adicionalmente, deben estar provistos de una infraestructura externa que permita su protección frente a una inadecuada manipulación por terceros, con puerta de protección, candado y llave manejada por las partes involucradas (figura 4) (sea operador y/o autoridad sanitaria). El punto debe garantizar condiciones óptimas de drenaje y los dispositivos pueden ser grifos conectados a la red de distribución, hidrantes o válvulas tipo bayoneta, según sea el caso (figura 5) (Instituto Nacional de Salud, 2011).
    .row.justify-content-center.mb-5
      .col-lg-5.m-2
        .titulo-sexto.color-acento-botones.mb-4
          p.mb-0 #[b Figura 4]
          p.mb-0 Punto de toma de muestra
        figure.mb-4
          img(src='@/assets/curso/tema4/img9.png' style="width: 550px").m-auto
      .col-lg-5.m-2
        .titulo-sexto.color-acento-botones.mb-4
          p.mb-0 #[b Figura 5]
          p.mb-0 Válvula tipo bayoneta
        figure.mb-4
          img(src='@/assets/curso/tema4/img10.png' style="width: 550px").m-auto
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Procedimiento desinfección del punto para la toma de muestra
    p.mb-5 Para cualquier tipo de dispositivos utilizados para la toma de la muestra y dependiendo de su naturaleza, se deben tener en cuenta las siguientes especificaciones, en este orden:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Previamente, el operario debe contar con los elementos de protección personal para garantizar su seguridad frente a cualquier tipo de riesgo, así como los que se consideren necesarios para evitar la contaminación de la muestra (cofia, tapabocas, guantes, bata, zapatos de seguridad, etc.).
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img11.png' style="width: 350px").m-auto
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img12.png' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 Limpieza y desinfección con hipoclorito de sodio o de calcio, con un paño limpio (concentración del 5 al 10 % de cloro activo).
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Si la estructura no es de plástico, se procede a flamear por un minuto el punto de la descarga.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img13.png' style="width: 350px").m-auto
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img14.png' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 Se procede a abrir la llave y dejar descargar el agua por un lapso entre 1 a 2 minutos, previo a la recolección de la muestra (purga). Para el caso de los hidrantes, una vez se ha desinfectado la estructura como se describe en el punto 2, se deja un tiempo de descarga de 3 minutos. Esto con el fin de liberar agua estancada en la tubería previa a la toma de la muestra.
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0 Se recolecta la muestra teniendo en cuenta las especificaciones para análisis físico, químico o microbiológico, que se detallan más adelante (Instituto Nacional de Salud, 2011).
            .col-lg-6
              figure
                img(src='@/assets/curso/tema4/img15.png' style="width: 350px").m-auto
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Tipo de envases para la toma de la muestra
    p.mb-4 Para el análisis de los diferentes parámetros físico-químicos y microbiológicos del agua, se debe tener en cuenta el tipo de envases donde se almacenará la muestra hasta su llegada al laboratorio.
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Análisis físico-químico")
            .col-12
              p.mb-0 De acuerdo con los protocolos del Instituto Nacional de Salud (2011), pueden ser recipientes de vidrio o plástico. El vidrio no deberá generar ningún tipo de reacción con las características propias de la muestra. Se recomienda de borosilicato y, preferiblemente, utilizarlo si se procederá a análisis de compuestos orgánicos de la muestra en el laboratorio.  El color ámbar permite minimizar las reacciones que puedan ocurrir con la acción de la luz y también es posible encontrar recipientes opacos de plástico para el mismo fin. Existen polietileno o policarbonato en este último caso. Cualquiera que sea el material se deben garantizar envases adicionales para las contramuestras y, en general, deben tener mínimo un litro de capacidad y cierre hermético.
          .row(numero="2" titulo="Análisis microbiológico")
            .col-12
              p.mb-0 Atendiendo lo que para este punto índica el Instituto nacional de Salud (2011), para el análisis microbiológico, los envases deberán ser con boca ancha, provistos de tapa rosca, con cierre hermético, protegida con papel resistente para evitar la contaminación cruzada al momento de la manipulación.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema4/img16.png' style="width: 350px").m-auto
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 Los envases deberán tener una capacidad mínima de 300 mL. La tapa y el envase deben ser del mismo material y pueden ser tanto de plástico (polipropileno o policarbonato) como de vidrio (borosilicato) y estar previamente esterilizados ya sea por vía húmeda, a 121°C, o seca, a 160°C.
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Procedimiento toma de muestra
    p.mb-4 El procedimiento para la toma de la muestra de agua para someterla a un análisis en el laboratorio con el fin de determinar los parámetros físico-químicos está relacionado con una serie de actividades, pasos, equipos, materiales y documentos, los cuales se describen a continuación.
    .row.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        h4.txt-c1 Alistamiento de materiales y equipos requeridos para la toma de la muestra
        p Considerando las condiciones para una buena práctica de muestreo en campo, se deben considerar aspectos tales como (INS, 2011).
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/img11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Alistamiento de materiales y equipos para toma de muestras
                  p.text-white.text-small.mb-0 Para conocer de manera detallada el alistamiento que debe hacerse de materiales y equipos a utilizar para la toma de muestras, debe consultar el documento anexo denominado “Alistamiento de materiales y equipos para toma de muestras”,  se sugiere su descarga.
                .col-sm-auto
                  a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                    span(style="color:#12263F !important") Descargar
                    i.fas.fa-file-download(style="color:#12263F !important")
      .col-lg-3
        figure
          img(src='@/assets/curso/tema4/img10.svg' style="width: 350px").m-auto
    h4.txt-c1.mb-5 Toma de muestra para análisis físico-químico
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 Realizar un triple lavado del envase con el agua de descarga posterior al periodo de purga.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 Recolectar la muestra de agua hasta el tope del envase, eliminando toda burbuja o posible cámara de aire, y cerrar herméticamente.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 Verificar la rotulación de la muestra.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Preservar y transportar al laboratorio de análisis.
    h4.txt-c1 Toma de muestra para análisis microbiológico
    p.mb-4 Este tipo de análisis permite determinar la calidad microbiológica del agua, se debe tener en cuenta las fuentes de donde proviene la muestra con el fin de definir las condiciones y el protocolo a seguir en la toma de la muestra. Sin embargo a continuación se expone el procedimiento a seguir, esto es:
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img17.png' style="width: 350px").m-auto
      .col-lg-9
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 No se debe realizar triple lavado del envase dado que previamente debe contar con tiosulfato de sodio (Na2S2O3) como preservante, para evitar que el cloro producto de la limpieza de este afecte la actividad biológica de los microorganismos presentes en la muestra de agua, desde la toma hasta el análisis en el laboratorio.  La solución de tiosulfato de sodio al 10 % puede ser de acuerdo con los protocolos del INS, en forma sólida (0.2 g) o líquida (0.5 mL).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Se quita la tapa del envase para análisis microbiológico, protegida por papel resistente, y se hace la recolección de la muestra, sin colocarla en ninguna superficie boca arriba o boca abajo, para evitar la contaminación de esta.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 El envase se llena hasta las dos terceras partes, dejando una cámara de aire y mezcla para la muestra.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Verificar la rotulación de la muestra y registro en acta.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 Preservar y transportar al laboratorio de análisis. Hacer entrega en el menor tiempo posible (máximo 6 horas después de la toma).
    h4.txt-c1 Registro de datos en campo
    p.mb-4 Un concepto importante es el de cadena de custodia y se define como el proceso de control y seguimiento de la muestra, desde el momento de la recolección de esta hasta la entrega de resultados por parte del laboratorio. Para evitar rechazos en la recepción de la muestra, la información debe ser clara en todas sus etapas como lo indica el INS (2011), esto es:
    figure
      img(src='@/assets/curso/tema4/img12.svg').m-auto

</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
