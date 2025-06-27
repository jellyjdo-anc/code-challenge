<template>
  <a :href="href" class="link-button" target="_blank" rel="noopener noreferrer">
    {{ text }}
  </a>
</template>

<script setup>
defineProps(['text', 'href'])

</script>

<style scoped>
.link-button {
  display: block;
  width: calc(100% - 30px); 
  text-align: center;
  padding: 0.75rem;
  border-radius: 999px;
  background-color: #46939c;
  color: white;
  font-weight: bold;
  margin-bottom: 0.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.1s ease, box-shadow 0.2s ease;

}

.link-button:active {
  transform: scale(0.96);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
}
</style>
