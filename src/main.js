// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';/* 这个是从当前项目的package.json添加依赖后的dependencies获取 */
import VueRouter from 'vue-router';/* 这个是从当前项目的package.json添加依赖后的dependencies获取 */
// 在下面的创建路由引用使用该变量
import UrlRouters from './routers';/* js可以省略了,因为是模块化 */

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

// 自定义指令也可以分为局部和全局的,全局在main.js编写;局部在当前的vue文件里的,示例在src\components\showBlogs.vue的directive111
// 自定义(无参数)指令,指令名rainbow,但指令名不需要带v-开头的,因为v-是特殊的用法,在调用时 v-rainbow
Vue.directive('rainbow',{
  bind(el,params,node){//node是节点
    el.style.color = '#'+Math.random().toString(16).slice(2,8);
  }
});
//自定义(有参数不带属性)指令,指令名theme,但指令名不需要带v-开头的,因为v-是特殊的用法,在调用时 v-theme="'wide'",需要用单引号引起,参数可以是对象{};可以是数组[];
Vue.directive('theme',{
  bind(el,params,node){
    if(params.value == 'wide'){
      el.style.maxWidth = '1260px';
      el.style.color = '#'+Math.random().toString(16).slice(2,8);
    }else if(params.value == 'narrow'){
      el.style.maxWidth = '1002px';
    }
  }
});
//自定义(有参数且有属性)指令,指令名article,但指令名不需要带v-开头的,因为v-是特殊的用法,在调用时 v-article:column="'lines'",需要用单引号引起,参数可以是对象{};可以是数组[];
Vue.directive('article',{
  bind(el,params,node){
    if(params.arg == 'column'){
      el.style.background = '#'+Math.random().toString(16).slice(2,8);
    }
  }
});
// 自定义过滤器,过滤器可以用在两个地方：
// 双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“linux的|管道”符号|指示
// 可以在一个组件的选项中定义本地的过滤器;也可以在全局的main.js定义,即本js文件;全局过滤器请看F:\IntellijProjects\web\vue\blog\src\components\showBlogs.vue的filters
/*
  <!-- 在双花括号中 -->
  {{ message | to-uppercase }}

  <!-- 在 `v-bind` 中 -->
  <div v-bind:id="rawId | to-uppercase"></div>
*/
Vue.filter('to-uppercase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1);//首写字段大写
});
Vue.filter('sinppet', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.slice(0,100) + '……';
});
//创建路由,那一个页面或哪一个容器里使用呢?
const myrouter = new VueRouter({
  routes : UrlRouters,
  mode : 'history'//去掉url里的#
});
/* eslint-disable no-new */
new Vue({
  el : '#app',
  components : { App },
  template : '<App/>',
  router : myrouter //添加到容器里,也可以写成 router,它等价于 router: router
});

/*

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

*/
