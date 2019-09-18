<template>
    <div class="sidenav sidenav-fixed">
        <ul>
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
