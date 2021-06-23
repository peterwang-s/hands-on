/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/**
 * 对于服务端渲染，这里是 通用 entry(universal entry)，将导出一个工厂函数，用于创建新的应用程序，router，和store实例
 */
// +++++++++++++++++++++++++++++++++++++++原生类库导入++++++++++++++++++++++++++++++++++++++++++++++++++
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
// eslint-disable-next-line no-unused-vars
// import Cookies from 'js-cookie'; // cookie类库

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets 现代css重置脚本

// import Element from 'element-ui'
// import './styles/element-variables.scss'   // 设计规范中的基本元素

// import '@/styles/index.scss' // global css 全局css脚本
import '@/styles/index.styl'; // global css 全局css脚本

// +++++++++++++++++++++++++++++++++++++++ 应用层逻辑 ++++++++++++++++++++++++++++++++++++++++++++++++++

// import router from './router';  //原逻辑
// import store from './store';  // 原逻辑

// ++++++++++++++++++++++++++++++ROUTER 路由逻辑+++++++++++++++++++++++++++++++
/** *./router 根目录下router文件夹，存放路由模块相关脚本** */
// import Vue from 'vue';  // 原逻辑
import VueRouter from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import Home from '@/views/Home.vue';

// export default router;

// +++++++++++++++++++++++++++++++STORE 状态管理逻辑+++++++++++++++++++++++++++++++++
/** *./store 根目录下store文件夹，存放状态管理模块相关脚本** */
// import Vue from 'vue';  // 原逻辑
import Vuex from 'vuex';


// 代码的可复用性和组合函数，解决了函数的深度嵌套，增加了代码可读性，提高了代码的整洁程度
/** +++++++++++GLOBAL 全局方法或属性/全局组件/全局资源:指令/过滤器/过渡:/全局混入/实例方法++++++ * */
// import './icons' // icon components
import './permission'; // permission controller
// import './utils/error-log'; // error log

/** +++++++++ global component 全局组件  icon图标管理视图组件++++++++++++++ * */
// import Vue from 'vue'
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import SvgIcon from '@/components/SvgIcon';
import App from './App.vue';

/** ++++++++++++++ global/component filters 全局过滤器 ++++++++++++++ * */
import * as filters from './filters';

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// svg component
// register globally 注册全局组件
Vue.component('svg-icon', SvgIcon);

// 使用require语法，require.context上下文方法获取正则匹配的req集合。再遍历req集合，执行requireContext方法，导入匹配脚本内容
// 简介，巧妙，方便，实用的处理文件导入的逻辑
const req = require.context('./icons/svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);
// global filters
// register global utility filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// 全局过滤器
function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

Vue.filter('uppercaseFirst', uppercaseFirst);

// 局部过滤器
// filters: {
//   capitalize: function (value) {}
// }

// 过滤器使用方法
//
// <!-- 在双花括号中 -->
// {{ message | capitalize }}
//
// <!-- 在 `v-bind` 中 -->
// <div v-bind:id="rawId | formatId"></div>

/** ++++++++++++++ global/component directive 全局自定义指令 ++++++++++++++ * */

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // bind:function(){}, // 第一次绑定元素调用，进行初始化设置
  // update:function(){}, // VNode 更新时调用；可以优化的点：忽略不必要的模板更新
  // componentUpdated:function(){}, // 组件和子组件 VNode 更新时调用；可以优化的点：忽略不必要的模板更新
  // unbind:function(){}, // 元素解绑定调用

  // 当被绑定的元素插入到 DOM 中时……  绑定元素插入父节点时调用，不一定插入文档中

  // inserted: function (el, binding, vnode, oldVnode) {
  // 参数列表：
  // el:直接绑定的元素，可直接操作
  // binding：name：指令名称；value：绑定值；oldValue：旧值；
  // arg：参数；参数配置;modifiers：修饰符;expression：字符串形式的表达式；
  // v-focus:arg.modifiers = expression
  inserted(el) {
    // 聚焦元素
    el.focus();
  },
});
// 注册一个局部指令
// directives: {}


/** ++++++++++++++ global/component mixin 全局混入++++++++++++++ * */

// 全局混入对象
// // 生成应用混入的组件实例
// new Vue({mixins: [mixin],})
//
// // 生成应用混入的vue组件
// Vue.extend({
//   mixins: [myMixin]
// })

// 全局混入。将影响每一个之后创建的 Vue 实例，一般进行自定义选项注入处理逻辑。
// 使用原则：只用于自定义选项；推荐当成插件发布，避免重复混入
Vue.mixin({
  beforeCreate() {
    console.log('main global mixin: beforeCreate');
  },
  created() {
    console.log('main global mixin: created');
  },
  beforeMount() {
    console.log('main global mixin: beforeMount');
  },
  mounted() {
    console.log('main global mixin: mounted');
  },
  beforeUpdate() {
    console.log('main global mixin: beforeUpdate');
  },
  updated() {
    console.log('main global mixin: beforeUpdate');
  },
  destroyed() {
    console.log('main global mixin: beforeUpdate');
  },
  beforeDestroy() {
    console.log('main global mixin: beforeDestroy');
  },
  errorCaptured() {
    console.log('main global mixin: errorCaptured');
  },
});

// 局部混入
// {
//   mixins: [myMixin]
// }

/** ++++++++++++++ global/component plugin 自定义插件 ++++++++++++++ * */
// 1.添加全局功能，为应用和产品添加一个子功能集合
// 2.功能范围
//    1. 添加全局方法或者属性。
//    2. 添加全局资源：指令/过滤器/过渡等。
//    3. 通过全局混入来添加一些组件选项。
//    4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现
//    5. 一个API 库，同时提供上面提到的一个或多个功能

