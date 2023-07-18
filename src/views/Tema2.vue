<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos básicos de hidráulica e hidrología
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p El agua es un compuesto formado por dos átomos de hidrógeno y un átomo de oxígeno, con la propiedad de disolver una gran variedad de sustancias. El ciclo del agua permite el tránsito en diferentes momentos y estados de la materia (líquido, sólido y gaseoso), para alimentar las fuentes superficiales y subterráneas, por acción de la gravedad y la radiación solar.
        .cajon.color-secundario.p-4
          p.mb-0 El agua es captada y conducida a través de un sistema articulado de dispositivos, accesorios, equipos, procesos y procedimientos que trabajan bajo la dinámica de este fluido en ríos, canales y tuberías.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 530px").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Redes de agua
    .row.mb-4
      .col-12
        .px-5
          .row.align-items-center.bg-c1
            .col-lg-3.p-4.p-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 270px").m-auto
            .col-lg-9.p-4.p-lg-0(data-aos="fade-left")
              p.mb-0 Un sistema de abastecimiento de agua es la articulación de varias actividades, procesos y equipos necesarios para garantizar la continuidad, presión, calidad y cantidad del recurso hídrico a una población determinada, como menciona la Comisión Nacional del Agua (2007) en su manual de agua, alcantarillado y saneamiento. Las fuentes de abastecimiento pueden ser superficiales, subterráneas o mixtas (combinación de las dos) y, dependiendo de las condiciones topográficas del sistema, el suministro puede ser por gravedad o por bombeo. Los procesos de abastecimiento comprenden: captación, tratamiento, almacenamiento y distribución.
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-auto.mb-4.mb-lg-0
        p.text-center.mb-0 #[b Dentro de los esquemas de distribución, se encuentran:]
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width: 770px").m-auto
    p(data-aos="fade-right") Los esquemas de distribución cerrados consisten en la disposición de las tuberías en forma de mallas poligonales, sin ramificaciones. Por su parte, en las abiertas se configuran de manera irregular, sobre todo en asentamientos dispersos, alejados y con algunas variaciones topográficas en el terreno. Es posible que un sistema de abastecimiento cuente con una configuración de esquema mixto, es decir, en unas zonas se dispone de mallas cerradas y en otras zonas ramificadas o abiertas.
    .row.align-items-center.mb-3
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La red de distribución de un sistema de abastecimiento de agua potable puede ser primaria o secundaria. La primera se caracteriza por ser tramos principales de tuberías de un diámetro y tamaño mayor que alimentan a las secundarias con dimensiones inferiores a la red principal. La segunda se encarga de conectar las instalaciones del usuario final a la red primaria, finalmente, las acometidas o conexiones domiciliarias conectan la red secundaria a las instalaciones del usuario.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Dependiendo de las condiciones del terreno, así como la ubicación de la fuente de abastecimiento y la unidad donde se llevan a cabo los procesos correspondientes al tratamiento, los mecanismos de distribución hasta el usuario final pueden ser por gravedad o bombeo. En ambos casos la presión constante garantiza continuidad en el suministro.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width: 450px").m-auto
    p(data-aos="fade-down") Dentro de los costos operativos de un sistema de abastecimiento, la red de distribución requiere un 50-75 % del presupuesto (Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente, 2002).
    p.mb-5(data-aos="fade-right") Con relación a las características de una red de abastecimiento que requiere una verificación constante, se pueden encontrar los componentes, que comprenden: tuberías, válvulas, hidrantes, motores, rejillas, tanques de almacenamiento y otros que se detallan a continuación:
    .row.bg-c2.mb-5
      .col-12(data-aos="fade-up")
        .p-4.p-lg-5
          SlyderB(:datos="datosSlyder")
    p.text-center.mb-5(data-aos="fade-right") #[b Algunos aspectos a tener en cuenta frente a las redes de abastecimiento son:]
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img3.svg', style="width: 270px").m-auto
      .col-lg-9(data-aos="fade-left")
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | Cualquier suspensión en la prestación del servicio deberá ser informada con anterioridad por la empresa prestadora del servicio a la comunidad, notificando los cortes y las fechas.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | Bajo los respectivos programas que se establezcan, las operaciones pueden ser de dos tipos: mantenimiento correctivo (nivel bajo y medio) o preventivo (nivel medio-alto y alto).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | Registro histórico de los mantenimientos realizados en niveles de complejidad altos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | Si se requieren repuestos para las operaciones de mantenimiento del sistema, la consecución y localización de estos debe ser inmediata en niveles de complejidad altos. Los demás niveles de complejidad tienen rangos que van desde un día hasta una semana.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | La presencia de sedimentos puede afectar la operación de las líneas de aducción, por lo que se requiere realizar la purga del sistema cuando se pueda detectar una afectación en un 10 % del caudal (nivel alto y medio-alto) o en un 20 % (nivel bajo y medio).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | Posterior a un proceso de reparación en la red o la instalación de un sistema de tuberías, se deben implementar procesos de desinfección establecidos para tal fin, como se indica en la Norma Técnica Colombiana NTC 4246, antes de ser usadas.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Verificación de tuberías
    p(data-aos="fade-down") Canalizar o conducir el agua entre diferentes puntos requiere establecer la definición del tipo de dispositivos y accesorios destinados para tal fin. 
    p.mb-5(data-aos="fade-down") Según el concepto emitido por Orellana. (2005), las tuberías son dispositivos que permiten la conducción y transporte de agua entre unos puntos determinados teniendo en cuenta el perfil del terreno. De acuerdo con el Ministerio de Ambiente, Vivienda, Ciudad y Territorio, en su documento RAS, en el Título B, los factores a tener en cuenta para elección del sistema de tuberías son:
    .row(data-aos="fade-right")
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img4.svg').m-auto
          .col-12.bg-c3.p-4
            p.text-center.mb-0 #[b Resistencia a la corrosión]
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img5.svg').m-auto
          .col-12.bg-c4.p-4
            p.text-center.text-white.mb-0 #[b Tipo de uniones, accesorios, anclajes]
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img6.svg').m-auto
          .col-12.bg-c5.p-4
            p.text-center.mb-0 #[b Resistencia mecánica]
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img7.svg').m-auto
          .col-12.bg-c3.p-4
            p.text-center.mb-0 #[b Condiciones económicas del sistema a instalar (mantenimiento, operación, costos de inversión)]
    .row.mb-5(data-aos="fade-left")
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img8.svg').m-auto
          .col-12.bg-c4.p-4
            p.text-center.text-white.mb-0 #[b Condiciones hidráulicas del sistema (presiones, subpresiones, sobrepresiones)]
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img9.svg').m-auto
          .col-12.bg-c5.p-4
            p.text-center.mb-0 #[b Condiciones de instalación]
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img10.svg').m-auto
          .col-12.bg-c3.p-4
            p.text-center.mb-0 #[b Resistencia contra el deterioro del sistema derivado de incrustaciones]
      .col-11.col-md-5.col-lg.m-2
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema2/img11.svg').m-auto
          .col-12.bg-c4.p-4
            p.text-center.text-white.mb-0 #[b Vida útil del proyecto]
    p.mb-4(data-aos="fade-down") Existen diferentes tipos de materiales y características inherentes relacionadas con la tubería seleccionada, que en nuestro país se deben conocer para su elección cuando se vayan a instalar en el sistema de agua, de tal manera que permitan su adecuado funcionamiento y no afecten las condiciones de calidad del agua.
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Las Normas Técnicas Colombianas relacionadas con la especificación de las tuberías pueden consultarse por medio del entonces Ministerio de Vivienda, Ciudad y Territorio, en el documento RAS 2000 [Título B], en la página 108; sin embargo, algunas también podrán ser consultadas en las bases de datos del SENA las siguientes:
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            | 
            p.mb-0 #[b NTC 382 y seleccionar NTC 382:2008 plásticos]. Tubos de poli (cloruro de vinilo) (pvc) clasificados según la presión.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            |
            p.mb-0 #[b NTC 369 y seleccionar NTC 369:2014 plásticos]. Compuestos de poli (cloruro de vinilo) rígidos y compuestos de poli (cloruro de vinilo) clorado (cpvc).
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            |
            p.mb-0 #[b NTC 539 y seleccionar NTC 539:2007]. Componentes de los sistemas de agua potable. Efectos en la salud.
          li.d-flex
            i.fas.fa-check-circle(style="color: #FFA031")
            |
            p.mb-0 #[b NTC 2295 y seleccionar NTC 2295:2008]. Uniones con sellos elastoméricos flexibles para tubos plásticos empleados para el transporte de fluidos a presión.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img12.svg' style="width: 450px").m-auto
    .row.mb-5
      .col-12.bg-c6.p-4(data-aos="fade-down")
        p.mb-0 #[b Nota]: en caso de utilizarse materiales diferentes y no contemplados en las NTC, se pueden considerar otras opciones, siempre y cuando cumplan las especificaciones internacionales: AWWA (#[i American Water Works Association Standard]), ISO (#[i International Standard Organization]), ASTM (#[i American Society for Testing and Materials]) o DIN (#[i Deutsche Industrie Normen]) para sistemas de acueducto,  y adicionalmente a las anteriormente mencionadas, la #[i American National Standards Institute] - ANSI, para sistemas de alcantarillado.
    .row.mb-4
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Características de los materiales
    p.mb-5 Existen múltiples características de los materiales que se utilizan para los sistemas de aguas; atendiendo lo que clasifica para este tema el Ministerio de Vivienda, Ciudad y territorio. (RAS 2000), los más comunes son los que se mencionan a continuación:
    .row.bg-c7(data-aos="fade-right")
      .col-12
        .py-4.px-5
          .row.justify-content-center
            .col-lg-8.mb-4
              figure
                img(src='@/assets/curso/tema2/img14.svg', alt="Muestra las características de los materiales, más comunes: a) Livianos y de fácil manejo b) Resistencia a la corrosión c) Resistencia a cargar externas d) Estabilidad estructural").m-auto
            p.text-center.mb-4 #[b En el caso de los sistemas de alcantarillado, los materiales que se pueden utilizar de acuerdo con el RAS 2000, Título D, son:]
            .col-lg-10
              figure
                img(src='@/assets/curso/tema2/img15.svg', alt="1. Arcilla vitrificada. 2. Polipropileno (PP). 3. poliéster reforzado con fibra de vidrio (GRP). 4. Resina termoestable reforzada. 5. Polietileno (PE). 6. Concreto reforzado. 7. Polivinilo de cloruro (PVC). 8. Hierro dúctil (HD). 9. Acero").m-auto
    p(data-aos="fade-down") Dependiendo del tipo de material, edad y condiciones del sistema, se generará una resistencia o fricción en la circulación del agua por el ducto. Este se conoce como coeficiente de rugosidad y se puede consultar en las especificaciones técnicas del mismo (Comisión Nacional del Agua, 2007).
    p.mb-5(data-aos="fade-down") Las tuberías de alcantarillado no deben estar en la misma zanja de las tuberías del acueducto y su cota clave siempre debe estar por debajo de la cota batea de la tubería de acueducto, conforme a lo dispuesto en el Artículo 138 de la Resolución 330 (2017).
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Accesorios objeto de verificación
    p.mb-5(data-aos="fade-down") Tanto los accesorios como las tuberías hacen parte de la red de alcantarillado, y en ambos casos deben estar diseñados para resistir las características del agua conducida. Estos accesorios son:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Cámaras de inspección")
            .col-lg-5.mb-4.mb-lg-0
              p Son estructuras dispuestas en la red de tuberías de alcantarillado diseñadas para actividades de mantenimiento y ventilación del sistema (aireación y desaireación del flujo).
            .col-lg-7
              figure
                img(src='@/assets/curso/tema2/img13.png' style="width: 450px").m-auto
          .row(numero="2" titulo="Cámaras de caída")
            .col-lg-5.mb-4.mb-lg-0
              p Son estructuras de conexión que permiten disipar la energía y proteger las estructuras del sistema de alcantarillado, cuando hay altas pendientes que sobrepasan velocidades máximas permitidas en el flujo de agua conducida (Ministerio de Vivienda, Ciudad y Territorio, 2016).
            .col-lg-7
              figure
                img(src='@/assets/curso/tema2/img14.png' style="width: 450px").m-auto
          .row(numero="3" titulo="Sumideros")
            .col-lg-5.mb-4.mb-lg-0
              p Son estructuras de captación de agua lluvia instaladas de forma transversal o lateral en las vías públicas o peatonales, conectadas a la red de alcantarillado a través de cámaras. Los tipos de sumideros pueden ser de rejilla en cuneta (a), de ventana (b), combinado (c) y transversal (d), como se muestra a continuación.
            .col-lg-7
              figure
                img(src='@/assets/curso/tema2/img15.png' style="width: 450px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Hidráulica básica
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-3 La hidráulica es una rama de la física que se encarga de estudiar el comportamiento de los fluidos en movimiento (hidrodinámica) o estáticos (hidrostática).
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 Teniendo en cuenta que la materia se puede encontrar en tres estados: líquido, sólido y gaseoso, esta ciencia se enfoca en la característica esencial que un fluido es aquel que “fluye”, no es rígido y puede adoptar la forma del recipiente que lo contiene, es decir, hace referencia a los líquidos y gases según lo menciona Gratton. (2002).
        p.mb-0 Las propiedades de los fluidos que son elementales entender para hacer un proceso de verificación de los sistemas de acueducto son:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img16.png' style="width: 450px").m-auto
    .row.bg-c9.mb-5(data-aos="fade-down")
      .col-12.px-0.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img17.png', alt="a) Volumen: es el espacio que ocupa un cuerpo, las unidades para expresarlo pueden ser de acuerdo con el sistema internacional (m3, mL, L), cegesimal (cm3) o el sistema inglés (pie3, galón). b) Caudal o gasto: es la relación entre cantidad de agua que fluye a través de una sección y el tiempo. c) Densidad: es la relación entre la masa y el volumen (𝜌 = 𝑚𝑣), expresada como Kg/m3 o g/cm3, por ejemplo. d) Capilaridad: capacidad de ascenso o descenso de un líquido por un tubo formando un menisco cóncavo o convexo dependiendo de las características de este. e) Viscosidad: resistencia que experimenta un líquido a fluir. f) Adhesión: fuerzas de atracción entre moléculas de diferentes sustancias. g) Cohesión: fuerza de atracción entre moléculas de la misma sustancia. h) Presión: es la relación entre la fuerza (de un gas o líquido) ejercida en un área o la superficie. En el sistema internacional se expresa en N/m2 (newton sobre metro cuadrado), es decir, un Pascal (Pa).").m-auto
      .col-12.px-0.d-block.d-lg-none
        figure
          img(src='@/assets/curso/tema2/img17m.png', alt="a) Volumen: es el espacio que ocupa un cuerpo, las unidades para expresarlo pueden ser de acuerdo con el sistema internacional (m3, mL, L), cegesimal (cm3) o el sistema inglés (pie3, galón). b) Caudal o gasto: es la relación entre cantidad de agua que fluye a través de una sección y el tiempo. c) Densidad: es la relación entre la masa y el volumen (𝜌 = 𝑚𝑣), expresada como Kg/m3 o g/cm3, por ejemplo. d) Capilaridad: capacidad de ascenso o descenso de un líquido por un tubo formando un menisco cóncavo o convexo dependiendo de las características de este. e) Viscosidad: resistencia que experimenta un líquido a fluir. f) Adhesión: fuerzas de atracción entre moléculas de diferentes sustancias. g) Cohesión: fuerza de atracción entre moléculas de la misma sustancia. h) Presión: es la relación entre la fuerza (de un gas o líquido) ejercida en un área o la superficie. En el sistema internacional se expresa en N/m2 (newton sobre metro cuadrado), es decir, un Pascal (Pa).").m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c8.px-4.py-3
        h3.text-white.mb-0 Aforo de caudal
    p.mb-4(data-aos="fade-down") Una de las acciones más importantes para realizar la verificación de un sistema de agua es el aforo de caudal. Se trata de medir un flujo. Puede ser de manera directa con algún aparato, equipo o procedimiento, o de forma indirecta, por ejemplo, determinando el caudal a partir del nivel del agua.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ecuación de continuidad (Figura 1), como menciona Sotelo (1994) en su libro hidráulica básica, está determinada por el principio de conservación de la materia, donde la masa de un fluido es almacenada en un volumen control (forma y magnitud constantes) en un tiempo determinado.
    .row.bg-c10.mb-4
      .col-12(data-aos="fade-up")
        .py-4.px-5
          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-botones.mb-4
                p.mb-0 #[b Figura 1]. Conservación de la masa en caudal o gasto (G)
              figure
                img(src='@/assets/curso/tema2/img16.svg', alt="Muestra imagen evaluación de continuidad donde muestra sección 1 parte ancha y reduce forma embudo horizontal sección 2.").m-auto
                figcaption.text-center Fuente. Tomada de Ángel (2014).
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 El aforo de caudal por medio de volumetría se lleva a cabo en una estructura hidráulica como un grifo, tubería o canal, a partir del llenado de un volumen conocido (se utilizan baldes aforados cada litro con capacidades de 10 a 20L) en un promedio de tiempo determinado. Se debe tener especial cuidado en el momento de medición de tiempo, el cual inicia en la descarga y se detiene al retirarse de la misma (Ideam, 2007).
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img18.svg', style="width: 450px", alt="Caudal(Q) = (Volumen del fluido)/Tiempo").m-auto
    p.mb-5.text-center(data-aos="fade-down") #[b La determinación del caudal o gasto también se puede realizar a partir de las siguientes metodologías:]
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="Método área y velocidad")
        .col-lg-9.mb-4.mb-lg-0
          p Para canales abiertos, se puede realizar la estimación de caudal a partir de la determinación del área de la sección transversal del canal, quebrada, zanja o río, teniendo en cuenta las siguientes consideraciones, mediante el método área y velocidad, según el Ideam (2007):
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 No deben existir obstáculos sobre la corriente que alteren el paso del agua
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Orillas del canal sean paralelas para la sección en la que se vaya a realizar la medición
            li.d-flex
              i.fas.fa-check-circle(style="color: #4DB1F0")
              | 
              p.mb-0 Evitar zonas de excesiva turbulencia
          p Medir el ancho (W) de orilla a orilla con una cinta y dividir en verticales para la toma de las velocidades en cada punto a una profundidad H del canal correspondiente al 20 % y 80 %, con ayuda del molinete, el cual se coloca en dirección aguas arriba de la corriente. Así para cada sección.
          p Se determina el área de la sección transversal del río objeto de medición teniendo en cuenta el ancho y la profundidad. Con los anteriores datos de velocidad y área, se calcula el caudal (Q):
          figure
            img(src='@/assets/curso/tema2/img19.svg', style="width: 350px", alt="Caudal(Q) = Velocidad x Área").m-auto
        .col-lg-3
          figure
            img(src='@/assets/curso/tema2/img19.png' style="width: 250px").m-auto
      .row(titulo="Método flotador")
        .col-lg-7.mb-4.mb-lg-0
          p La determinación del área se realiza de la misma manera que el método anterior, sin embargo, la medición de la velocidad se realiza con un objeto liviano y su recorrido desde el punto A al punto B, es decir, una distancia conocida en el canal y un promedio de tiempos, posterior a la toma de varias mediciones.
          figure
            img(src='@/assets/curso/tema2/img20.svg' style="width: 280px", alt="Velocidad =  Distancia/Tiempo").m-auto
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/img20.png' style="width: 450px").m-auto
      .row(titulo="Método del vertedero")
        .col-12
          p.mb-5 Los vertederos son estructuras hidráulicas que obstruyen el flujo en un canal, generando una elevación del líquido por encima de la pared del vertedero, conocida como carga o cabeza (H) (Tabla 1).  La estimación del caudal dependerá del tipo de vertedero (geometría, contracciones, ángulos, la longitud de la cresta, principalmente) y la altura de la lámina de agua determinada en campo.
          .titulo-sexto.color-acento-botones.mb-4
            p.mb-0 #[b Tabla 1]. Fórmulas de acuerdo con el tipo de vertedero
          .row
            .col-12.bg-white
              .p-3
                .tabla-a.color-secundario
                  table
                    thead
                      tr
                        th Tipo de vertedero
                        th Diagrama
                        th Ecuación
                    tbody
                      tr(style="background-color: #ffffff")
                        td.text-center #[b Rectangular con contratación]
                        td
                          figure
                            img(src='@/assets/curso/tema2/img21.svg', style="width: 280px", alt="Rectangular con contratación").m-auto
                        td
                          p.mb-0 Q = 1,83 * L * H#[sup 1,5]
                          p.mb-0 Q = caudal en m#[sup 3]/seg
                          p.mb-0 L = longitud de cresta, m
                          p.mb-0 H = cabeza en m
                      tr(style="background-color: #F6FBFF")
                        td 
                          p.mb-0.text-center #[b Rectangular sin contracción]
                          p.mb-0.text-center #[b (cuando cae por una pared)]
                        td
                          figure
                            img(src='@/assets/curso/tema2/img22.svg', style="width: 280px", alt="Rectangular sin contracción").m-auto
                        td
                          p.mb-0 Q = 3,3 * L * H#[sup 1,5]
                          p.mb-0 Q = caudal en m#[sup 3]/seg
                          p.mb-0 L = longitud de cresta, m
                          p.mb-0 H = cabeza en m
                      tr(style="background-color: #ffffff")
                        td.text-center #[b Triangular]
                        td
                          figure
                            img(src='@/assets/curso/tema2/img23.svg', style="width: 280px", alt="Triangular").m-auto
                        td
                          p.mb-0 #[b Φ= 90º]
                          p.mb-0 Q = 1,4 * H#[sup 5/2]
                          p.mb-0 Q = caudal en m#[sup 3]/seg
                          p.mb-0 H = cabeza en m
                          p.mb-0 #[b Φ= 60º]
                          p.mb-0 0,775 * H#[sup 2,47]
                          p.mb-0 Q = caudal en m#[sup 3]/seg
                          p.mb-0 H = cabeza en m
                      tr(style="background-color: #F6FBFF")
                        td 
                          p.mb-0.text-center #[b Trapezoidal]
                        td
                          figure
                            img(src='@/assets/curso/tema2/img24.svg', style="width: 280px", alt="Trapezoidal").m-auto
                        td
                          p Si  la  pendiente  de  los  lados tiene  una  relación  4#[sub (vertical)]/ 1#[sub (horizontal)], se aplica:
                          p.mb-0 Q = 1,859 * L * H#[sup 1,5]
                          p.mb-0 Q= caudal en m#[sup 3]/seg
                          p.mb-0 L = longitud de cresta, m
                          p.mb-0 H = cabeza en m
                      tr(style="background-color: #ffffff")
                        td.text-center #[b Cresta gruesa]
                        td
                        td
                          p.mb-0 Q = 1,67 * L * H#[sup 1,5]
                          p.mb-0 Q = caudal en m#[sup 3]/seg
                          p.mb-0 L = longitud de cresta, m
                          p.mb-0 H = cabeza en m

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Compuertas',
        texto:
          'Se utilizan con el fin de determinar la circulación o no del agua a través de conductos o canales, y su operación puede ser a través de mecanismos manuales o automatizados.',
        imagen: require('@/assets/curso/tema2/img4.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sistema de rejillas',
        texto:
          'Se disponen de tal forma que permiten la retención de material grueso, funcionando como un mecanismo de cribado o separación de partículas sólidas que están contenidas en el agua. Existen rejillas a través de mallas o barras gruesas y finas, y el material debe ser inoxidable.',
        imagen: require('@/assets/curso/tema2/img5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Válvulas',
        texto:
          'Dispositivo para la regulación del flujo a través de la tubería, adicionalmente permite la regulación de la presión y las variaciones en el cambio de la dirección del flujo o la permanencia de este a través de un conducto. Las válvulas pueden ser reguladoras de caudal, presión, purga de aire, de retención o de compuerta (Figura 2), entre otras.',
        imagen: require('@/assets/curso/tema2/img6.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Bombas',
        texto:
          'Son requeridas en los sistemas de abastecimiento debido a que permiten impulsar el agua gracias a mecanismos de vacío y succión que se generan, lo cual facilita la llegada del flujo a un punto determinado.',
        imagen: require('@/assets/curso/tema2/img7.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Motores',
        texto:
          'Pueden ser eléctricos, o partir de diésel o gasolina, para la generación de energía mecánica a través de procesos de combustión.',
        imagen: require('@/assets/curso/tema2/img8.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tanques de almacenamiento',
        texto:
          'Son depósitos que permiten contener un volumen de agua determinado con el fin de garantizar un suministro constante en la red de distribución cuando las demandas de esta se incrementan. También resultan de gran utilidad al momento de generarse una falla en el sistema.',
        imagen: require('@/assets/curso/tema2/img9.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hidrantes',
        texto:
          'Es una instalación articulada preferiblemente a las tuberías matrices y permite la disposición del líquido vital en condiciones de emergencia, tales como incendios, o de manera temporal a la comunidad circunvecina. De acuerdo con los criterios establecidos por el Reglamento técnico para el sector de agua potable y saneamiento básico - RAS (2000), debe garantizarse una descarga de 5 L/s en este tipo de dispositivos.',
        imagen: require('@/assets/curso/tema2/img10.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tuberías',
        texto:
          'Es el sistema de drenaje o conducción del fluido, conformado por más de dos tuberías ensambladas con la ayuda de algunos accesorios que funcionan como uniones. Estas tuberías deben contar con algunas especificaciones particulares relacionadas con el material para su escogencia.<br>Un sistema de abastecimiento suministra agua con diferentes usos: doméstico, industrial, comercial, entre otros. Esto se lleva a cabo a partir de las redes de distribución que pueden tener una configuración abierta, cerrada o combinada (mixta).<br>Dependiendo de las condiciones del terreno, así como la ubicación de la fuente de abastecimiento y la unidad donde se llevan a cabo los procesos correspondientes al tratamiento, los mecanismos de distribución hasta el usuario final pueden ser por gravedad o bombeo. En ambos casos la presión constante garantiza continuidad en el suministro.',
        imagen: require('@/assets/curso/tema2/img11.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Operación y mantenimiento',
        texto:
          'De acuerdo con el Ministerio de Ambiente, Vivienda, Ciudad y Territorio (2010), en el Reglamento técnico para el sector de agua potable y saneamiento básico (RAS), en su Título B Sistemas de acueducto, se establecen algunos parámetros a tener en cuenta dentro de los criterios de mantenimiento en las líneas de aducción (agua cruda) y/o conducción (agua tratada), los cuales varían de acuerdo con el nivel de complejidad de cada sistema.',
        imagen: require('@/assets/curso/tema2/img12.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
