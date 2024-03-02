<template>
    <section class="project center">
        <div class="heading-top">
            <div class="project-heading">
                <p class="project-heading__title">Follow Our Projects</p>
                <p class="project-heading__text">
                    It is a long established fact that a reader will be distracted by
                    the of readable content of page lookings at its layouts points.
                </p>
            </div>
        </div>

        <div class="project-projects">
            <div class="project_cart">
                <img class="project-image img-one" src="../assets/project_1.jpg" alt="image project" />
                <div class="project-cart__content">
                    <div class="project-cart__left">
                        <p class="project-name">Modern Kitchan</p>
                        <p class="project-desc">Decor / Artchitecture</p>
                    </div>
                    <div class="project-cart__right">
                        <a href="#" class="project-cart__button"><img src="../assets/Vector_project.svg" alt="vector" /></a>
                    </div>
                </div>
            </div>

            <div class="project_cart">
                <img class="project-image img-two" src="../assets/project_2.jpg" alt="image project" />
                <div class="project-cart__content">
                    <div class="project-cart__left">
                        <p class="project-name">Modern Kitchan</p>
                        <p class="project-desc">Decor / Artchitecture</p>
                    </div>
                    <div class="project-cart__right">
                        <a href="#" class="project-cart__button"><img src="../assets/Vector_project.svg" alt="vector" /></a>
                    </div>
                </div>
            </div>

            <div class="project_cart">
                <img class="project-image img-three" src="../assets/project_3.jpg" alt="image project" />
                <div class="project-cart__content">
                    <div class="project-cart__left">
                        <p class="project-name">Modern Kitchan</p>
                        <p class="project-desc">Decor / Artchitecture</p>
                    </div>
                    <div class="project-cart__right">
                        <a href="#" class="project-cart__button"><img src="../assets/Vector_project.svg" alt="vector" /></a>
                    </div>
                </div>
            </div>

            <div class="project_cart">
                <img class="project-image img-four" src="../assets/project_4.jpg" alt="image project" />
                <div class="project-cart__content">
                    <div class="project-cart__left">
                        <p class="project-name">Modern Kitchan</p>
                        <p class="project-desc">Decor / Artchitecture</p>
                    </div>
                    <div class="project-cart__right">
                        <a href="#" class="project-cart__button"><img src="../assets/Vector_project.svg" alt="vector" /></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

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
    margin-bottom: 95px;
    font-family: "Jost", sans-serif;
}

.project-heading {
    width: 737px;
    margin-bottom: 93px;
}

.heading-top {
    display: flex;
    justify-content: center;
}

.project-heading__title {
    font-family: "DM Serif Display", serif;
    color: #292F36;
    font-size: 50px;
    text-align: center;
    margin-bottom: 23px;
}

.project-heading__text {
    font-size: 22px;
    text-align: center;
}

.project-cart__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 525px;
}

.project-projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(525px, 1fr));
    grid-gap: 34px 96px;
}

.project-image {
    width: 525px;
    height: 548px;
}

.img-one {
    border-top-right-radius: 18%;
}

.img-two {
    border-top-left-radius: 18%;
}

.img-three {
    border-bottom-right-radius: 18%;
}

.img-four {
    border-bottom-left-radius: 18%;
}

.project-name {
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    color: #292F36;
}

.project-desc {
    font-size: 22px;
    color: #292F36;
}

.project-cart__button {
    display: inline-block;
    padding: 26px 35px;
    border-radius: 50px;
    background-color: #F4F0EC;
}

.project-cart__button:hover {
    border: 3px solid #292f36;
}
</style>