(function(e){function a(a){for(var n,o,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,a=0;a<r.length;a++){for(var i=r[a],n=!0,o=1;o<i.length;o++){var c=i[o];0!==t[c]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=i[0]))}return e}var n={},o={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"8828acfe","chunk-0206bfa0":"049e2db5","chunk-0c047e41":"f6eae9e9","chunk-13a6037e":"a8aa697e","chunk-18f95272":"42134f14","chunk-25b302c8":"ae2708f6","chunk-26fc7596":"46354772","chunk-2c06842c":"0dc55578","chunk-2d0c5615":"56ab507b","chunk-2d0e96ec":"4f8a7593","chunk-2d208d90":"db548348","chunk-2d21d0e2":"447c9ad9","chunk-2d22c123":"a3515b26","chunk-2d2747e2":"79be545f","chunk-2e80bb9a":"82ddeeb5","chunk-319206de":"5cc62088","chunk-32334cb6":"cb2e0855","chunk-36769079":"66aa00cb","chunk-3c57cd7b":"07a65773","chunk-4cdd78c0":"de715ca5","chunk-4f2d402a":"38063bc1","chunk-515a8379":"7366077d","chunk-53ccb27e":"5731057a","chunk-55d286b8":"f1f0b5bd","chunk-59974754":"fec9dd94","chunk-60cbc06b":"c4c1ca78","chunk-659152b8":"823b6bba","chunk-6e1e538a":"c4eee319","chunk-766a929b":"c5c0333c","chunk-c796899c":"4918e9f6","chunk-e8a7823a":"cac34dc4","chunk-f2df7d2c":"58b34177","chunk-fde47172":"ad1cdf34",comple:"1909e2c0",creditos:"c99c84cd",glosario:"b0c40a46",intro:"609ef0d4",referencias:"c26750bd",sintesis:"efc5d944",tema1:"94225663",tema2:"91ee5163",tema3:"180828d8",tema4:"a4c20f78"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var a=[],i={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&i[e]&&a.push(o[e]=new Promise((function(a,i){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"35f9f09d","chunk-60cbc06b":"d3a83979","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"5eb299c6","chunk-766a929b":"cc043ef5","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===n||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[e],m.parentNode.removeChild(m),i(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var n=t[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,i){n=t[e]=[a,i]}));a.push(n[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var i=t[e];if(0!==i){if(i){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,i[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,i){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(i,n,function(a){return e[a]}.bind(null,n));return i},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"417a":function(e,a,i){e.exports=i.p+"img/fondo-banner-principal.b185a095.svg"},"52e5":function(e,a,i){e.exports=i.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("68f3"),o=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"app",attrs:{id:"app"}},[i("Header"),i("div",{staticClass:"contenedor-principal"},[i("AsideMenu"),i("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[i("router-view")],1)],1),i("BarraAvance"),i("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=i("2877"),d=Object(s["a"])(c,o,t,!1,null,null,null),l=d.exports,u=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("2b0e")),m=i("8c4f"),p=i("ae58"),f=i("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return i.e("intro").then(i.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return i.e("tema1").then(i.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return i.e("tema2").then(i.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return i.e("tema3").then(i.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return i.e("tema4").then(i.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return i.e("actividad").then(i.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return i.e("glosario").then(i.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return i.e("comple").then(i.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return i.e("referencias").then(i.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return i.e("sintesis").then(i.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return i.e("creditos").then(i.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var i={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?i:new Promise((function(e){setTimeout((function(){e(i)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=i("1c2c"),v=(i("a3a0"),{global:{componenteFormativo:"Verificación de sistemas de acueducto",descripcionCurso:"Los sistemas de acueducto permiten suministrar a una población determinada cantidad de agua, a través de la operación de un tren de tratamiento en diferentes etapas. Sin embargo, es indispensable garantizar condiciones de calidad bajo el cumplimiento del marco normativo en relación con los parámetros físico-químicos y microbiológicos, así como la correcta operación y mantenimiento de los procesos y operaciones unitarias.",imagenBannerPrincipal:i("74b5"),fondoBannerPrincipal:i("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:i("71f8")},{clases:["banner-principal-decorativo-2"],imagen:i("8f04")},{clases:["banner-principal-decorativo-3"],imagen:i("7d72")},{clases:["banner-principal-decorativo-4"],imagen:i("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",numero:"1",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"1",titulo:"Fundamentos básicos de hidráulica e hidrología",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Redes de agua",hash:"t_2_1"},{numero:"1.2",titulo:"Verificación de tuberías",hash:"t_2_2"},{numero:"1.3",titulo:"Hidráulica básica",hash:"t_2_3"}]},{nombreRuta:"tema3",numero:"2",titulo:"Redes de acueducto, alcantarillado e infraestructura",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Normativa",hash:"t_3_1"},{numero:"2.2",titulo:"Entidades de vigilancia y sus funciones de control de calidad del agua potable",hash:"t_3_2"},{numero:"2.3",titulo:"Sistemas de abastecimiento",hash:"t_3_3"}]},{nombreRuta:"tema4",numero:"3",titulo:"Vigilancia del sistema de acueducto",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Parámetros de análisis de agua <i>in situ</i>",hash:"t_4_1"},{numero:"3.2",titulo:"Índices de calidad del agua (IRCA)",hash:"t_4_2"},{numero:"3.3",titulo:"Puntos de muestreo de calidad de agua en redes de distribución",hash:"t_4_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/921200_CF14_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1. Fundamentos básicos de hidráulica e hidrología.",referencia:"Diego Hernández. (2018, 29 julio). <em>Operación Planta de Tratamiento Agua Potable</em>.",tipo:"Video",link:"https://www.youtube.com/watch?v=iY1MYK_ZjBA&feature=youtu.be"},{tema:"2. Redes de acueducto, alcantarillado e infraestructura.",referencia:"Letargo Acargo. (2011, 24 diciembre). <em>La historia del agua embotellada - Annie Leonard (Completo)</em>.",tipo:"Video",link:"https://www.youtube.com/watch?v=gNgbSJbqnSQ"},{tema:"2.2. Entidades de vigilancia y sus funciones de control de calidad del agua potable",referencia:"Resolución 2115 de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007.",tipo:"Normatividad",link:"https://scj.gov.co/sites/default/files/marco-legal/Res_2115_de_2007.pdf"}],glosario:[{termino:"Agua potable o agua para consumo humano",significado:"Es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el presente decreto y demás normas que la reglamenten, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal. Decreto 1575 (2007)."},{termino:"Análisis físico y químico del agua",significado:"Son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas. Resolución 2115 (2007)."},{termino:"Cloro residual libre",significado:"Es aquella porción que queda en el agua después de un período de contacto definido, que reacciona química y biológicamente como ácido hipocloroso o como ion hipoclorito. Resolución 2115 (2007)."},{termino:"Inspección sanitaria",significado:"Es el conjunto de acciones que en desarrollo de sus funciones, realizan las autoridades sanitarias y las personas prestadoras que suministran o distribuyen agua para consumo humano, destinadas a obtener información, conocer, analizar y evaluar los riesgos que presenta la infraestructura del sistema de abastecimiento de agua, a identificar los posibles factores de riesgo asociado a inadecuadas prácticas operativas y a la determinación de la calidad del agua suministrada, mediante la toma de muestras, solicitud de información y visitas técnicas al sistema de suministro, dejando constancia de ello mediante el levantamiento del acta respectiva.  Decreto 1575 (2007)."},{termino:"Planta de tratamiento o de potabilización",significado:"Conjunto de obras, equipos y materiales necesarios para efectuar los procesos que permitan cumplir con las normas de calidad del agua potable. Decreto 1575 (2007)."},{termino:"Puntos de muestreo en red de distribución",significado:"Son aquellos sitios representativos donde se realiza la recolección de la muestra de agua para consumo humano en la red de distribución, de acuerdo con lo definido entre la autoridad sanitaria y la persona prestadora que suministra o distribuye agua para consumo humano. Decreto 1575 (2007)."},{termino:"Red de distribución o red pública",significado:"Es el conjunto de tuberías, accesorios, estructura y equipos que conducen el agua desde el tanque de almacenamiento o planta de tratamiento hasta las acometidas domiciliarias. Decreto 1575 (2007)."},{termino:"Tratamiento o potabilización",significado:"Es el conjunto de operaciones y procesos que se realizan sobre el agua cruda, con el fin de modificar sus características físicas, químicas y microbiológicas, para hacerla apta para el consumo humano. Resolución 2115 (2007)."},{termino:"Vigilancia de la calidad del agua para consumo humano",significado:"Es el conjunto de acciones periódicas realizadas por la autoridad sanitaria o por las personas prestadoras que suministran o distribuyen agua para el consumo humano en municipios de más de cien mil (100.000) habitantes, según el caso, para comprobar y evaluar el riesgo que representa para la salud pública la calidad del agua distribuida por los sistemas de suministro de agua para consumo humano, así como para valorar el grado de cumplimiento de las buenas prácticas sanitarias y demás disposiciones establecidas en el presente decreto. Decreto 1575 (2007)."}],referencias:[{referencia:"Asociación española de abastecimientos de agua y saneamiento. (1984). <em>Manual de la cloración del agua. Asociación española de abastecimientos de agua y saneamiento</em>. ",link:""},{referencia:"Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente. (2002). <em>Operación y mantenimiento de plantas de tratamiento de agua. Manual de capacitación de operadores. CEPIS</em>. ",link:"http://www.ingenieroambiental.com/4020/operacion%20y%20mantenimiento%20de%20plantas%20de%20tratamiento%20de%20agua%20(cepis)(2).pdf"},{referencia:"Comisión Nacional del Agua (Ed.). (n.d.). Manual de agua potable, alcantarillado y saneamiento. <em>Diseño de redes de distribución de agua potable (Vol. 12). Secretaría de Medio Ambiente y Recursos Naturales</em>. ",link:"https://sswm.info/sites/default/files/reference_attachments/CONAGUA%20s.f.a.%20Dise%C3%B1o%20de%20redes%20de%20distribuci%C3%B3n%20de%20agua%20potable.pdf"},{referencia:"Comisión Nacional del Agua. (2007). <em>Manual de agua potable, alcantarillado y saneamiento</em>. Secretaría de Medio Ambiente y Recursos Naturales. ",link:""},{referencia:"Del Ángel, E. (2014). <em>Hidrodinámica</em>. Universidad Autónoma del Estado de Hidalgo. ",link:"https://repository.uaeh.edu.mx/bitstream/handle/123456789/16715"},{referencia:"García, R. (2012). <em>Manual de prácticas de laboratorio de ingeniería sanitaria</em>. Universidad Autónoma de Chihuahua. ",link:""},{referencia:"Giraldo, G. (1995). <em>Manual de análisis de aguas</em>. Universidad Nacional de Colombia. ",link:"https://repositorio.unal.edu.co/handle/unal/55218"},{referencia:"Gratton, J. (2002). <em>Introducción a la mecánica de fluidos</em>. ",link:"https://www.academia.edu/34612346/INTRODUCCI%C3%93N_A_LA_MEC%C3%81NICA_DE_FLUIDOS"},{referencia:"IDEAM. (2019). <em>Estudio nacional del agua</em>. ",link:"http://www.andi.com.co/Uploads/ENA_2018-comprimido.pdf"},{referencia:"IDEAM. (2007). <em>Instructivo para la toma de muestras de aguas residuales</em>. ",link:"http://www.ideam.gov.co/documents/14691/38158/Toma_Muestras_AguasResiduales.pdf/f5baddf0-7d86-4598-bebd-0e123479d428"},{referencia:"Programa de Vigilancia por Laboratorio de la Calidad de Agua para Consumo Humano. (2011). <em>Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio</em>. Instituto Nacional de Salud. ",link:"https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf"},{referencia:"Ley 142 de 1994. Por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones. Julio 11 de 1994. DO. Nº 41.433. ",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_0142_1994.html"},{referencia:"Ley 715 de 2001. Por la cual se dictan normas orgánicas en materia de recursos y competencias de conformidad con los artículos 151, 288, 356 y 357 (Acto Legislativo 01 de 2001) de la Constitución Política y se dictan otras disposiciones para organizar la prestación de los servicios de educación y salud, entre otros. Diciembre 21 de 2001. DO. Nº 44.654. ",link:"https://www.mineducacion.gov.co/1621/articles-86098_archivo_pdf.pdf"},{referencia:"Martínez, L. (2001). <em>Manual de operación y mantención de equipos de riego presurizado</em>. Instituto de Investigaciones Agropecuarias. ",link:"https://biblioteca.inia.cl/handle/123456789/7729"},{referencia:"Martínez, M. y Osorio, A. (2018). Validación de un método para el análisis de color real en agua. <em>Revista Facultad de Ciencias, 7(1), p. 143-155</em>. ",link:"https://doi.org/10.15446/rev.fac.cienc.v7n1.68086"},{referencia:"Ministerio de Vivienda, Ciudad y Territorio. (2010). <em>Reglamento técnico del sector de agua potable y saneamiento básico - RAS. Título B Sistemas de acueducto</em>. Viceministerio de Agua y Saneamiento Básico. ",link:"https://www.minvivienda.gov.co/sites/default/files/documentos/titulob-030714.pdf"},{referencia:"Ministerio de Ambiente, Vivienda, Ciudad y Territorio. (2016). <em>Reglamento técnico del sector de agua potable y saneamiento básico - RAS. Título D Sistemas de recolección y evacuación de aguas residuales domésticas y aguas lluvias</em>. Viceministerio de Agua y Saneamiento Básico. ",link:"https://minvivienda.gov.co/sites/default/files/documentos/titulo_d.pdf"},{referencia:"Ministerio de Desarrollo Económico. (2000). <em>Reglamento técnico del sector de agua potable y saneamiento básico - RAS. Título A Aspectos generales de los sistemas de agua potable y saneamiento básico</em>. Dirección General de Agua Potable y Saneamiento Básico. ",link:"https://minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_a_.pdf"},{referencia:"Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2008).  <em>Guía que amplía aspectos técnicos para la selección del punto de muestreo para el control y vigilancia de la calidad del agua para consumo humano sobre la red de distribución</em>. ",link:"https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2008%20Gu%C3%ADa%20t%C3%A9cnica%20Resoluci%C3%B3n%200811.pdf"},{referencia:"Norma Técnica Colombiana. (1997). <em>Desinfección de líneas principales para la conducción de agua</em>. (NTC 4246). ",link:"https://docplayer.es/82682705-Norma-tecnica-colombiana-4246.html"},{referencia:"Orellana, J. (2005). <em>Conducción de las aguas</em>. Ingeniería Sanitaria- UTN - FRRO. ",link:"https://www.academia.edu/4464290/Ingenieria_Sanitaria_A4_Capitulo_07_Conduccion_de_las_Aguas"},{referencia:"Organización Mundial de la Salud y Organización Panamericana de la Salud. (2009). <em>Medición de cloro residual en el agua</em>. Guías técnicas sobre saneamiento, agua y salud. OMS. ",link:""},{referencia:"Resolución 2115 de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. Junio 22 de 2007. ",link:""},{referencia:"Resolución 811 de 2008. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por medio de la cual se definen los lineamientos a partir de los cuales la autoridad sanitaria y las personas prestadoras, concertadamente definirán en su aérea de influencia los lugares y puntos de muestreo para el control y vigilancia de la calidad del agua para consumo humano en la red de distribución. Marzo 5 de 2008. ",link:""},{referencia:"Sotelo, G. (1994). <em>Hidráulica general (Vol. 1)</em>. Limusa. ",link:"https://www.academia.edu/38544755/Hidr%C3%A1ulica_General_Vol_1_Fundamentos_Gilberto_Sotelo_%C3%81vila"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Xiomara Becerra Aldana",cargo:"Instructora ambiental",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Jesus Ricardo Arias Munevar",cargo:"Instructor ambiental",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cardenas",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrologia - Regional Distrito Capital"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Uriel Darío González Montoya",cargo:"Acompañamiento pedagógico",centro:"Centro Agropecuario La Granja - Regional Tolima"},{nombre:"Gloria Amparo López Escudero",cargo:"Adecuación instruccional",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Metodología para la formación virtual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Eulises Orduz Amézquita",cargo:"Diseñador web",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Jhon Jairo Urueta Alvarez",cargo:"Desarrollador Fullstack",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos educativos digitales",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Leyson Fabian Castaño Pérez",cargo:"Validación de recursos educativos digitales",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;var y=i("9224");n["a"].prototype.$package=y,new n["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-1.553e4d45.svg"},"74b5":function(e,a,i){e.exports=i.p+"img/banner-princiapal.fd50bede.png"},"7d72":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-3.704c5b21.svg"},"8f04":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-2.46a624d5.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,i){e.exports=i.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,i){},f53d:function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-4.dbb08556.svg"}});
//# sourceMappingURL=app.66b1fedf.js.map