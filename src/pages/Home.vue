<template>
    <div v-if="loading">Loading...</div>
    <ProductList v-else :header="header" :products="products"></ProductList>
</template>
<script>
    import { ref, onMounted } from 'vue';
    import ProductList from '../components/ProductList.vue';
    import {fetchProducts} from "../services/products.service.ts"

    export default {
        components: {
            ProductList
        },
        setup() {
            const products = ref([]);
            const filters = ref([]);
            const header = ref([]);
            const loading = ref(true);

            onMounted(async () => {
            try {
                const response = await fetchProducts();
                products.value = response.products;
                filters.value = response.filters;
                header.value = response.header;

                loading.value = false;
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
            });

            return { products, loading, header, filters  };
        }
    };
</script>
