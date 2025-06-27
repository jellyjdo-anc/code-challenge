<template>
     <div class="page music">

    <transition name="fade-slide">
        <div class="page" v-if="isLoaded">
            <div class="overlay">
            <Header />
            <LogoCircle logoSrc="/music-logo.png" />
            <DescriptionBox :noBackground="false"
            title="MusicFest"
            text="This year's electronic music festival is set to dazzle audiences with an incredible array of renowned artists from around the world." 
            />
            <LinkButton v-for="(link, i) in links" :key="i" :text="link.text" :href="link.href" />
            <SocialIcons />
            </div>
        </div>
    </transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPage = ref(false)
const isLoaded = ref(false)

onMounted(() => {
  const bg = new Image()
  bg.src = '/music-bg.webp'
  bg.onload = () => {
    isLoaded.value = true
  }
})

import Header from '../components/Header.vue'
import LogoCircle from '../components/LogoCircle.vue'
import DescriptionBox from '../components/DescriptionBox.vue'
import LinkButton from '../components/LinkButton.vue'
import SocialIcons from '../components/SocialIcons.vue'

const links = [
  { text: "Buy Tickets", href: "https://eventbrite.com" },
  { text: "Event Schedule", href: "https://calendar.google.com" },
  { text: "Location & Parking", href: "https://maps.google.com" },
  { text: "Artist Lineup", href: "https://spotify.com" },
  { text: "FAQs", href: "https://help.twitter.com" }
]
</script>


<style scoped>
.page {
  max-width: 420px;
  border-radius: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('/music-bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
}


.overlay {

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 1.25rem;
  border-radius: 2rem;
  --logo-border: #eda57e;
}

.loading-screen {
  min-height: 100vh;
  background-color: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.98);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-enter-active {
  transition: all 0.5s ease;
}

</style>


