<template>
    <section class="project__block center">
        <div class="project__content content__wrap">
            <nav class="project__nav">
                <ul class="project__items">
                    <li class="project__item">
                        <a href="#" class="project__link-content" @click="SHOW_PROJECTS('Bathroom')">Bathroom</a>
                    </li>
                    <li class="project__item">
                        <a href="#" class="project__link-content " @click="SHOW_PROJECTS('Bed Room')">Bed Room</a>
                    </li>
                    <li class="project__item">
                        <a href="#" class="project__link-content" @click="SHOW_PROJECTS('Kitchen')">Kitchen</a>
                    </li>
                    <li class="project__item">
                        <a href="#" class="project__link-content" @click="SHOW_PROJECTS('Living Area')">Living Area</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="project__boxes-star">

            <div class="project__box" v-for="project in selectedProjects" :key="project.title">
                <img class="project__img-star" width="585" height="522" :src="project.image" :alt="project.title" />
                <div class="project__subcontent">
                    <div class="project__decor">
                        <h3 class="project__subtitle">{{ project.title }}</h3>
                        <p class="project__dsk">{{ project.category }}</p>
                    </div>
                    <a href="#" class="project__ellipse ellipse"></a>
                </div>
            </div>

        </div>

        <div class="pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#"><img src="../assets/Vector2.svg" alt="vector" /></a>
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['selectedProjects'])
    },
    methods: {
        ...mapMutations(['SHOW_PROJECTS']),
        ...mapActions(['loadProjects'])
    },
    mounted() {
        this.loadProjects('Bed Room');
    }
};
</script>

<style lang="css" scoped>
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

.project {
    padding-bottom: 96px;
    font-family: "Jost", sans-serif;
}

.project__title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
    margin-bottom: 8px;
}

.project__text {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin-bottom: 93px;
    padding-right: 232px;
    padding-left: 232px;
}

.project__boxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 104px;
}

.project__img {
    border-radius: 0px 80px 0px 0px;
    background: rgb(196, 196, 196);
    margin-bottom: 28px;
}

.project__subcontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.project__subtitle {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 4px;
}

.project__dsk {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
}

.project__ellipse {
    border-radius: 50%;
    background: #f4f0ec;
    width: 70px;
    height: 70px;
    position: relative;
}

.project__ellipse:after {
    position: absolute;
    left: 29px;
    top: 30px;
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-left: 2px solid #292f36;
    border-bottom: 2px solid #292f36;
    transform: rotate(225deg);
}

.project__block {
    background: rgb(255, 255, 255);
    padding: 200px 0;
}

.project__nav {
    background-color: rgb(255, 255, 255);
    margin-bottom: 61px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
}

.project__items {
    display: flex;
    gap: 96px;
}

.project__item {
    margin-right: 10px;
}

.project__link-content {
    color: rgb(41, 47, 54);
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
    padding: 26px 66px;
    transition: background-color 0.3s;
}

.project__link-content:hover {
    color: rgb(255, 255, 255);
    border-radius: 18px;
    background: rgb(205, 162, 116);
}

.project__boxes-star {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 61px;

}

.project__box {
    width: 100%;
    position: relative;
}

.project__img-star {
    margin-bottom: 28px;
}

.project__subcontent {
    display: flex;
    align-items: center;
    gap: 298px;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.pagination a {
    display: inline-block;
    padding: 18px 25px;
    border-radius: 50%;
    border: 1px solid #CDA274;
    color: #292F36;
    margin-right: 20px;
}

.pagination a:hover {
    background-color: #F4F0EC;
    border: 1px solid #F4F0EC;
}
</style>