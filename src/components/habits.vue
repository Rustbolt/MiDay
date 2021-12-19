<template>


  <div class="habits">
    <ul>  
    <!-- habit.completed = !habit.completed; -->
      <li v-for="(habit) in habitList" :key="habit">{{habit.text}}<input type="checkbox" name="habit" id="habit" @click="habit.completed = !habit.completed;"  transition="fade" v-model="checked"></li>
      <label for="checkbox">{{ checked }}</label>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'newHabit',
  props: {
    msg: String,
    todoText: String,
  },
  data: () => ({
    newHabit: "",
    habitList: [ {text: '10 minutes spanish reading', completed: false, dateClicked:''},
                    {text: 'Meditate', completed: false, dateClicked:''},
                    {text: 'Exercise', completed: false, dateClicked:''},
                    
                    ],
    // todayDate: new Date().toISOString(),

    checked: ''
  
    
  }),

// tracking habit completed / habits to complete  
  computed: {

    habitDone() {
      return this.habitList.filter(habit => habit.completed);
      

    },

    habitTodo() {
      return this.habitList.filter(habit => 
      !habit.completed);
    }
  },

  methods: {
  
    addTime(i) {
      var date = Date()
      this.habitList[i].dateClicked = date;
      this.habitList[i].completed = true;
      // console.log(habitList)

    },

    makeReadonly (){
      this.iseditible = false
    },

    makeEditible (){
      this.iseditible = true
    },
    habitDate () {
      // return this.habitList.filter(dateClicked => todayDate);
    },
  
    addClickHandler () {
      console.log('added', this.habitList)
      const newHabit = {
        text: this.newHabit,
        completed: false
      };
      //if input field not empty...
      if (this.newItem.length){
        // push to habit list 
          this.habitList.push(newHabit);
          //reset input field 
          this.newItem = '';
      }
    }
}
}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .editibleText{
  background: #e1dbd6;
  border-radius: 20px;
  border-color:indianred;
  padding: .5em;
} */

.todo {
  background-color: #236286;
  padding: .5em;
  
}
h3 {
  background-color: #86235d;
  margin: 40px 0 0;
}
ul {
  
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0f4e32;
}

input {
  background: transparent;
  border: none;
  border-bottom: 1px solid antiquewhite ;
  color: antiquewhite;
}
</style>