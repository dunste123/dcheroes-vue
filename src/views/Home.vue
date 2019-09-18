<template>
    <div class="row">
        <SideBar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import SideBar from '../components/SideBar';

    export default {
        name: 'home',
        components: {
            SideBar,
        },
        data: () => ({
            teams: [],
        }),
        beforeRouteEnter(to, from, next) {
            if (to.name === 'home') {
                next({
                    name: 'team',
                    params: {
                        teamId: 1,
                    },
                });
            } else {
                next();
            }
        },
    };
</script>

<style>
    body {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }
</style>
