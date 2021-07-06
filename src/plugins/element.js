import Vue from 'vue'
import { Button } from 'element-ui'
import { From, FromItem, Input } from 'element-ui'
import { Message, Container, Header, Aside, Main } from 'element-ui' //导入弹框提示

Vue.use(Button)
Vue.use(From)
Vue.use(FromItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.prototype.$message = Message//将弹窗组件挂到原型对象上，这样每个组件就可以通过this.$message访问弹窗提示了

