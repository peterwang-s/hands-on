import { createApp } from './main';

const { app, router, store } = createApp();

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
// eslint-disable-next-line no-underscore-dangle
if (window.__INITIAL_STATE__) {
  // eslint-disable-next-line no-underscore-dangle
  store.replaceState(window.__INITIAL_STATE__);
}

// 使用了异步组件以后，路由器必须要提前解析路由配置中的异步组件，
// 才能正确地调用组件中可能存在的路由钩子。
router.onReady(() => {
  app.$mount('#app');
});
