<template>
    <div>
        <NavHeader></NavHeader>

        <keep-alive include="resumePost">
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
  import NavHeader from '../components/theNav'

  export default {
    name: 'mainBody',
    components: {
      NavHeader
    }
  }

</script>

<style scoped>

</style>
