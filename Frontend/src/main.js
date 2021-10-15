import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')

$(".dropdown-menu li a").click(function(){
  $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
});

