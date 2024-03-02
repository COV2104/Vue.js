<template>
  <div class="blog">
    <HeaderComponent/>
    <BannerBlogComponent/>
    <PostBlogComponent/>
    <ArticlesBlogComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerBlogComponent from '@/components/BannerBlogComponent.vue';
import PostBlogComponent from '@/components/PostBlogComponent.vue';
import ArticlesBlogComponent from '@/components/ArticlesBlogComponents.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    BannerBlogComponent,
    PostBlogComponent,
    ArticlesBlogComponent,
    FooterComponent
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>