<template>
    <div class="root">
        <div class="card-panel grey darken-2 center-align white-text">
            <span class="stars">
                <i v-for="i in rating" :key="`yellow-${i}`" class="material-icons yellow-text">star</i>
                <i v-for="i in blackStarCount" :key="`black-${i}`" class="material-icons">star</i>
            </span>
            <h1>{{ name }}</h1>
            <HeroImage :image="image"/>
        </div>

        <h3>Info</h3>
        <p>{{ desc }}</p>

        <h3>Powers</h3>
        <ul class="browser-default">
            <li v-for="(p, i) in powers" :key="i">{{ p }}</li>
        </ul>

        <RateBox :hero-id="id" />

        <h3>Comments</h3>
        <div class="container">
            <template v-if="comments.length">
                <Comment
                        v-for="(c, i) in comments"
                        :key="i"
                        :comment="c"/>
            </template>
            <p v-else>No comments</p>
        </div>
    </div>
</template>

<script>
    import Comment from '../components/Comment';
    import axios from 'axios';
    import {parseHeroExtra} from '../helpers/helpers';
    import HeroImage from '../components/HeroImage';
    import RateBox from '../components/RateBox';

    export default {
        name: 'HeroPage',
        components: {
            RateBox,
            HeroImage,
            Comment,
        },
        data: () => ({
            id: 0,
            name: '',
            image: 'logo.png',
            desc: '',
            rating: 0,
            comments: [],
            powers: [],
        }),
        mounted() {
            this.fetchHero(this.$route.params.heroId);
        },
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                vm.fetchHero(to.params.heroId);
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.fetchHero(to.params.heroId);

            next();
        },
        methods: {
            async fetchHero(id) {
                const {data} = await axios.get('/hero.php', {
                    params: {
                        hero_id: id,
                    },
                });

                const hero = parseHeroExtra(data);
                const keys = Object.keys(hero);

                for (let key of keys) {
                    if (this.hasOwnProperty(key)) {
                        this[key] = hero[key];
                    }
                }

            },
        },
        computed: {
            blackStarCount() {
                return 5 - this.rating;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "~materialize-css/sass/components/color-variables";

    div.root {
        overflow-y: scroll;
        height: 100vh;
        width: 55vw;
    }

    .stars {
        color: color('shades', 'black');

        i.material-icons {
            font-size: 50px;
        }
    }

    img {
        width: 200px;
        border-radius: 50%;
    }
</style>
