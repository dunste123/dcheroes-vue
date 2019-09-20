<template>
  <div>
    <header>
      <SideBar/>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import SideBar from './components/SideBar';

  export default {
    name: 'app',
    components: {
      SideBar,
    },
  };
</script>

<style lang="scss">
  @import "~materialize-css/sass/materialize";
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
