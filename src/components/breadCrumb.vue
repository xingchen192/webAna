<template>
    <div class="example-container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                    v-for="(item,index) in breadList"
                    :key="index"
                    :to="{ path: item.path }"
            >{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        breadList: [] // 路由集合
      };
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    },
    methods: {
      isHome(route) {
        return route.name === "home";
      },
      getBreadcrumb() {
        let matched = this.$route.matched;
        // console.log(matched)
        //如果不是首页
        if (!this.isHome(matched[0])) {
          matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
        }
        this.breadList = matched;
        console.log(this.breadList[0].meta.title)
      }
    },
    mounted(){
      // this.getBreadcrumb();
    },
    created() {
      this.getBreadcrumb();
    }
  };
</script>
