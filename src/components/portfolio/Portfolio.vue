<template>
    <div>
        <app-stocks v-for="stock in stocks" :stock="stock"></app-stocks>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from  './Stocks.vue';
    export default {
        computed : {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
         components : {
            appStocks: Stock
         }
    }
</script>

<style scoped>

</style>