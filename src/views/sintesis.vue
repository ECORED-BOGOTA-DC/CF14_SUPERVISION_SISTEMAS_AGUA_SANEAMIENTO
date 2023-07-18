<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El agua potable de calidad para el consumo humano es un proceso supremamente importante dado que se deben garantizar sus condiciones óptimas, siempre y para esto es importante e indispensable manejar todo el proceso, elementos, equipos y demás protocolos y normativas que se deben cumplir para la correcta operación del tratamiento de aguas en sus diversas etapas. Por esto a continuación encuentra una breve descripción de los temas vistos en este componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis tecnología supervisión de aguas, con su componentes redes de agua, verificación tubería, redes de acueducto y vigilancia del sistema de acueducto.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
