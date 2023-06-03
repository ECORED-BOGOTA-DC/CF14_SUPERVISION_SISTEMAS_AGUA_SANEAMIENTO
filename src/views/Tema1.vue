<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Reflexión sobre la importancia del agua
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png' style="width: 470px" alt='Texto que describa la imagen').m-auto
      .col-lg-7
        p El día mundial del agua se celebra el 22 de marzo, como una oportunidad para reflexionar acerca de la importancia de este líquido vital. En Colombia, existe una gran oferta hídrica derivada de nuestros ecosistemas de páramo que alimentan en todo el territorio nacional a los ríos, humedales, lagos y lagunas.  El suministro de agua potable a una población determinada en un territorio permite el desarrollo de actividades domésticas, industriales, agropecuarias, comerciales y de servicios. El acceso a este preciado líquido en las condiciones adecuadas garantiza también la prevención de múltiples enfermedades relacionadas con la deficiencia en los sistemas de agua potable y saneamiento básico en algunas regiones en Colombia y el mundo.
        .cajon.color-primario.p-4
          p.mb-0 Estimado aprendiz, bienvenido a continuar con este aprendizaje, a través de este componente formativo denominado “Verificación de sistemas de acueducto”, orientado a conocer sobre hidráulica, hidrología, redes, alcantarillado, al igual que la importancia del manejo y vigilancia constante de los sistemas de acueducto. Por lo anterior le invitamos a desarrollar con mucho entusiasmo el presente componente formativo.
      
</template>

<script>
export default {
  name: 'Tema1',
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
