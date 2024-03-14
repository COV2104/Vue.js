<template>
    <div class="projectDetails">
        <HeaderComponent />
        <BannerProjectDetailsComponent/>
        <ProjectDetailsComponent/>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerProjectDetailsComponent from '@/components/BannerProjectDetailsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProjectDetailsComponent from '@/components/ProjectDetailsComponent.vue';

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        BannerProjectDetailsComponent,
        ProjectDetailsComponent,
        FooterComponent
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>