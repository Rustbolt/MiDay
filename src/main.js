import Vue from 'vue'
import App from './App.vue'
import ToDoItem from './components/todo'
import Gratitude from './components/gratitude'
import editibleText from './components/editibleText'
import makeTodaygreat from './components/makeTodaygreat'
import widget from './components/widget'
import ShoppingList from './components/shoppingList'
import dailyHabits from './components/habits'
import recipe from './components/habits'

Vue.config.productionTip = false

import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)


Vue.component("todo-item", ToDoItem);
Vue.component("gratitude-diary", Gratitude);
Vue.component("editible-text",  editibleText);
Vue.component("makeToday-great", makeTodaygreat);
Vue.component("widget", widget);
Vue.component("daily-habit", dailyHabits);
Vue.component("shopping-list", ShoppingList);
Vue.component("recipe", recipe);


new Vue({
  render: h => h(App),
}).$mount('#app')
