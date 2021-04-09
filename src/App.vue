<template>
    <div id="app">
        <!--<NavHeader></NavHeader>-->

        <keep-alive include="resumePost,assessPro">
        <router-view/>
        </keep-alive>

    </div>
</template>

<script>
  // import NavHeader from './components/theNav'

  export default {
    name: 'App',
    components: {
      // NavHeader
    }
  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
