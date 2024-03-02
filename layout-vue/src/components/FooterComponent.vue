<template>
    <footer class="footer center">
        <div class="footer__content">
            <div class="footer__about">
                <div class="footer__logo">
                    <a href="#" class="footer__logo-link">
                        <img class="footer__logo-pik" src="../assets/Logo.svg" alt="Логотип компании Interno" />
                        <p class="footer__title-logo"><img src="../assets/Interno.svg" alt="Interno"></p>
                    </a>
                </div>
                <p class="footer__text">
                    It is a long established fact that a reader will be distracted
                    lookings.
                </p>
                <div class="footer__sociale">
                    <a href="#" class="footer__svg">
                        <svg width="17.964844" height="14.589844" viewBox="0 0 17.9648 14.5898" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path id="path1"
                                d="M16.1367 3.62109C16.8398 3.09375 17.4727 2.46094 17.9648 1.72266C17.332 2.00391 16.5938 2.21484 15.8555 2.28516C16.6289 1.82812 17.1914 1.125 17.4727 0.246094C16.7695 0.667969 15.9609 0.984375 15.1523 1.16016C14.4492 0.421875 13.5 0 12.4453 0C10.4062 0 8.75391 1.65234 8.75391 3.69141C8.75391 3.97266 8.78906 4.25391 8.85938 4.53516C5.80078 4.35938 3.05859 2.88281 1.23047 0.667969C0.914062 1.19531 0.738281 1.82812 0.738281 2.53125C0.738281 3.79688 1.37109 4.92188 2.39062 5.58984C1.79297 5.55469 1.19531 5.41406 0.703125 5.13281L0.703125 5.16797C0.703125 6.96094 1.96875 8.4375 3.65625 8.78906C3.375 8.85938 3.02344 8.92969 2.70703 8.92969C2.46094 8.92969 2.25 8.89453 2.00391 8.85938C2.46094 10.3359 3.83203 11.3906 5.44922 11.4258C4.18359 12.4102 2.60156 13.0078 0.878906 13.0078C0.5625 13.0078 0.28125 12.9727 0 12.9375C1.61719 13.9922 3.55078 14.5898 5.66016 14.5898C12.4453 14.5898 16.1367 9 16.1367 4.11328C16.1367 3.9375 16.1367 3.79688 16.1367 3.62109Z"
                                fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                    </a>

                    <a href="#" class="footer__svg">
                        <svg width="15.750000" height="15.714844" viewBox="0 0 15.75 15.7148" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path id="path2"
                                d="M3.51562 15.7148L3.51562 5.20312L0.246094 5.20312L0.246094 15.7148L3.51562 15.7148ZM1.86328 3.79688C2.91797 3.79688 3.76172 2.91797 3.76172 1.86328C3.76172 0.84375 2.91797 0 1.86328 0C0.84375 0 0 0.84375 0 1.86328C0 2.91797 0.84375 3.79688 1.86328 3.79688ZM15.7148 15.7148L15.75 15.7148L15.75 9.94922C15.75 7.13672 15.1172 4.95703 11.8125 4.95703C10.2305 4.95703 9.17578 5.83594 8.71875 6.64453L8.68359 6.64453L8.68359 5.20312L5.55469 5.20312L5.55469 15.7148L8.82422 15.7148L8.82422 10.5117C8.82422 9.14062 9.07031 7.83984 10.7578 7.83984C12.4453 7.83984 12.4805 9.38672 12.4805 10.6172L12.4805 15.7148L15.7148 15.7148Z"
                                fill="#292F36" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="footer__pages">
                <p class="footer__title-pages">Pages</p>
                <div class="footer__nav-page">
                    <ul class="footer__items-page">
                        <li class="footer__item-page">
                            <router-link to="/" class="footer__link-page">Home</router-link>
                        </li>
                        <li class="footer__item-page">
                            <a href="#" class="footer__link-page">Project</a>
                        </li>
                        <li class="footer__item-page">
                            <router-link to="/blog" class="footer__link-page">Blog</router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__contact">
                <p class="footer__title-contact">Contact</p>
                <a href="#" class="footer__link-addres">55 East Birchwood Ave. Brooklyn, New York 11201</a>
                <a href="#" class="footer__link-email">contact@interno.com</a>
                <a href="#" class="footer__link-phone">(123) 456 - 7890</a>
            </div>
        </div>
    </footer>
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

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.center {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
}

.footer {
    background: #fff;
    padding-bottom: 134px;
    font-family: "Jost", sans-serif;
}

.footer__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 101px;
}

.footer__about {
    display: flex;
    flex-direction: column;
}

.footer__logo {
    margin-bottom: 18px;

}

.footer__logo-link {
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer__logo-pik {
    padding: 8px 0;
}

.footer__title-logo {
    color: #292f36;
    font-family: 'DM Serif Display' sans-serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 125%;
}

.footer__text {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 31px;
}

.footer__sociale {
    display: flex;
    align-items: center;
    gap: 54px;
}

.footer__pages {
    display: flex;
    flex-direction: column;
}

.footer__title-pages {
    color: #292f36;
    font-family: 'DM Serif Display', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 9px;
}

.footer__link-page {
    color: #4d5053;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 300%;
}

.footer__contact {
    display: flex;
    flex-direction: column;
}

.footer__title-contact {
    color: #292f36;
    font-family: 'DM Serif Display', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 24px;
}

.footer__link-addres {
    color: #4d5053;
    margin-bottom: 35px;
}

.footer__link-email {
    color: #4d5054;
    margin-bottom: 35px;
}

.footer__link-phone {
    color: #4d5053;
}
</style>