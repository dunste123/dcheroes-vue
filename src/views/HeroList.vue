<template>
    <div class="row">
        <div class="root col s6 m4">
            <HeroCard v-for="(hero, i) in heros"
                      :key="i"
                    :id="hero.id"
                    :team-id="hero.teamId"
                    :name="hero.name"
                    :desc="hero.desc"
                    :image="hero.image"
            />
        </div>
        <div class="col s6 m8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeroCard from '../components/HeroCard';
    import axios from 'axios';
    import {parseHero} from '../helpers/helpers';

    export default {
        name: 'HeroList',
        components: {
            HeroCard,
        },
        data: () => ({
            heros: [],
        }),
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                vm.fetchHeros(to.params.teamId);
            });
        },
        beforeRouteUpdate(to, from, next) {
            console.log(to.params.teamId, from.params.teamId);

            if (Number(to.params.teamId) !== Number(from.params.teamId)) {
                this.fetchHeros(to.params.teamId);
            }

            next();
        },
        methods: {
            async fetchHeros(teamId = 1) {
                this.heros = [];

                const { data } = await axios.get('heroes.php', {
                    params: {
                        team_id: teamId,
                    },
                });

                if (!data.length) {
                    this.heros = [];
                }

                this.heros = data.map(parseHero);
            },
        },
    };
</script>

<style lang="scss" scoped>
    div.root {
        overflow-y: scroll;
        height: 100vh;
    }
</style>