const MyPlugin = {};
// eslint-disable-next-line no-param-reassign
MyPlugin.install = function install(Vue, options = {}) {
  if (options) {
    // do some thing
  }
  // 1. 添加全局方法或属性；
  // eslint-disable-next-line no-param-reassign
  Vue.myGlobalMethod = function myGlobalMethod() {
    // 逻辑...
  };

  // 2. 添加全局资源；指令/过滤器/过渡等
  Vue.directive('my-baby', {
    bind(el, binding, vnode, oldVnode) {
      // 逻辑...
      console.log('main global plugin: directive', el, binding, vnode, oldVnode);
    },
    // ...
  });

  // 3. 全局混入；注入组件选项或者自定义方法
  Vue.mixin({
    created() {
      // 逻辑...
    },
    // ...
  });

  // 4. 添加Vue实例方法
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$myMethod = function myMethod(methodOptions) {
    // 逻辑...
    return methodOptions;
  };

  const Event = new Vue();

  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$Event = Event;
};

// 插件注册
Vue.use(MyPlugin, { someOption: true });


/** *********************** vue官方核心插件 添加逻辑****************************** */

/**
 *   ******************  路由插件，添加路由逻辑  ******************
 */
Vue.use(VueRouter);

/* Layout */


/* Router Modules */

// 路由记录组成
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'), // 异步组件，动态导入，代码分割
  },
  {
    path: '/componentcontact',
    name: 'ComponentContact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "componentContact" */ '@/views/ComponentContact.vue'), // 异步组件，动态导入，代码分割
  },
];

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
//   /**
//    * 滚动行为
//    * 功能只在支持 history.pushState浏览器使用
//    * @param to 路由对象
//    * @param from
//    * @param savedPosition  前进/后退 按钮触发的原生位置
//    */
//   scrollBehavior(to, from, savedPosition) {
//     // return 期望滚动到哪个的位置
//     // 1、页面滚动到顶部
//     return {x: 0, y: 0};
//
//     // 2、原生表现，停留在访问位置
//     // if (savedPosition) {
//     //   return savedPosition
//     // } else {
//     //   return { x: 0, y: 0 }
//     // }
//
//     // 3、滚动到锚点
//     // if(to.hash){
//     //   return {
//     //     selector: to.hash
//     //   }
//     // }
//   },
// });

/**
 * 切换原逻辑为工厂函数
 * @returns {*}
 */
export function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    /**
     * 滚动行为
     * 功能只在支持 history.pushState浏览器使用
     * @param to 路由对象
     * @param from
     * @param savedPosition  前进/后退 按钮触发的原生位置
     */
    scrollBehavior(to, from, savedPosition) {
      console.log(to, from, savedPosition);
      // return 期望滚动到哪个的位置
      // 1、页面滚动到顶部
      return { x: 0, y: 0 };

      // 2、原生表现，停留在访问位置
      // if (savedPosition) {
      //   return savedPosition
      // } else {
      //   return { x: 0, y: 0 }
      // }

      // 3、滚动到锚点
      // if(to.hash){
      //   return {
      //     selector: to.hash
      //   }
      // }
    },
  });
}

/**
 *   ******************  状态管理插件  ******************
 */
Vue.use(Vuex);

let errorLog;
{
  const state = {
    logs: [],
  };

  const mutations = {
    ADD_ERROR_LOG: (state, log) => {
      state.logs.push(log);
    },
    CLEAR_ERROR_LOG: (state) => {
      state.logs.splice(0);
    },
  };

  const actions = {
    addErrorLog({ commit }, log) {
      commit('ADD_ERROR_LOG', log);
    },
    clearErrorLog({ commit }) {
      commit('CLEAR_ERROR_LOG');
    },
  };

  errorLog = {
    namespaced: true, // 此处增加了命名空间，访问路径以模块注册名称开始。errorLog/
    state,
    mutations,
    actions,
  };
}

const getters = {
  token: (state) => state.user.token,
  errorLogs: (state) => state.errorLog.logs,
};


const myStorePlugin = (store) => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log('每次 mutation 之后调用 store.subscribe 我在哪我要做啥');
  });
};


// // export default new Vuex.Store({  // 原逻辑
// const store = new Vuex.Store({
//   // strict: true,  // 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误;保证了状态变更可以调试跟踪
//   strict: process.env.NODE_ENV !== 'production',
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {
//     errorLog,
//   },
//   getters,
//   plugins: [myPlugin],
// });

/**
 * 切换原逻辑为工厂函数
 * @returns {*}
 */
export function createStore() {
  return new Vuex.Store({
    // strict: true,  // 严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误;保证了状态变更可以调试跟踪
    strict: process.env.NODE_ENV !== 'production',
    state: {},
    mutations: {},
    actions: {},
    modules: {
      errorLog,
    },
    getters,
    plugins: [myStorePlugin],
  });
}

Vue.config.productionTip = false;

/**
 * 导出一个工厂函数，用于创建新的应用程序，router，和store实例
 */
export function createApp() {
  const router = createRouter();
  const store = createStore();
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);


  router.afterEach(() => {
    setTimeout(() => {
      // finish progress bar
      NProgress.done();
    }, 2000);
  });

  const app = new Vue({
    router,
    store,
    render: (h) => h(App), // 渲染函数；模版最终都是编译成渲染函数进行处理的，Vue.compile
  }); // .$mount('#app');
  return { app, router, store };
}

// promise.finally Polyfill
if (!Promise.prototype.finally) {
  // eslint-disable-next-line no-extend-native
  Promise.prototype.finally = function (callback) {
    const P = this.constructor;
    return this.then(
      (value) => P.resolve(callback()).then(() => value),
      (reason) => P.resolve(callback()).then(() => {
        throw reason;
      }),
    );
  };
}
