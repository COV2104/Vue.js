<template>
    <div>
        <h1>Корзина товаров</h1>
        <div v-for="(product, index) in products" :key="index">
            <div class="product">
                <span class="name">{{ product.name }}</span>
                <input class="number" type="number" v-model="product.quantity" @input="updateTotal" />
                <span>{{ product.price * product.quantity }}</span>
            </div>
        </div>
        <div>
            <strong>Общая сумма покупки: {{ total }}</strong>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { name: 'Телефон', price: 100, quantity: 1 },
                { name: 'Утюг', price: 50, quantity: 1 },
                { name: 'Фен', price: 75, quantity: 1 }
            ],
            total: 0
        };
    },
    methods: {
        updateTotal() {
            this.total = this.products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        }
    }
};
</script>

<style lang="css" scoped>
.product {
    width: 300px;
    display: flex; 
    gap: 10px;
    margin-bottom: 15px; 
}

.name{
    min-width: 100px;
}
</style>