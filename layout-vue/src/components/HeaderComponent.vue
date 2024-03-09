<template>
    <header class="header center">
        <div class="header-left">
            <img src="../assets/Logo.svg" alt="logo interno" />
            <img src="../assets/Interno.svg" alt="name interno" />
        </div>
        <div class="header-right">
            <router-link to="/" class="header-menu">Home</router-link>
            <router-link to="/project" class="header-menu">Project</router-link>
            <router-link to="/blog" class="header-menu">Blog</router-link>
        </div>
    </header>
</template>

<script setup>

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

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 44px;
    margin-bottom: 40px;
    height: 50px;
    font-family: "Jost", sans-serif;
}

.header-left {
    display: flex;
    gap: 10px;
}

.header-right {
    display: flex;
    justify-content: space-between;
    width: 243px;
}

.header-menu {
    color: #292F36;
    size: 20px;
}
</style>