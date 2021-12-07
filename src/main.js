import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router' // routerオブジェクトをインポート

// createApp(App).mount('#app')
var app = createApp(App)
app.use(router)  // routerをアプリケーションに組み込む
app.mount('#app')
