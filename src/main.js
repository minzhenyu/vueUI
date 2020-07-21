import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import TodoList from './components/TodoList.vue'
import Header from './components/Header.vue'
import Try from './components/Try.vue'
import HelloWorld from './components/HelloWorld.vue'
import UI from './components/UI.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HelloWorld },
		{ path: '/todolist', component: TodoList },
		{ path: '/header', component: Header },
		{ path: '/try', component: Try },
		{ path: '/ui', component: UI },
    
  ]
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
