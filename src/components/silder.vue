<template>
  <div class="silder">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="false" router >
      <el-submenu
        v-for="route in routesInfo"
        v-if="route.meta.hasSubMenu"
        :key="route.path"
        :index="route.path"
      >
        <template slot="title">
          <i :class="route.meta.icon"></i>
          <span slot="title">{{route.meta.title}}</span>
        </template>
        <!-- 二级菜单 -->
        <!-- 循环子路由`route.children` -->
        <!-- 循环的时候判断子路由`childRoute`是否包含子菜单 -->
        <el-submenu
          v-for="childRoute in route.children"
          v-if="childRoute.meta.hasSubMenu"
          :index="addVal(route.path,childRoute.path)"
        >
          <template slot="title">
            <i :class="childRoute.meta.icon"></i>
            <span slot="title">{{childRoute.meta.title}}</span>
          </template>
        </el-submenu>
        <el-menu-item :index="addVal(route.path,childRoute.path)" v-else>
          <i :class="childRoute.meta.icon"></i>
          <span slot="title">{{childRoute.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item :index="route.path" v-else>
        <i :class="route.meta.icon"></i>
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routesInfo: []
    };
  },
  created() {
    this.routesInfo = this.$router.options.routes;
    console.log(this.$router.options.routes);
  },
  methods:{
    addVal(val1,val2){
      if(val1&&val2){
        console.log((val1+val2))
        return val1+"/"+val2
      }
      
    }
  }
};
</script>
<style lang="scss">
  .el-menu{
    height: 100%;
    border: none;
    background-color: rgb(48, 65, 86);
    span{
      color: white;
    }
    .el-submenu .el-menu-item{
      min-width: "";
    }
  }
</style>