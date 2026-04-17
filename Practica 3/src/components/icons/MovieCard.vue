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

<style scoped>
/* Aquí pega el código de .movie-card que ya tenías */
.movie-card {
  background-color: #241843;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.movie-card:hover { transform: scale(1.05); }
.image-container { position: relative; height: 240px; }
.movie-image { width: 100%; height: 100%; object-fit: cover; }
.badge { position: absolute; padding: 4px 8px; border-radius: 6px; font-size: 0.8rem; }
.badge-rating { top: 8px; right: 8px; background-color: #fbbf24; color: black; }
.badge-year { bottom: 8px; left: 8px; background-color: rgba(0,0,0,0.7); }
.card-info { padding: 16px; }
</style>