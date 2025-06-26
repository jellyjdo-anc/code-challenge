<template>
  <transition name="zoo-fade">
  <div class="page zoo" v-if="showZoo">
    <div class="overlay">
      <Header />
      <LogoCircle logoSrc="/zoo-logo.png" />
      <DescriptionBox
        :noBackground="true"
        title="Zoo Guide"
        text="Visit us for a day of wildlife discovery, educational programs, and family-friendly fun in beautifully designed natural habitats."
        class="zoo-description"
      />
      <div class="card-grid">
        <FeatureCard v-for="item in zones" :key="item.title" :redirect="item.redirect" :title="item.title" :img="item.img" />
      </div>
      <SocialIcons />
    </div>
  </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import LogoCircle from '../components/LogoCircle.vue'
import DescriptionBox from '../components/DescriptionBox.vue'
import FeatureCard from '../components/FeatureCard.vue'
import SocialIcons from '../components/SocialIcons.vue'

const showZoo = ref(false)
onMounted(() => {
  showZoo.value = true
})
const zones = [
  { title: "Wildlife Hub", img: '/zoo/wildlife.jpg' , redirect: 'https://thewildlifetravelhub.com/' },
  { title: "Lion's Den", img: '/zoo/lions.jpg' ,redirect: 'https://www.nationalgeographic.com/science/article/art-in-the-lions-den'},
  { title: "Safari Zone", img: '/zoo/safari.jpg' , redirect: 'https://www.nationalgeographic.com/travel/article/how-to-plan-a-trip-to-see-africas-great-migration'},
  { title: "Forest Kingdom", img: '/zoo/forest.jpg' , redirect: 'https://www.nationalgeographic.com/culture/article/bonsai-tree-forest-art' },
  { title: "Giraffe Hut", img: '/zoo/giraffe.jpg' , redirect: 'https://www.nationalgeographic.com/photo-of-the-day/media-spotlight/giraffe-zakouma-park-chad'},
  { title: "Dolphin Pool", img: '/zoo/dolphin.jpg', redirect: 'https://www.nationalgeographic.com/animals/article/rome-dolphins-fighting' }
]
</script>

<style scoped>
.page.zoo {
  color: #fff;
  min-height: 100vh;
  background-color: #477d57; 
  background-size: cover;
  background-position: center;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 420px;
  margin: 0 auto;
  border-radius: 1.5rem;
  --logo-border: #4ec40e;
 
}



.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.zoo-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.zoo-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.zoo-fade-enter-active {
  transition: all 0.5s ease-out;
}




</style>