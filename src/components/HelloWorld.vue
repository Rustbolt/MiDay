
<template>
  
  <div class="dashboard">
    people
  <pre> 
{{people}}
</pre>
    
   <div class="widgetbar"></div> 
  <widget title="Gratitude Diary" class="gratitudeDiary">
  
     <template v-slot:page1> 
      <gratitude-diary></gratitude-diary>
      <p>This is how i'll make today great</p>
      <make-todaygreat class="makeTodaygreat"></make-todaygreat>
      <p>Positive Affirmation</p>
      <editible-text></editible-text>
      
      

    </template>

    <template v-slot:page2>
      <ul>
          <p>My good deed today</p>
          <li><editible-text></editible-text></li>
          <p>How I'll improve</p>
          <li><editible-text></editible-text></li>
        </ul>
        <ol>
          
          <p>Great things I experienced today</p>
          <li><editible-text v-for="i in 3" :key="i"></editible-text></li>
        </ol>
    </template>
  </widget>

  <div class="shoppingwidget">
    <div class="widgetbar"></div> 
    <widget class="shoppingList">
      
        <template v-slot:page1>
          <shopping-list></shopping-list>
        </template>
        <template v-slot:page2>
          <shopping-list></shopping-list>
        </template>
    </widget>
  </div>

  <div class="habit-widget">
  <div class="widgetbar"></div>
  <widget class="daily-habits" title="Daily Habits">
    
    <template v-slot:page1>
      
      
      <dailyHabits></dailyHabits>
    </template>
  </widget>
  </div>

  <div class="widgetbar"></div>
  <widget title="Recipes" class="recipes">
    <template v-slot:page1>
      <recipe></recipe>
      <p>page 1</p>

    </template>
    <template v-slot:Breakfast >
      <recipe></recipe>
      <p>Breakfast here</p>

    </template>
    <template v-slot: Dinner >
      <recipe></recipe>
      <p>Dinner here</p>

    </template>
   
   
  </widget>
  
    <!-- <ul>
      <h1>Gratitude Diary</h1>
      <gratitude-diary></gratitude-diary>
      <p>I'm grateful for...</p>
       {{newGratitude}}
     <ol>
        <input v-model="newGratitude" type="text" value="click" v-on:keyup.enter="onEnter"/>
        <input v-model="newGratitude" type="text" v-on:keyup.enter="onEnter"/>
        <input v-model="newGratitude" type="text" v-on:keyup.enter="onEnter"/>
        
      </ol>
      <li>
      <grat-item v-for="grat in grats" :gratText="GratitudeDiary" :key="grat"></grat-item>
      </li>
    </ul> -->

  </div>
</template> 

<script>

import {db} from '../firebase.js'
import makeTodaygreat from './makeTodaygreat.vue';
import ShoppingList from './shoppingList.vue';
import Widget from './widget.vue';
import dailyHabits from './habits.vue';
import recipe from './recipe.vue';
export default {
  components: { makeTodaygreat, Widget, ShoppingList, dailyHabits, recipe },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    newTodo: 'Anton',
    todos: ['Buy cheese', 'Collect kids', 'Kill kids'],
    newGratitude: '',
    gratlist: [],
  }),
    firestore: {
    people: db.collection('people'),
  },
  methods: {

    onEnter: function(event) {
      
      console.log('added gratitude', this.newGratitude);
      this.gratlist.push(this.newGratitude);
      this.newGratitude = '';
      event.preventDefault();
      event.readOnly();
    },

    // addClickHandler () {
    //   console.log('added', this.newTodo)
    //   this.todos.push(this.newTodo);
    //   this.newTodo = '';
    // },

  //   addEventListener () {
  //     // check if Enter key has been hit
  //     if (event.keyCode == 13) {
  //       event.preventDefault();

  //     }
  //     console.log('added', this.newGratitude);
  //     this.gratlist.push(this.newGratitude);
  //     this.newGratitude = '';

  //   }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





 .shoppingwidget, .habit-widget{
  float:right;
  
}

/* changes habit bar to blue */
.habit-widget .widgetbar {
  background:lightblue;
}



.widgetbar {
  
  background:orange;
  padding:3px 4px 20px;
  height:35px;
  width: 243px;
  border-top-right-radius:20px; 
  border-top-left-radius: 20px;

}

.gratitudeDiary {

  
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  background: rgb(255, 255, 255);
}

.daily-habits {
  background-color: white;
  
}

.recipes {
  margin: 10px;
  
  background:white;
}

/* Will align all widgets  */
/* .dashboard {
  display:flex;
} */


.shoppingList {
  background: white;
  float: right;
  margin: 20px;
}

editible-text {
  background-color: rgb(75, 49, 49);
  
}
/* 
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
