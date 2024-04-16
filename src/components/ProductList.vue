<template>
  <div>
    <Filters @filter="filterProducts"></Filters>
    <div>
      <h3 class="text-left font-semibold text-lg">{{ header?.headerTitle }}</h3>
      <p class="text-sm text-gray-500 mb-4">{{ header?.headerDescription }}</p>
      <div class="pt-0 flex flex-col gap-3 max-h-[74vh] overflow-y-auto">
        <ProductListItem
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
  
<script>
import Filters from '../components/Filters.vue';
import ProductListItem from "../components/ProductListItem.vue";

export default {
  components: {
    Filters,
    ProductListItem
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    header: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      filteredProducts: [],
      loading: true
    };
  },
  mounted() {
    this.filterProducts('All');
  },
  methods: {
    filterProducts(option) {
      switch (option) {
        case 'All':
          this.filteredProducts = this.products;
          break;
        case 'Available':
          this.filteredProducts = this.products.filter(product => product.available);
          break;
        case 'Watchlist':
          const watchlist = JSON.parse(localStorage.getItem('watchList')) || [];
          this.filteredProducts = this.products.filter(product => watchlist.includes(product.id));
          break;
        default:
          break;
      }
      this.loading = false; 
    }
  }
};
</script>
