<template>
    <div class="banner-blog">
        <div class="banner-blog__box center">
            <p class="boxTitle">Articles & News</p>
            <div class="banner-blog__pages">
                <router-link to="/" class="boxText">Home</router-link> /
                <router-link to="/blog" class="boxText">Blog</router-link>
            </div>
        </div>
    </div>
</template>



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

.banner-blog {
    background-image: url(../assets/banner_blog.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 356px;
    margin-bottom: 180px;
    font-family: "Jost", sans-serif;
}

.banner-blog__box {
    position: absolute;
    left: 36%;
    top: 50%;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    padding: 41px 78px;
    width: 503px;
    min-height: 178px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.boxTitle {
    font-family: 'DM Serif Display', sans-serif;
    font-size: 50px;
    color: #292F36;
}

.boxText {
    font-size: 22px;
    color: #292F36;
}
</style>