import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'


export const router = createRouter({
  // createRouterの引数のオブジェクトにhistoryとroutesという値を用意する
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index/taro' // path: に指定したアドレスにアクセスすると、redirect: のアドレスにリダイレクトされる
    },
    {
      path: '/index/:name', // :名前でその名前のパラメーターが設定される
      name: 'index',
      component: HelloWorld,
      props: true // 重要。これによりパラメーターがpropsに属性として渡される。
    },
    {
      path: '/jsx/:name',
      name: 'jsx',
      component: HelloJSX,
      props: true
    },
  ],
})
