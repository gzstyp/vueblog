<template>
  <div id="app">
    <NarHeader></NarHeader>
    <!--默认显示的东东(启动页默认显示的页面),显示路由导航的位置,路由占位符[有两个路由占位符地方,一个是本文件,另一个是在文件src\components\NarHeader.vue]-->
    <router-view></router-view><!-- 路由注入的地方 -->
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import showBlogs from './components/showBlogs'
import NarHeader from './components/NarHeader'

export default {
  name: 'App',
  components: {
    AddBlog,showBlogs,NarHeader
  }
}
</script>

<style>
</style>

<!--
1.写一个js路由集合文件,本项目是routers.js文件,在src\main.js文件引入 import UrlRouters from './routers';并在main.js创建路由且通过
  const myrouter = new VueRouter({
    routes : UrlRouters,
    mode : 'history'//去掉url里的#
  });
  new Vue({
    el : '#app',
    components : { App },
    template : '<App/>',
    router : myrouter //添加到容器里
  });
挂载注册为路由信息
2.需要写一个组件为NarHeader.vue,把routers.js文件里的路由信息一一对应写在该文件NarHeader.vue里
3.在App.vue文件里 导入 import NarHeader from './components/NarHeader'，并注册成到组件components:{NarHeader}
4.最后在
<template>
  <div id="app">
    <NarHeader></NarHeader>
    <router-view></router-view> 这个不能少
  </div>
</template>
5.总结:js文件import但不能注册为组件
-->
