<template>

    <div class="notFound">
        <HeaderComponent />
        <NotFoundComponent/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';


export default {
    name: 'NotFound',
    components: {
        HeaderComponent,
        NotFoundComponent
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
</style>