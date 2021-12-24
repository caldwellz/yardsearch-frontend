import { createApp } from 'vue'
import App from './App.vue'

// Import Bootswatch theme globally
import 'bootswatch/dist/spacelab/bootstrap.min.css';

const app = createApp(App)
app.mount('#app');
