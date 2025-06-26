<template>
  <div class="social-icons">
    <a
      v-for="icon in icons"
      :key="icon.name"
      :src="icon.src"
      :href="icon.href"
      class="icon-link"
      :aria-label="icon.name"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="icon.src" :alt="icon.name" />
    </a>
  </div>
</template>

<script setup>
const icons = [
  { name: 'Instagram', src: '/icons/instagram.svg', href: 'https://instagram.com' },
  { name: 'X',         src: '/icons/x.svg',  href: 'https://x.com' },
  { name: 'LinkedIn',  src: '/icons/linkedin.svg', href: 'https://linkedin.com' },
    { name: 'Facebook',  src: '/icons/facebook.svg', href: 'https://facebook.com' },
]
</script>

<style scoped>
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.icon-link {
  width: 40px;
  height: 40px;

  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
 
}

.icon-link:hover {
  transform: scale(1.15);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

.icon-link img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
</style>
