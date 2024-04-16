<template>
    <div class="flex items-center justify-center gap-4 py-3 pb-1">
        <button @click="handleFilter('All')" :class="{ 'active': selectedOption === 'All' }">All</button>
        <button @click="handleFilter('Available')" :class="{ 'active': selectedOption === 'Available' }">Available</button>
        <button @click="handleFilter('Watchlist')" :class="{ 'active': selectedOption === 'Watchlist' }">Watchlist</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: 'All'
            };
        },
        methods: {
            handleFilter(option) {
                this.selectedOption = option;
                this.$emit('filter', option);
            }
        }
    };
</script>

<style scoped>
    button {
        color: #42b883;
        font-weight: 600;
        border-radius: 60px;
        padding: 0.25rem 2rem;
        border: 1px solid #42b883;
    }
    button.active {
        background-color: #42b883;
        color: white;
    }
</style>
