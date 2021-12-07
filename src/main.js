import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router' // routerオブジェクトをインポート

// routerをアプリケーションに組み込む
createApp(App).use(router).mount('#app')
