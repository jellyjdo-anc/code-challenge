<template>
  <div class="logo-wrapper">
    <img :src="logoSrc" alt="Logo" />
  </div>
</template>



<script setup>
    defineProps({
    logoSrc: {
        type: String,
        required: true
    }
    })
</script>

<style scoped>
.logo-wrapper {
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  margin: 0.3rem auto 1rem auto;
  border: 6px solid var(--logo-border, #ffffff); 
}

.logo-img {
  width: 100px;
  height: 100px;
   max-width: none;  
  max-height: none;  
  object-fit: contain;
  display: block;
}
</style>

