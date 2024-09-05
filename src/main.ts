import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import ProjectsCards from './components/ProjectsCards.vue';
import CardTags from './components/CardTags.vue';


const app = createApp(App);
                                                
app.component('ProjectsCards', ProjectsCards); // すみません, aqui está o 
app.component('CardTags', CardTags);          //  Componente global :-)

createApp(App).use(router).mount('#app')
