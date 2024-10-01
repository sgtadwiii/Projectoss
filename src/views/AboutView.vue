<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="alertDisplay">Click Me!</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    alertDisplay() {
      this.$swal({
        title: '<i>Custom HTML</i>',
        // add a custom html tags by defining a html method.
        html:
          'This is an <em> emaphazied text </em>, ' +
          '<a href="#">links</a> ' +
          '<strong>And other tags</strong>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false
      })
    }
  }
}
</script>
