<template>
    <section class="post center">
        <div class="post-title">Latest Post</div>
        <div class="post-content">
            <div class="post-left">
                <img class="post-left__img" src="../assets/post_image.png" alt="" />
            </div>
            <div class="post-right">
                <p class="post-content__title">
                    Low Cost Latest Invented Interior Designing Ideas
                </p>
                <p class="post-content__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere in.Contrary to popular belief.
                </p>
                <p class="post-content__text">
                    Lorem Ipsum is not simply random text. It has roots in a piece of
                    classica.
                </p>
                <div class="post-content__date">
                    <p>26 December,2022</p>
                    <div class="post-content__button">
                        <img src="../assets/Vector2.svg" alt="vector" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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

.post {
    margin-bottom: 150px;
    font-family: "Jost", sans-serif;
}

.post-title {
    font-family: 'DM Serif Display', sans-serif;
    font-size: 50px;
    color: #292F36;
    margin-bottom: 20px;
}

.post-content {
    display: flex;
    border: 1px solid #e7e7e7;
    border-radius: 62px;
    min-height: 517px;
}

.post-left__img {
    width: 569px;
    height: 478px;
    border-radius: 62px;
    margin-top: 18px;
    margin-left: 18px;
    margin-right: 55px;
}

.post-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}

.post-content__title {
    font-family: 'DM Serif Display', sans-serif;
    font-size: 25px;
    color: #292F36;
    width: 469px;
}

.post-content__text {
    font-size: 22px;
    color: #292F36;
    width: 469px;
}

.post-content__date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 489px;
}

.post-content__button {
    display: inline-block;
    padding: 18px 25px;
    border-radius: 50%;
    background-color: #F4F0EC;
}
</style>