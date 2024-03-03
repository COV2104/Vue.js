<template>
    <div>
        <h4>{{ product.name }}</h4>
        <p>Price: {{ formattedPrice }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: 'Apple iPhone 15 128GB',
                price: 99.99,
                available: false
            }
        };
    },
    computed: {
        formattedPrice() {
            return '$' + this.product.price.toFixed(2);
        }
    }
};
</script>