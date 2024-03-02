<template>
  <div class="home">
    <HeaderComponent />
    <BannerHomeComponent />
    <ProjectComponent />
    <CounterComponent />
    <ArticlesComponent />
    <FooterComponent />
  </div>
</template>

<script>
import BannerHomeComponent from '@/components/BannerHomeComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
import CounterComponent from '@/components/CounterComponent.vue';
import ArticlesComponent from '@/components/ArticlesComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    BannerHomeComponent,
    ProjectComponent,
    CounterComponent,
    ArticlesComponent,
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>
