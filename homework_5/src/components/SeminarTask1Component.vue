<template>
    <div>
        <h2>Аутентификация</h2>
        <form class="authentication" v-if="!isAuthenticated" @submit.prevent="login">
            <label for="username">Имя пользователя:</label>
            <input type="text" id="username" v-model="username">
            <label for="password">Пароль:</label>
            <input type="password" id="password" v-model="password">
            <button type="submit">Войти</button>
        </form>
        <div v-else>
            <p>Вы успешно аутентифицированы!</p>
            <button @click="logout">Выйти</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            isAuthenticated: false
        }
    },
    methods: {
        login() {
            if (this.username === 'admin' && this.password === 'password') {
                this.isAuthenticated = true;
            } else {
                alert('Неверное имя пользователя или пароль');
            }
        },
        logout() {
            this.isAuthenticated = false;
        }
    }
}
</script>

<style lang = "css">
.authentication{
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 15px;
}
</style>