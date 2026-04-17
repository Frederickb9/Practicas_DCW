<script setup>
    //Datos que viajan del padre al hijo
    defineProps(['title', 'genre', 'rating', 'image', 'year']);

    //Eventos que viajan del hijo al padre
    const emit = defineEmits(['seleccionar']);
</script>

<template>
  <div class="movie-card" @click="emit('seleccionar', title)">
    <div class="image-container">
      <img :src="image" :alt="title" class="movie-image" />
      <span class="badge badge-rating">⭐ {{ rating }}</span>
      <span class="badge badge-year">{{ year }}</span>
    </div>
    <div class="card-info">
      <h3 class="movie-title">{{ title }}</h3>
      <p class="movie-genre">{{ genre }}</p>
    </div>
  </div>
</template>
