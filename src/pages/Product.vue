<template>
    <div v-if="selectedProduct" class="p-4 w-full">
        <div class="flex gap-4 mb-2">
            <img :src="selectedProduct.imageURL" alt="">
            <div>
                <p class="font-semibold">{{ selectedProduct.name }}</p>
                <p><span class="font-semibold">Price:</span> {{ selectedProduct.price.value + " " +  selectedProduct.price.currency }}</p>
                <div>
                    <span>{{ selectedProduct.date }}</span>
                </div>
            </div>
        </div>
        <p class="mb-3">{{ selectedProduct.description }}</p>
        <button @click="addToWatchList">Remember</button> 
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const selectedProduct = ref(null);

onMounted(() => {
    const productData = localStorage.getItem('selectedProduct');
    if (productData) {
        selectedProduct.value = JSON.parse(productData);

        localStorage.removeItem('selectedProduct');
    }
});

const addToWatchList = () => {
    const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
    const productId = selectedProduct.value.id;

    if (!watchList.includes(productId)) {
        watchList.push(productId);
        localStorage.setItem('watchList', JSON.stringify(watchList));
    }
};
</script>

<style scoped>
h1{
    font-size: 2rem;
}
button {
    font-weight: 600;
    width: 100%;
    padding: 0.25rem 2rem;
    border: 1px solid #42b883;
    background: #42b883;
    color: white;
}
</style>
