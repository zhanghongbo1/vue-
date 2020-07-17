import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    // {
    //   path:'/login',
    //   name:"login",
    //   component: () => import ( '../views/login'),
    //   meta: {
    //     title: '首页',    // 菜单标题
    //     icon: 'el-icon-s-home',  // 图标
    //     hasSubMenu: false, // 是否包含子菜单，false 没有子菜单；true 有子菜单

    // },
    // },
    {
      path: '/index',
      name: 'index',
      component: () => import ( '../views/layOut'),
      redirect: '/index',  
      meta: {
          title: '首页',    // 菜单标题
          icon: 'el-icon-s-home',  // 图标
          hasSubMenu: false, // 是否包含子菜单，false 没有子菜单；true 有子菜单

      },
      children:[
          {
              path: '/index',
              component: ()=>import ('../views/home.vue')
          }
      ]
  },
  // 员工管理
  {
      path: '/employee',
      name: 'employee',
      component: () => import ( '../views/layOut'),
      redirect: '/employee/employeeStatistics', 
      meta: {
          title: '员工管理',    // 菜单标题
          icon: 'el-icon-user-solid',  // 图标
          hasSubMenu: true,   // 是否包含子菜单
      },
      children: [
          // 员工统计
          {
              path: 'employeeStatistics',
              name: 'employeeStatistics',
              meta: {
                  title: '员工统计',    // 菜单标题,
                  hasSubMenu: false    // 是否包含子菜单
              },
              component: ()=>import ('../views/employeeStatistics'),
          },
          // 员工管理(增删改查)
          {
              path: 'employeeManage',
              name: 'employeeManage',
              meta: {
                  title: '员工管理',    // 菜单标题
                  hasSubMenu: false    // 是否包含子菜单
              },
              component: ()=>import ('../views/EmployeeManage')
          }
      ]
  },
  // 考勤管理
  {
      path: '/attendManage',
      name: 'attendManage',
      component: () => import ( '../views/layOut'),
      redirect: '/attendManage/attendStatistics',
      meta: {
          title: '考勤管理',    // 菜单标题
          icon: 'el-icon-s-claim',  // 图标
          hasSubMenu: true, // 是否包含子节点，false 没有子菜单；true 有子菜单
      },
      children:[
          // 考勤统计
          {
              path: 'attendStatistics',
              name: 'attendStatistics',
              meta: {
                  title: '考勤统计',    // 菜单标题   
                  hasSubMenu: false    // 是否包含子菜单               
              },
              component:  ()=>import ('../views/attendStatistics'),
          },
          // 考勤列表
          {
              path: 'attendList',
              name: 'attendList',
              meta: {
                  title: '考勤列表',    // 菜单标题   
                  hasSubMenu: false    // 是否包含子菜单                 
              },
              component: ()=>import ('../views/attendList'),
          },
          // 异常管理
          {
              path: 'exceptManage',
              name: 'exceptManage',
              meta: {
                  title: '异常管理',    // 菜单标题  
                  hasSubMenu: false    // 是否包含子菜单                  
              },
              component: ()=>import ('../views/exceptManage'),
          }
      ]
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
