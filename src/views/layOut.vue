<template>
  <div class="layOut">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">头部咯</div>
      </el-col>
    </el-row>
    <el-row style="height:100%">
      <el-col :span="2" style="height:100%">
        <div style="background-color: rgb(48, 65, 86);height:100%">
          <silder />
        </div>
      </el-col>
      <el-col :span="22" style="height:100%">
        <div style="height:100%;padding-left:20px">
          <div class="cash">
            <el-breadcrumb separator-class="el-icon-arrow-right"> 
              <el-breadcrumb-item v-for="item in list" :key="item.path" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
           <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import silder from "@/components/silder";
export default {
  components: {
    silder
  },
  data() {
    return {
     
      list:[]
    }
  },
  created(){
    // let  arr= this.allRoute.filter(item=>{
    //     return this.$route.path.includes(item.path)
    //   })
    //   console.log(this.$route.matched.filter(item => item.name))
    this.getList()
  },
  methods:{
    getList(){
      this.list=this.$route.matched.filter(item => item.name)
    }
  },
  watch:{
  $route(to,from){
    this.getList()
  },

},
};
</script>

<style lang="scss" scoped>
.layOut {
  width: 100%;
  height: 100%;


  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
