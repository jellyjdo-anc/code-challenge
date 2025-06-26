<template>
  <a
    :href="href"
    class="link-button"
    target="_blank"
    rel="noopener noreferrer"
  >
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
  margin: 0.5rem auto;
  border: none;
  cursor: pointer;
  text-decoration: none;


  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}


.link-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

/* Optional press feedback */
.link-button:active {
  transform: scale(0.97);
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
}
</style>
