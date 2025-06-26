<template>
    <a :href="redirect" class="feature-card-link" target="_blank" rel="noopener">
        <div class="feature-card">
            <img :src="img" :alt="title" />
            <p>{{ title }}</p>
        </div>
    </a>
</template>

<script setup>
    defineProps(['img', 'title', 'redirect'])
</script>

<style scoped>
.feature-card-link {
    text-decoration: none;
  color: inherit;
  display: block;
    cursor: pointer; 
    position: relative;
  z-index: 1;
}
.feature-card {
  background: #7ab370;
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.feature-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  flex-grow: 1;

}

.feature-card p {
  padding: 0.75rem;
  font-weight: bold;
  margin: 0;
  font-size: 1rem;
  height: 30px; 
}

.feature-card:hover {
    
  transform: scale(1.03);
}

</style>
