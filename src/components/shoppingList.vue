<template>


  <div class="shoppingList">
    <h2>Shopping List</h2>
      <input v-model="newItem" type="text" placeholder="Add to list...">
      <button @click="addClickHandler">Add</button>
      
      <ul>
        <!-- // double check the : s after could be a problem. -->
        <li  v-for="(item, index) in ShoppingList" :itemText="item" :key="item" 
        @click="item.completed = !item.completed" transition="fade">
        <button class="item_delete" @click.stop="removeItem(index)">
              &times; 
        </button>
          <div class="item_label" :class="{ items__completed: item.completed }">{{item.text}}</div>
        </li>
       
      </ul>
      <p class="list__empty" v-show="!ShoppingList.length">
     Nothing to buy... yet!</p><a class="list__clear" href="#" @click.prevent="clearCompleted" v-show="itemsDone.length">Clear bought items</a>
  </div>
</template>

<script>

export default {
  components: { },
  name: 'newItem',
  props: {
    msg: String, 
    todoText: String,
  },
  data: () => ({
    newItem: "",
    ShoppingList: [ {text: 'Eggs', completed: true, editing: false},
                   {text: 'Milk', completed: false, editing:false},
                   
                   ]

  }),
// tracking items bought / items needed to buy 
  computed: {

    itemsDone() {
      return this.ShoppingList.filter(item => item.completed);
    },

    itemsTodo() {
      return this.ShoppingList.filter(item => 
      !item.completed);
    }
  },

  methods: {

    addClickHandler () {
      console.log('added', this.ShoppingList)
      const newEntry = {
        text: this.newItem,
        completed: false
      };
      //if input field not empty...
      if (this.newItem.length){
        // push to shopping list 
          this.ShoppingList.push(newEntry);
          //reset input field 
          this.newItem = '';
      }
    },

    removeItem (index){
    // remove item
      this.ShoppingList.splice(index, 1);
    },

    clearCompleted() {
      // only keep items not completed (see computed data)
      this.ShoppingList = this.itemsTodo;
    }
      
    
 
  
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.items_completed {

 
  text-decoration: line-through;
  color: rgb(32, 148, 148);
}

.todo {
  background-color: #236286;
  padding: .5em;
  
}
h3 {
  background-color: #86235d;
  margin: 40px 0 0;
}
ul {
  
 
  padding: 0;
}

li {
  
  list-style: none;
  margin:1px;
  
}
a {
  color: #0f4e32;
}
</style>
