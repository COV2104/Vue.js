<template>
    <section class="details center">
        <div class="content__wrepp">
            <div class="sub__content">
                <p class="sub__title">
                    Let’s Get Solution for Building Construction Work
                </p>
                <img class="details__img" width="799" height="539" src="../assets/details_blog_1.jpg" alt="Let’s Get Solution for Building
                              Construction Work" />
                <div class="date__details">
                    <p class="details__desc">26 December,2022</p>
                    <a href="" class="details__link">Interior /</a>
                    <router-link to="/" class="details__link">Home</router-link>
                    <a href="" class="details__link">Decore</a>
                </div>
                <p class="details__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.<br /><br />
                    Embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as
                    necessary.
                </p>
                <div class="details__quotes">
                    <div class="details__quotes-content">
                        <p class="details__quotes-title">&rdquo;</p>
                        <p class="details__quotes-text">
                            The details are not the details. They make the design.
                        </p>
                    </div>
                </div>
                <p class="details__quotes-subtitle">Design sprints are great</p>
                <p class="details__quotes-desc">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered.
                </p>
                <div class="details__discription">
                    <p class="details__discription-number">1</p>
                    <p class="details__discription-info">
                        Contrary to popular belief.There are many variations of passages
                        of Lorem Ipsum available, but the majority have suffered.
                    </p>
                </div>

                <div class="details__discription">
                    <p class="details__discription-number">2</p>
                    <p class="details__discription-info">
                        Contrary to popular belief.There are many variations of passages
                        of Lorem Ipsum available, but the majority have suffered.
                    </p>
                </div>

                <div class="details__discription">
                    <p class="details__discription-number">3</p>
                    <p class="details__discription-info">
                        Contrary to popular belief.There are many variations of passages
                        of Lorem Ipsum available, but the majority have suffered.
                    </p>
                </div>

                <img class="details__image" width="799" height="365" src="../assets/details_blog_2.jpg"
                    alt="Design sprints are great" />

                <p class="details__quotes-dsc">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many
                    variations of passages of Lorem Ipsum available, but the majority
                    have suffered.
                </p>
            </div>

            <div class="details__tags">
                <p class="form__title">Tags</p>

                <div class="form__radio-wrapper">
                    <a href="#" class="tags__input" @click="filterByTag('Kitchen')">Kitchen</a>
                    <a href="#" class="tags__input" @click="filterByTag('Bedroom')">Bedroom</a>
                    <a href="#" class="tags__input" @click="filterByTag('Building')">Building</a>
                    <a href="#" class="tags__input" @click="filterByTag('Architecture')">Architecture</a>
                    <a href="#" class="tags__input" @click="filterByTag('Kitchen Planning')">Kitchen Planning</a>
                    <a href="#" class="tags__input" @click="filterByTag('Bedroom')">Bedroom</a>
                </div>

                <div class="articles ">
                    <div class="articles__cart articles__down" v-for="(item, index) in filteredArticles" :key="index">
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
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            blogItems: [
                {
                    image: require("@/assets/article_1.jpg"),
                    alt: "Kitchan Design",
                    description: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022",
                    tags: "Kitchan",
                },
                {
                    image: require("@/assets/article_2.jpg"),
                    alt: "Living Design",
                    description: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022",
                    tags: "Bedroom",
                },
                {
                    image: require("@/assets/article_3.jpg"),
                    alt: "Interior Design",
                    description: "Interior Design",
                    title: "Best For Any Office [&] Business Interior Solution",
                    date: "25 December,2022",
                    tags: "Building",
                },
                {
                    image: require("@/assets/article_4.jpg"),
                    alt: "Kitchan Design",
                    description: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022",
                    tags: "Kitchen Planning",
                },
                {
                    image: require("@/assets/article_5.jpg"),
                    alt: "Living Design",
                    description: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "22 December,2022",
                    tags: "Architecture",
                },
                {
                    image: require("@/assets/article_6.jpg"),
                    alt: "Interior Design",
                    description: "Interior Design",
                    title: "Best For Any Office [&] Business Interior Solution",
                    date: "25 December,2022",
                    tags: "Building",
                },
            ],
            filteredArticles: [],
        };
    },
    methods: {
        filterByTag: function (tag) {
            this.filteredArticles = this.blogItems.filter((article) =>
                article.tags.includes(tag)
            );
        },
    },
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

.details {
    padding-top: 200px;
    padding-bottom: 96px;
    font-family: "Jost", sans-serif;
}

.content__wrepp {
    display: grid;
    grid-template-columns: repeat(2, 799px 345px);
    gap: 52px;
}

.sub__content {
    display: flex;
    flex-direction: column;
}

.sub__title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    margin-bottom: 11px;
}

.details__img {
    border-radius: 50px;
    background: rgb(196, 196, 196);
    margin-bottom: 46px;
}

.date__details {
    display: flex;
    margin-bottom: 48px;
}

.details__desc {
    padding-right: 409px;
}

.details__link {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
    margin-right: 5px;
}

.details__link:last-child {
    margin-right: 0;
}

.details__text {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    margin-bottom: 35px;
}

.details__quotes {
    border-radius: 50px;
    background: rgb(244, 240, 236);
    padding: 53px 227px;
    margin-bottom: 27px;
}

.details__quotes-content {
    display: flex;
    flex-direction: column;
}

.details__quotes-title {
    max-height: 133px;
    color: rgb(205, 162, 116);
    font-family: 'DM Serif Display', sans-serif;
    font-style: italic;
    font-size: 200px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
}

.details__quotes-text {
    color: rgb(205, 162, 116);
    font-family: 'DM Serif Display', sans-serif;
    font-style: italic;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
}

.details__quotes-subtitle {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display', sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    margin-bottom: 27px;
}

.details__quotes-desc {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    margin-bottom: 24px;
}

.details__discription {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 32px;
}

.details__discription-number {
    color: rgb(205, 162, 116);
    font-family: 'DM Serif Display', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
}

.details__discription-info {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
}

.details__image {
    border-radius: 50px;
    background: rgb(196, 196, 196);
    margin-bottom: 35px;
}

.details__quotes-dsc {
    color: rgb(77, 80, 83);
    font-family: 'Jost', serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
}

.form__title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    margin-bottom: 24px;
}

.form__radio-wrapper {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

.tags__input {
    border-radius: 10px;
    background: rgb(244, 240, 236);
    padding: 9px 30px;
    color: rgb(41, 47, 54);
    font-family: 'Jost', serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
}

.tags__input:hover {
    color: rgb(255, 255, 255);
    background: rgb(41, 47, 54);
}

.articles__down {
    margin-bottom: 50px;
}

.articles {
    margin-bottom: 100px;
    font-family: "Jost", sans-serif;
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
</style>