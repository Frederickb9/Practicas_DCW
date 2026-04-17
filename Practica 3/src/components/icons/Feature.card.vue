<script setup>
    defineProps(['title', 'description', 'icon']);

    const emit = defineEmits(['clicEnTarjeta']);

    const avisarPadre = () => {
        emit('clicEnTarjeta');
    }
</script>

<template>
  <div class="card" @click="emit('clicEnTarjeta')">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.card {
  background-color: #241843;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
}
.card:hover { transform: translateY(-5px); }
</style>