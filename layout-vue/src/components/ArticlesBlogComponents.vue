<template>
    <section class="articles center">
        <div class="articles-heading__blog">
            <p class="articles-heading__title">Articles & News</p>
        </div>

        <div class="articles__carts">
            <div class="articles__cart" v-for="(item, index) in blogItems" :key="index">
                <div class="articles__img">
                    <img class="articles__pik" :src="item.image" :alt="item.alt" />
                </div>
                <div class="articles__bg">
                    <p class="articles__desc">{{ item.description }}</p>
                </div>
                <p class="articles__subtitle">{{ item.title }}</p>
                <div class="articles__ellipse-text">
                    <p class="articles__date">{{ item.date }}</p>
                    <div class="articles__button">
                        <img src="../assets/Vector2.svg" alt="vector" />
                    </div>
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
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['blogItems'])
    }
}
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

.articles {
    margin-bottom: 100px;
    font-family: "Jost", sans-serif;
}

.articles-heading {
    display: flex;
    flex-direction: column;
    width: 811px;
    padding-bottom: 50px;
}

.articles-heading__title {
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    color: #292F36;
    text-align: center;
}

.articles-heading__text {
    font-size: 22px;
    color: #4D5053;
    text-align: center;
}

.articles__carts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 27px;
}

.articles__pik {
    border-radius: 13% 13% 0 0;
}

.articles__cart {
    border: 1px solid #e7e7e7;
    border-radius: 62px;
    width: 382px;
    height: 521px;
    position: relative;
}

.articles__cart:hover {
    background-color: #F4F0EC;

    .articles__button {
        background-color: #ffffff;
    }
}

.articles__img {
    margin-bottom: 12px;
    margin-left: 20px;
    margin-top: 20px;
}

.articles__bg {
    display: block;
    padding: 4px;
    border-radius: 8px 8px 8px 0;
    background: #fff;
    position: absolute;
    left: 12%;
    top: 50%;
    cursor: pointer;
}

.articles__subtitle {
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    color: #292F36;
    width: 305px;
    height: 70px;
    margin-left: 20px;
    margin-bottom: 33px;
}

.articles__ellipse-text {
    display: flex;
    margin-left: 20px;
    width: 340px;
    justify-content: space-between;
    align-items: center;
}

.articles__button {
    display: inline-block;
    padding: 18px 25px;
    border-radius: 50%;
    background-color: #F4F0EC;
}

.articles-heading__blog {
    display: flex;
    margin-bottom: 30px;
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