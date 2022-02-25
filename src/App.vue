<template>
<<<<<<< HEAD
    <div>
        <app-navbar></app-navbar>
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
=======
    <div class="container">
        <router-view></router-view>
>>>>>>> 6903d67e26cc4186ec540ebf62642e7bb68e45b7
    </div>
</template>

<script>
    import navbar from './components/Navbar.vue';
    export default {
        components: {
            appNavbar: navbar
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
