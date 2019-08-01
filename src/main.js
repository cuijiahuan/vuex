// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex);

const store = new Vuex.Store({
  // state  vuex的公共状态，可以看作所有组件的data，用来保存所有组件的公共数据。
  state:{
    products: [
      {name: '鼠标', price: 20},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 80}
    ]
  },
  // getters  store的计算属性，可以看作所有组件的computed属性，getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生变化才会被重新计算。
  getters:{
    saleProducts: (state) => {
      let saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
      return saleProducts;
    }
  },
  // mutations  store的方法属性，可以看作methods，mutations对象中保存着更改数据的回调函数，官方规定名为type，第一个参数为state，第二个参数为payload（自定义的参数）
  mutations:{
    minusPrice (state, payload) {
      let newPrice = state.products.forEach( product => {
        product.price -= payload
      })
    }
  },
  // actions
  actions:{
    minusPriceAsync( context, payload ) {
      setTimeout(() => {
        context.commit( 'minusPrice', payload );
      }, 2000);
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
