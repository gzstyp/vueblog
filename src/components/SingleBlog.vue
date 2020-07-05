<template>
    <div id="single-blog">
        <h4>{{blog.title}}</h4>
        {{blog.body}}
    </div>
</template>
<script>
export default {
    name : "single-blog",
    data(){
        return {
            id : this.$route.params.id,
            title : this.$route.params.title,
            blog : {}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then((data) =>{
            this.blog = data.body;
        }).catch((err)=>{});
    }
}
</script>
<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 16px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>