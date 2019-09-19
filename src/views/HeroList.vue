<template>
    <div>
        <div class="col s5 offset-m1 offset-xl1">
            <HeroCard v-for="(hero, i) in heros"
                      :key="i"
                    :id="hero.id"
                    :team-id="hero.teamId"
                    :name="hero.name"
                    :desc="hero.desc"
                    :image="hero.image"
            />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeroCard from '../components/HeroCard';
    import axios from 'axios';

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
            this.fetchHeros(to.params.teamId);

            next();
        },
        methods: {
            async fetchHeros(teamId = 1) {
                const { data } = await axios.get(`heroes.php?team_id=${teamId}`);

                if (!data.length) {
                    this.heros = [];
                }

                this.heros = data.map((h) => this.mapHero(h));
            },
            mapHero(json) {
                return {
                    id: Number(json.HERO_ID),
                    name: json.HERO_NAME,
                    image: json.HERO_IMAGE,
                    desc: json.HERO_DESCRIPTION,
                    powers: JSON.parse(json.HERO_POWERS),
                    teamId: Number(json.TEAM_ID),
                };
            },
        },
    };
</script>

<style scoped>

</style>
