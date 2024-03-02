<template>
    <section class="counter">
        <div class="counter-content center">
            <div class="years">
                <p class="counter-title">12</p>
                <p class="counter-text">Years Of Experiance</p>
            </div>
            <img src="../assets/counterLine.svg" alt="line" />
            <div class="success">
                <p class="counter-title">85</p>
                <p class="counter-text">Success Project</p>
            </div>
            <img src="../assets/counterLine.svg" alt="line" />
            <div class="activ">
                <p class="counter-title">15</p>
                <p class="counter-text">Active Project</p>
            </div>
            <img src="../assets/counterLine.svg" alt="line" />
            <div class="happy">
                <p class="counter-title">95</p>
                <p class="counter-text">Happy CUstomers</p>
            </div>
        </div>
    </section>
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

.counter {
    display: flex;
    background: #F4F0EC;
    height: 457px;
    margin-bottom: 100px;
    font-family: "Jost", sans-serif;
}

.counter-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.years,
.success,
.activ,
.happy {
    text-align: center;
}

.counter-title {
    font-family: "DM Serif Display", serif;
    font-size: 85px;
    color: #CDA274;
}

.counter-text {
    font-size: 22px;
    color: #4D5053;
}</style>