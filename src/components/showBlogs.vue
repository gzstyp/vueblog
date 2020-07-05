<template>
  <div id="show-blogs" v-theme="'narrow'">
      <h2 v-directive111>博客列表</h2>
      <input type="text" class="sousuo" v-model="search" placeholder="输入关键字搜索">
      <div v-for="blog in filterBlogs" class="single-blog" :key="blog.id">
        <!-- 路由单个参数 -->
        <router-link :to="'/blog/' + blog.id"><h3 v-rainbow>{{blog.title | to-uppercase}}</h3></router-link>
        <!-- 路由多个参数 -->
        <article v-article:column="'lines'">
          <router-link :to="'/info/' + blog.id +'/' + blog.title "><h3 v-rainbow>{{blog.body | sinppet}}</h3></router-link>
        </article>
      </div>
  </div>
</template>

<script>

export default {
  name : 'show-blogs',
  data(){
      return {
          blogs : [],
          search : ''
      }
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
          this.blogs = data.body.slice(0,10);
      }).catch((err)=>{});
      /*使用本地的json数据
      this.$http.get('./../static/localData.json').then(function(data){
          this.blogs = data.body.slice(0,10);
      }).catch(function(err){});*/
  },
  // computed用来监控自己定义的变量，该变量不在data里面声明???，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
  // computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化。这里的这个总金额使用computed属性来进行计算是最好的选择
  computed : {
    //过滤器
    filterBlogs : function(){
      return this.blogs.filter((blog) =>{
        return blog.title.match(this.search);//ES语法,它返回的是boolean类型
      });
    }
  },
  //局部的过滤器,用法: <h3 v-rainbow>{{blog.title | uppercase}}</h3>
  filters : {
    uppercase : function(value){
      return value.toUpperCase();
    },
    /* 注意to的后面-和大写的
    "to-uppercase" : function(){
      return value.toUpperCase();
    },
    toUppercase : function(){
      return value.toUpperCase();
    }*/
  },
  directives : {
    directive111 : {
      bind(el,params,node){//node是节点
        el.style.color = '#'+Math.random().toString(16).slice(2,8);
      }
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .sousuo{
    height: 32px;
    line-height: 32px;
    width: 99%;
    margin-right: 20px;
    padding: 0 4px;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border-radius: 4px;
  }
</style>
