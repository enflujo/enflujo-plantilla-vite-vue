<script setup lang="ts">
import Hola from './componentes/Hola.vue';
const base = import.meta.env.BASE_URL;
</script>

<template>
  <header>
    <span class="icono"><img :src="`${base}favicon.svg`" alt="Logo EnFlujo" /></span>
    <Hola />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;

  .icono {
    width: 2em;
    margin-right: 0.2em;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
