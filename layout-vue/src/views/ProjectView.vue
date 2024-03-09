<template>
  <div class="project">
    <HeaderComponent />
    <BannerProjectComponent />
    <ProjectCategoriesComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerProjectComponent from '@/components/BannerProjectComponent.vue';
import ProjectCategoriesComponent from '@/components/ProjectCategoriesComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    BannerProjectComponent,
    ProjectCategoriesComponent,
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>