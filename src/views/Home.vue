<template>
    <div class="row">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'home',
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
        overflow: hidden;
    }

    main {
        flex: 1 0 auto;
    }
</style>
