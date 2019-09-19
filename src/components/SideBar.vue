<template>
    <div>
        <div class="container">
            <a href="#" data-target="nav-mobile" class="top-nav sidenav-trigger full hide-on-large-only"><i class="material-icons">menu</i></a>
        </div>
        <ul id="nav-mobile" class="sidenav sidenav-fixed blue lighten-4">
            <router-link class="center-align"
                         active-class="nope"
                         tag="li"
                         :to="{ name: 'team', params: { teamId: 1 } }">
                <img src="../assets/logo.png" alt="DC logo">
            </router-link>
            <router-link v-for="(team, k) in teams" :key="k"
                         tag="li"
                         :to="{ name: 'team', params: { teamId: team.id }}">
                <a href="">{{ team.name }} ({{ team.count }})</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'side-bar',
        data: () => ({
            teams: [],
        }),
        mounted() {
            if (!this.teams.length) {
                this.fetchTeams();
            }
        },
        methods: {
            async fetchTeams() {
                const { data } = await axios.get('/teams.php');

                this.teams = data.map((t) => this.parseTeam(t));
            },
            parseTeam(json) {
                return {
                    id: json.TEAM_ID,
                    name: json.TEAM_NAME,
                    count: json.COUNT,
                };
            },
        },
    };
</script>

<style scoped lang="scss">
    @import "~materialize-css/sass/components/color-variables";

    img {
        margin-top: 20px;
    }

    div {
        ul {
            li.active {
                a {
                    color: map-get($blue, 'lighten-1');
                }
            }
        }
    }
</style>
