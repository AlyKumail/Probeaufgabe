<template>
    <div :class="{ 'flex-row-reverse justify-between': product.available }" class="flex items-start gap-4 border p-4" @click="goToProductDetail">
        <img :src="product.imageURL" alt="">
        <div>
            <div class="flex items-center justify-between">
                <span class="cursor-pointer font-semibold">{{ product.name }}</span>
                <span>{{ product.date }}</span>
            </div>
            <p>{{ product.description }}</p>
            <div>
                <p><span class="font-semibold">Price:</span> {{ product.price.value + " " +  product.price.currency }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    props: {
        product: {
            type: Object,
            required: true
        } 
    },
    setup(props) { 
        const router = useRouter();

        const goToProductDetail = () => {
            localStorage.setItem('selectedProduct', JSON.stringify(props.product));

            router.push({ name: 'Product', params: { id: props.product.id } }); 
        };

        return { goToProductDetail };
    }
};
</script>
