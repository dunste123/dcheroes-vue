<template>
    <div class="row">
        <div class="col s12">
            <div class="card horizontal">
                <div class="card-image">
                    <HeroImage :image="image" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <span class="card-title">{{ name }}</span>
                        <p v-html="trunc(desc, 100)"/>
                    </div>
                    <div class="card-action">
                        <router-link :to="{ name: 'hero', params: {teamId: teamId, heroId: id} }">Read more</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeroImage from './HeroImage';

    export default {
        name: 'hero-card',
        components: {
            HeroImage,
        },
        props: {
            id: {
                type: Number,
                required: true,
            },
            teamId: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            desc: {
                type: String,
                required: true,
            },
        },
        methods: {
            trunc(s, length) {
                return (s.length > length) ? s.substr(0, length - 1) + '&hellip;' : s;
            },
        },
    };
</script>

<style scoped lang="scss">
    .base {
        width: 550px;
        height: 200px;
    }

    .info {
        background: darkcyan;
        height: 100%;
        padding: 10px;
    }

    p {
        text-overflow: ellipsis;
    }

    .card-image {
        img {
            width: 150px !important;
            height: 100% !important;
        }
    }
</style>
