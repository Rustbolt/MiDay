<template>


  <div class="grats">
    
  <p>I'm grateful for...</p>
  <!-- <input @keyup.enter="addClickHandler" type="text" v-model="newGrat" >
  <button @click="addClickHandler">Enter</button> --> 
  <ul>
    <li v-for="grat in gratsList" :key="grat">{{grat}}</li>
    
  </ul>
  <ul>
    <li><editible-text v-for="i in 3" :key="i" class="textbox"></editible-text></li>
  </ul>
  </div>
</template>

<script>
// import widget from './widget.vue'
import editibleText from './editibleText.vue';
export default {
  components: { editibleText },
  name: 'gratItem',
  props: {
    msg: String, 
    todoText: String,
  },
  data: () => ({
    newGrat: "I'm grateful for...",
    gratsList: []

  }),
  methods: {
    addClickHandler () {
      console.log('added', this.gratslist)
      this.gratsList.push(this.newGrat);
      this.newGrat = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 
.textbox {
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border:1px solid #DDDDDD;
  border-radius: 1em;
}

.textbox:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
} */


textbox {
  background-color: hotpink;
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
  
  list-style-type: none;
  padding: 0;
  
}

ol {
  display: list-item;
}
li {
  display: list-item;
  margin: 0 10px;
  background-color: grey;
}
a {
  color: #0f4e32;
}
</style>
