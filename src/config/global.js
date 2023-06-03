export default {
  global: {
    componenteFormativo: 'Verificación de sistemas de acueducto',
    descripcionCurso:
      'Los sistemas de acueducto permiten suministrar a una población determinada cantidad de agua, a través de la operación de un tren de tratamiento en diferentes etapas. Sin embargo, es indispensable garantizar condiciones de calidad bajo el cumplimiento del marco normativo en relación con los parámetros físico-químicos y microbiológicos, así como la correcta operación y mantenimiento de los procesos y operaciones unitarias.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      //{
      //  nombreRuta: 'introduccion',
      //  icono: 'fas fa-info-circle',
      //  titulo: 'Introducción',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Reflexión sobre la importancia del agua',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos básicos de hidráulica e hidrología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Redes de agua',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Verificación de tuberías',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Hidráulica básica',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Redes de acueducto, alcantarillado e infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Entidades de vigilancia y sus funciones de control de calidad del agua potable',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistemas de abastecimiento',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Vigilancia del sistema de acueducto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Parámetros de análisis de agua <i>in situ</i>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Índices de calidad del agua (IRCA)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Puntos de muestreo de calidad de agua en redes de distribución',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Diego Hernández. (2018, 29 julio). <em>Operación Planta de Tratamiento Agua Potable</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iY1MYK_ZjBA&feature=youtu.be',
    },
    {
      tema: '',
      referencia:
        'Letargo Acargo. (2011, 24 diciembre). <em>La historia del agua embotellada - Annie Leonard (Completo)</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gNgbSJbqnSQ',
    },
    {
      tema: '',
      referencia:
        'Resolución 2115 de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007.',
      tipo: 'Normatividad',
      link:
        'https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Legislaci%C3%B3n_del_agua/Resoluci%C3%B3n_2115.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agua potable o agua para consumo humano',
      significado:
        'Es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el presente decreto y demás normas que la reglamenten, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal. Decreto 1575 (2007).',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'Son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas. Resolución 2115 (2007).',
    },
    {
      termino: 'Cloro residual libre',
      significado:
        'Es aquella porción que queda en el agua después de un período de contacto definido, que reacciona química y biológicamente como ácido hipocloroso o como ion hipoclorito. Resolución 2115 (2007).',
    },
    {
      termino: 'Inspección sanitaria',
      significado:
        'Es el conjunto de acciones que en desarrollo de sus funciones, realizan las autoridades sanitarias y las personas prestadoras que suministran o distribuyen agua para consumo humano, destinadas a obtener información, conocer, analizar y evaluar los riesgos que presenta la infraestructura del sistema de abastecimiento de agua, a identificar los posibles factores de riesgo asociado a inadecuadas prácticas operativas y a la determinación de la calidad del agua suministrada, mediante la toma de muestras, solicitud de información y visitas técnicas al sistema de suministro, dejando constancia de ello mediante el levantamiento del acta respectiva.  Decreto 1575 (2007).',
    },
    {
      termino: 'Planta de tratamiento o de potabilización',
      significado:
        'Conjunto de obras, equipos y materiales necesarios para efectuar los procesos que permitan cumplir con las normas de calidad del agua potable. Decreto 1575 (2007).',
    },
    {
      termino: 'Puntos de muestreo en red de distribución',
      significado:
        'Son aquellos sitios representativos donde se realiza la recolección de la muestra de agua para consumo humano en la red de distribución, de acuerdo con lo definido entre la autoridad sanitaria y la persona prestadora que suministra o distribuye agua para consumo humano. Decreto 1575 (2007).',
    },
    {
      termino: 'Red de distribución o red pública',
      significado:
        'Es el conjunto de tuberías, accesorios, estructura y equipos que conducen el agua desde el tanque de almacenamiento o planta de tratamiento hasta las acometidas domiciliarias. Decreto 1575 (2007).',
    },
    {
      termino: 'Tratamiento o potabilización',
      significado:
        'Es el conjunto de operaciones y procesos que se realizan sobre el agua cruda, con el fin de modificar sus características físicas, químicas y microbiológicas, para hacerla apta para el consumo humano. Resolución 2115 (2007).',
    },
    {
      termino: 'Vigilancia de la calidad del agua para consumo humano',
      significado:
        'Es el conjunto de acciones periódicas realizadas por la autoridad sanitaria o por las personas prestadoras que suministran o distribuyen agua para el consumo humano en municipios de más de cien mil (100.000) habitantes, según el caso, para comprobar y evaluar el riesgo que representa para la salud pública la calidad del agua distribuida por los sistemas de suministro de agua para consumo humano, así como para valorar el grado de cumplimiento de las buenas prácticas sanitarias y demás disposiciones establecidas en el presente decreto. Decreto 1575 (2007).',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación española de abastecimientos de agua y saneamiento. (1984). <em>Manual de la cloración del agua. Asociación española de abastecimientos de agua y saneamiento</em>. ',
      link:
        'https://www.asoaeas.com/sites/default/files/Documentos/AEAS.%20Manual%20de%20la%20Cloracion.pdf',
    },
    {
      referencia:
        'Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente. (2002). <em>Operación y mantenimiento de plantas de tratamiento de agua. Manual de capacitación de operadores. CEPIS</em>. ',
      link:
        'http://www.ingenieroambiental.com/4020/operacion%20y%20mantenimiento%20de%20plantas%20de%20tratamiento%20de%20agua%20(cepis)(2).pdf',
    },
    {
      referencia:
        'Comisión Nacional del Agua (Ed.). (n.d.). Manual de agua potable, alcantarillado y saneamiento. <em>Diseño de redes de distribución de agua potable (Vol. 12). Secretaría de Medio Ambiente y Recursos Naturales</em>. ',
      link:
        'https://sswm.info/sites/default/files/reference_attachments/CONAGUA%20s.f.a.%20Dise%C3%B1o%20de%20redes%20de%20distribuci%C3%B3n%20de%20agua%20potable.pdf',
    },
    {
      referencia:
        'Comisión Nacional del Agua. (2007). <em>Manual de agua potable, alcantarillado y saneamiento</em>. Secretaría de Medio Ambiente y Recursos Naturales. ',
      link:
        'http://www.conagua.gob.mx/conagua07/publicaciones/publicaciones/Libros/03CarcamosDeBombeoParaAlcantarilladoFuncionaleHidraulico.pdf',
    },
    {
      referencia:
        'Del Ángel, E. (2014). <em>Hidrodinámica</em>. Universidad Autónoma del Estado de Hidalgo. ',
      link: 'https://repository.uaeh.edu.mx/bitstream/handle/123456789/16715',
    },
    {
      referencia:
        'García, R. (2012). <em>Manual de prácticas de laboratorio de ingeniería sanitaria</em>. Universidad Autónoma de Chihuahua. ',
      link:
        'http://fing.uach.mx/licenciaturas/IC/2012/01/26/MANUAL_LABORATORIO_DE_SANITARIA.pdf',
    },
    {
      referencia:
        'Giraldo, G. (1995). <em>Manual de análisis de aguas</em>. Universidad Nacional de Colombia. ',
      link: 'https://repositorio.unal.edu.co/handle/unal/55218',
    },
    {
      referencia:
        'Gratton, J. (2002). <em>Introducción a la mecánica de fluidos</em>. ',
      link:
        'https://www.academia.edu/34612346/INTRODUCCI%C3%93N_A_LA_MEC%C3%81NICA_DE_FLUIDOS',
    },
    {
      referencia: 'IDEAM. (2019). <em>Estudio nacional del agua</em>. ',
      link: 'http://www.andi.com.co/Uploads/ENA_2018-comprimido.pdf',
    },
    {
      referencia:
        'IDEAM. (2007). <em>Instructivo para la toma de muestras de aguas residuales</em>. ',
      link:
        'http://www.ideam.gov.co/documents/14691/38158/Toma_Muestras_AguasResiduales.pdf/f5baddf0-7d86-4598-bebd-0e123479d428',
    },
    {
      referencia:
        'Programa de Vigilancia por Laboratorio de la Calidad de Agua para Consumo Humano. (2011). <em>Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio</em>. Instituto Nacional de Salud. ',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia:
        'Ley 142 de 1994. Por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones. Julio 11 de 1994. DO. Nº 41.433. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0142_1994.html',
    },
    {
      referencia:
        'Ley 715 de 2001. Por la cual se dictan normas orgánicas en materia de recursos y competencias de conformidad con los artículos 151, 288, 356 y 357 (Acto Legislativo 01 de 2001) de la Constitución Política y se dictan otras disposiciones para organizar la prestación de los servicios de educación y salud, entre otros. Diciembre 21 de 2001. DO. Nº 44.654. ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-86098_archivo_pdf.pdf',
    },
    {
      referencia:
        'Martínez, L. (2001). <em>Manual de operación y mantención de equipos de riego presurizado</em>. Instituto de Investigaciones Agropecuarias. ',
      link: 'https://biblioteca.inia.cl/handle/123456789/7729',
    },
    {
      referencia:
        'Martínez, M. y Osorio, A. (2018). Validación de un método para el análisis de color real en agua. <em>Revista Facultad de Ciencias, 7(1), p. 143-155</em>. ',
      link: 'https://doi.org/10.15446/rev.fac.cienc.v7n1.68086',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2010). <em>Reglamento técnico del sector de agua potable y saneamiento básico - RAS. Título B Sistemas de acueducto</em>. Viceministerio de Agua y Saneamiento Básico. ',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/titulob-030714.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda, Ciudad y Territorio. (2016). <em>Reglamento técnico del sector de agua potable y saneamiento básico - RAS. Título D Sistemas de recolección y evacuación de aguas residuales domésticas y aguas lluvias</em>. Viceministerio de Agua y Saneamiento Básico. ',
      link:
        'https://minvivienda.gov.co/sites/default/files/documentos/titulo_d.pdf',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2000). <em>Reglamento técnico del sector de agua potable y saneamiento básico - RAS. Título A Aspectos generales de los sistemas de agua potable y saneamiento básico</em>. Dirección General de Agua Potable y Saneamiento Básico. ',
      link:
        'https://minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_a_.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008).  <em>Guía que amplía aspectos técnicos para la selección del punto de muestreo para el control y vigilancia de la calidad del agua para consumo humano sobre la red de distribución</em>. ',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2008%20Gu%C3%ADa%20t%C3%A9cnica%20Resoluci%C3%B3n%200811.pdf',
    },
    {
      referencia:
        'Norma Técnica Colombiana. (1997). <em>Desinfección de líneas principales para la conducción de agua</em>. (NTC 4246). ',
      link: 'https://docplayer.es/82682705-Norma-tecnica-colombiana-4246.html',
    },
    {
      referencia:
        'Orellana, J. (2005). <em>Conducción de las aguas</em>. Ingeniería Sanitaria- UTN - FRRO. ',
      link:
        'https://www.academia.edu/4464290/Ingenieria_Sanitaria_A4_Capitulo_07_Conduccion_de_las_Aguas',
    },
    {
      referencia:
        'Organización Mundial de la Salud y Organización Panamericana de la Salud. (2009). <em>Medición de cloro residual en el agua</em>. Guías técnicas sobre saneamiento, agua y salud. OMS. ',
      link:
        'https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Legislaci%C3%B3n_del_agua/Resoluci%C3%B3n_2115.pdf',
    },
    {
      referencia:
        'Resolución 2115 de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007. ',
      link:
        'https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Legislaci%C3%B3n_del_agua/Resoluci%C3%B3n_2115.pdf',
    },
    {
      referencia:
        'Resolución 811 de 2008. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su aérea de influencia los lugares y puntos de muestreo para el control y vigilancia de la calidad del agua para consumo humano en la red de distribución. Marzo 5 de 2008. ',
      link:
        'http://normograma.invima.gov.co/docs/resolucion_minproteccion_0811_2008.htm',
    },
    {
      referencia:
        'Sotelo, G. (1994). <em>Hidráulica general (Vol. 1)</em>. Limusa. ',
      link:
        'https://www.academia.edu/38544755/Hidr%C3%A1ulica_General_Vol_1_Fundamentos_Gilberto_Sotelo_%C3%81vila',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patrica Aristizabal Gutiérrez',
          cargo: 'Líder ecosistema de recursos educativos digitales (RED)',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdron',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de gestión industrial',
        },
        {
          nombre: 'Jesus Ricardo Arias Munevar',
          cargo: 'Instructor ambiental',
          centro: 'Centro de gestión industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cardenas',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de diseño y metrologia',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Acompañamiento pedagógico',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
