<template>
    <div class="blog">
        <HeaderComponent />
        <BannerDetailsComponent/>
        <DetailsComponent/>
        <FooterComponent />
    </div>
</template>
  
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerDetailsComponent from '@/components/BannerDetailsComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import DetailsComponent from '@/components/DetailsComponent.vue';

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        BannerDetailsComponent,
        FooterComponent,
        DetailsComponent
    }
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>