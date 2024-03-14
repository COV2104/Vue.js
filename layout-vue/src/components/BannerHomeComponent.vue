<template>
    <section class="banner center">
        <div class="banner-content">
            <p class="banner-title">Let Your Home Be Unique</p>
            <p class="banner-text">
                There are many variations of the passages of lorem Ipsum
                fromavailable, majority.
            </p>
            <button class="banner-button">
                Get Started <img src="../assets/Vector.svg" alt="vector" />
            </button>
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

.banner {
    display: flex;
    align-items: center;
    padding-left: 50px;
    height: 758px;
    background-image: url(../assets/banner.jpg);
    border-radius: 70px;
    margin-bottom: 91px;
    font-family: "Jost", sans-serif;
}

.banner-content {
    width: 434px;
}

.banner-title {
    font-family: "DM Serif Display", serif;
    color: #292F36;
    font-size: 65px;
    margin-bottom: 21px;
}

.banner-text {
    font-size: 22px;
    margin-bottom: 21px;
}

.banner-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220.14px;
    height: 75px;
    border-radius: 18px;
    gap: 10px;
    background: #292F36;
    font-size: 16px;
    color: #FFFFFF;
}
</style>