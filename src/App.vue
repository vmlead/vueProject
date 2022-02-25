<template>
    <div>
        <app-navbar></app-navbar>
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
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
