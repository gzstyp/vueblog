//若想在vue文件里使用,需要 export default,谁引用了就返回给谁数组

//引入组件[vue页面]
import showBlogs from './components/showBlogs';
import AddBlogs from './components/addBlog';
import SingleBlog from './components/SingleBlog';
// 它要结合src\components\NarHeader.vue一起使用,那vue文件会和下面的列表一一对应的路由,这个/info/:id不需要在页面上显示的，所以不需要在组件NarHeader.vue配置
export default[
    {path : "/",component : showBlogs},
    {path : "/add",component : AddBlogs},
    {path : "/blog/:id",component : SingleBlog},//单个路由参数,接收参数是 this.$route.params.id,
    {path : "/info/:id/:title",component : SingleBlog}//多个路由参数,接收参数是this.$route.params.id,this.$route.params.title,
]