<template>
    <nav>
        <ul>
            <!--它要结合src\routers.js一起使用,那js文件会和下面的列表一一对应的路由,在App.vue那引用import本文件-->
            <li><router-link to="/" exact>博客列表</router-link></li>
            <li><router-link to="/add" exact>撰写博客</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name : 'nar-header'
}
</script>
<style scoped>
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    ul li{
        display: inline-block;
        margin: 0 8px;
    }
    ul li a{
        text-decoration: none;
        padding: 10px;
        border-radius: 3px;
        color: #fff;
    }
    nav{
        background: #459df5;
        padding: 14px;
    }
    .router-link-active{
        background: rgba(255, 255, 255, 0.8);
        color: #444;
    }
</style>