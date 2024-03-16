<template>
    <div class="notFoundContainer center">
        <div class="notFoundContent">
            <p class="notFoundContent__title">404</p>
            <p class="notFoundContent__text">We are sorry, but the page you requested was not found</p>
            <button class="banner-button">
                <router-link to="/"><span>Back To Home</span></router-link><img src="../assets/Vector.svg" alt="vector" />
            </button> 
        </div>
        <div class="notFoundPhoto">
            <img src="../assets/NotFoundPhoto.jpg" alt="404 NotFound">
        </div>
    </div>
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

.notFoundContainer {
    font-family: "Jost", sans-serif;
    display: flex;
    align-items: center;
    gap: 50px;
}

.notFoundPhoto img {
    border-bottom-left-radius: 30%;
}

.notFoundContent__title {
    font-family: "DM Serif Display", serif;
    font-size: 250px;
    color: #CDA274;
   
}

.notFoundContent__text{
    font-family: "DM Serif Display", serif;
    font-size: 35px;
    color: #292F36;
    margin-bottom: 25px;
}

.banner-button span{
    font-size: 18px;
    color:#FFFFFF;
}
</style>
