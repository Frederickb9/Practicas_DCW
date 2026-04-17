<script setup>
    import MovieCard from '../components/icons/MovieCard.vue';

    const movies = [
        { id: 1, title: 'Spider-Man', genre: 'Action', rating: '9.0', year: '2024', image: './src/assets/spiderman.jpeg' },
        { id: 2, title: 'Inception', genre: 'Sci-Fi', rating: '8.8', year: '2010', image: './src/assets/inception.jpg'},
        { id: 3, title: 'Batman', genre: 'Crime', rating: '8.6', year: '2022', image: './src/assets/batman.jpg'}
    ];

    const manejarSeleccion = (titulo) => {
        alert(`Has hecho clic en ${titulo}`);
    }
</script>

<template>
  <div class="app-container">
    <header class="hero-gradient">
      <h1>Your Ultimate Movie Companion</h1>
      <p>Práctica 4 - Comunicación de Componentes</p>
    </header>

    <main class="main-content">
      <div class="movies-grid">
        <MovieCard 
          v-for="movie in movies" 
          :key="movie.id"
          :title="movie.title"
          :genre="movie.genre"
          :rating="movie.rating"
          :year="movie.year"
          :image="movie.image"
          @seleccionar="manejarSeleccion"
        />
      </div>
    </main>
  </div>
</template>