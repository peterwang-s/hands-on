import { createApp } from './main';

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
// 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
// 以便服务器能够等待所有的内容在渲染前，
// 就已经准备就绪。
export default (ctx) => new Promise((resolve, reject) => {
  const context = ctx;
  // const beginTime = Date.now();
  const { app, router, store } = createApp();

  // 服务器端路由匹配 (server-side route matching) 和数据预取逻辑 (data pre-fetching logic)
  // set router's location 设置服务器端 router 的位置
  router.push(context.url);

  // eslint-disable-next-line consistent-return
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents.length) {
      return reject(new Error({ code: 404 }));
    }

    // 对所有匹配的路由组件调用 `asyncData()`
    Promise.all(matchedComponents.map((Component) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute,
        });
      }
      return {};
    })).then(() => {
      // 在所有预取钩子(preFetch hook) resolve 后，
      // 我们的 store 现在已经填充入渲染应用程序所需的状态。
      // 当我们将状态附加到上下文，
      // 并且 `template` 选项用于 renderer 时，
      // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
      context.state = store.state;

      resolve(app);
    }).catch(reject);

    //
    // router.onReady(() => {
    //   const matchedComponents = router.getMatchedComponents()
    //   // 匹配不到的路由，执行 reject 函数，并返回 404
    //   if (!matchedComponents.length) {
    //     return reject({code: 404})
    //   }
    //
    //   // This `rendered` hook is called when the app has finished rendering
    //   context.rendered = () => {
    //     // After the app is rendered, our store is now
    //     // filled with the state from our components.
    //     // When we attach the state to the context, and the `template` option
    //     // is used for the renderer, the state will automatically be
    //     // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
    //     context.state = store.state;
    //     /* eslint-disable-next-line */
    //     console.log(`[DATE] data pre-fetch: ${Date.now() - beginTime}ms url=${context.url}`);
    //   };
    //
    //   // Promise 应该 resolve 应用程序实例，以便它可以渲染
    //   resolve(app);
  }, reject);
});
