<template>
  <div id="addblog">
    <h2>添加博客</h2>
    <form v-if="!submited">
      <label>博客标题</label>
      <input type="text" title="博客的标题" placeholder="博客标题" v-model="blog.title" required/>
      <label>博客内容</label>
      <textarea title="博客的内容" placeholder="请输入博客的内容" v-model="blog.content" required></textarea>
      <div id="checkboxs">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label>node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories">
        <label>angular.js</label>
        <input type="checkbox" value="angular.js" v-model="blog.categories">
      </div>
      <div id="state">
        <label>状态</label>
        <div style="margin-left:20px">
          <label>启用</label>
          <input type="radio" value="1" v-model="blog.state">
        </div>
        <div>
        <label>禁用</label>
        <input type="radio" value="0" v-model="blog.state">
        </div>
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author" >{{author}}</option>
      </select>
    </form>
    <div v-if="submited">
      <h4>恭喜,发布成功</h4>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
      </ul>
      <p>状态:{{blog.state}}</p>
      <p>作者:{{blog.author}}</p>
    </div>
    <button @click="add()">添加博客</button>
  </div>
</template>

<script>
// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/posts
export default {
  name: 'addBlog',
  data () {
    return {
      blog : {
        title : "",
        content : "",
        categories : [],
        state:'',
        author : '选择作者'
      },
      authors : ['选择作者','猪八戒','孙悟空','唐僧'],
      submited : false
    }
  },
  methods : {
    add : function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        userId : 101,
        id : 1024,
        title : this.blog.title,
        body : this.blog.content
      }).then(function(data){
        console.info('data:'+data.data);
        this.submited = true;
      }).catch(function(err){
        console.info('err:'+err);
      });
    }
  }
}
</script>

<style scoped>
  #addblog *{
    box-sizing: border-box;
  }
  #addblog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  #addblog textarea{
    height: 200px;
    border-block-color: #ccc;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #checkboxs{
    margin-top: 10px;
  }
  #checkboxs label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxs input{
    display: inline-block;
    margin-right: 10px;
  }
  #state{
    display: flex;
    justify-content: start;
  }
  #state label{
    display: flex;
    justify-content: start;
    display: inline-block;
  }
  button{
    display: inline-block;
    margin-bottom: 10px;
    background: #f00;
    color: #fff;
    border: 0;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin: 22px 0;
  }
</style>
