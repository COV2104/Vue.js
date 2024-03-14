<template>
    <section class="pd__info center">

        <h1 class="pd__title">Minimal Look Bedrooms</h1>
        <div class="pd__info-content">
            <p class="pd__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
                dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida
                dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel
                lectus bibendum commodo.<br><br>
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc,
                mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante
                vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin
                tincidunt ligula id purus porttitor.</p>
        </div>


        <div class="slider ">
            <div class="slides">
                <img v-for="(image, index) in images" :key="index" :src="image"
                    :class="{ active: index === currentSlide }" @click="changeSlide(index)" />
            </div>
            <div class="navigation">
                <span v-for="(image, index) in images" :key="index" @click="changeSlide(index)"
                    :class="{ dot: true, active: index === currentSlide }"></span>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['currentSlide', 'images'])
    },
    methods: {
        ...mapMutations(['CHANGE_SLIDE', 'NEXT_SLIDE']),
        changeSlide(index) {
            if (index === this.currentSlide) {
                this.NEXT_SLIDE();
            } else {
                this.CHANGE_SLIDE(index);
            }
        }
    }
};
</script>

<style lang="css">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.center {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
}

.pd__info {
    background: rgb(255, 255, 255);
    padding: 200px 0;
    font-family: "Jost", sans-serif;
}

.pd__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
    margin-bottom: 11px;
}

.pd__info-content {
    padding-right: 336px;
    text-align: left;
    column-count: 1;
    padding-left: 336px;
}

.pd__text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 100px;
}

.pd__page {
    border-radius: 50%;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(19, 11, 1);
    width: 30px;
    height: 30px;
}



.slider {
    position: relative;
}

.slides {
    display: flex;
    justify-content: center;
}

.slides img {
    display: none;
    border-radius: 67px;
    width: 100%;
    height: 799px;
    margin-bottom: 40px;
}

.slides img.active {
    display: block;
}

.navigation {
    display: flex;
    justify-content: center;
}

.dot {
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.dot.active {
    background: #333;
}
</style>