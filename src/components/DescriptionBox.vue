<template>
  <div :class="['description', { plain: noBackground }]">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  noBackground: Boolean
})
</script>

<style scoped>
.description {
  background: rgba(30, 80, 92, 0.85);
  border-radius: 1rem;
  padding: 0.25rem 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.description.plain {
  background: none;
  border-radius: 0;
  color: inherit;
  padding: 1.25rem;
  box-shadow: 0 0 0;
  margin-bottom: 0;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
p {
  font-size: 0.90rem;
  color: #fff;
}
</style>
