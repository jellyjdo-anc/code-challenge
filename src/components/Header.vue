<template>
  <div class="header">
    <RouterLink to="/language-selection">
      <span class="fi fi-us flag-icon"></span>
    </RouterLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
}

.flag-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid white;
  display: inline-block;
  background-size: 280%;
  background-position: center;
  transform: scale(1.3);
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}
</style>
