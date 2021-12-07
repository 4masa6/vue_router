// まずはimport文でVueRouterから必要な関数などを用意する。
// ルーティングで割り当てるコンポーネント類も用意しておく。
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/HelloJSX.jsx'


// export 値 で、そのスクリプトファイルをimportした時に指定の値が取り出せるようになる。
// routerオブジェクトは、スクリプトを作成後、Vue3のアプリケーションに組み込む必要がある。
// このため、exportを使ってrouterオブジェクトが外部から利用できるようにする。
export const router = createRouter({
  // createRouterの引数のオブジェクトにhistoryとroutesという値を用意する
  history: createWebHistory(),
  routes: [
    {
      path: '/',             // 割り当てるパス
      name: 'index',         // 名前
      component: HelloWorld, // 割り当てるコンポーネント
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: HelloJSX,
    },
  ],
})
