<template>


  <div class="todo">
    
      <input v-model="newItem" type="text">
      <button @click="addClickHandler">Add</button>
      
      <ul>
        
        <todo-item v-for="todo in todos" :todoText="todo" :key="todo"></todo-item>
        {{newTodo}}
      </ul>
  </div>
</template>

<script>

export default {
  components: { },
  name: 'gratItem',
  props: {
    msg: String, 
    todoText: String,
  },
  data: () => ({
    newItem: "Add to list...",
    shoppingList: []

  }),
  methods: {
    addClickHandler () {
      console.log('added', this.shoppingList)
      this.newItem.push(this.shoppingList);
      // this.newItem = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

ol {
  display: list-item;
}
li {
  display: list-item;
  margin: 0 10px;
}
a {
  color: #0f4e32;
}
</style>
