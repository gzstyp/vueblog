
获取本地的数据需要注意的有：数据要放在static目录下"

本示例使用的是本地json数据，获取本地的数据需要注意的是,数据一定要放在static目录下

自定义(无参数)指令,指令名rainbow,但指令名不需要带v-开头的,因为v-是特殊的用法,在调用时 v-rainbow

自定义(有参数不带属性)指令,指令名theme,但指令名不需要带v-开头的,因为v-是特殊的用法,在调用时 v-theme=\"'wide'\",需要用单引号引起,参数可以是对象{};可以是数组[];

自定义(有参数且有属性)指令,指令名article,但指令名不需要带v-开头的,因为v-是特殊的用法,在调用时 v-article:column=\"'lines'\",需要用单引号引起,参数可以是对象{};可以是数组[]

双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“linux的|管道”符号|指示

可以在一个组件的选项中定义本地的过滤器;也可以在全局的main.js定义,即本js文件;

全局过滤器请看F:\\IntellijProjects\\web\\vue\\blog\\src\\components\\showBlogs.vue的filters

import VueResource from 'vue-resource';这个是从当前项目的package.json添加依赖后的dependencies获取

自定义指令也可以分为局部和全局的,全局在main.js编写;局部在当前的vue文件里的,示例在src\\components\\showBlogs.vue的directive111
