<template>


  <div class="editibleText">
    <input v-model="text" v-if="iseditible" @keyup.enter="makeReadonly"/>
    <p v-else>{{text}}</p>
    <button @click="makeEditible" v-if="!iseditible">Edit</button>
    
  </div>
</template>

<script>
export default {
  name: 'gratItem',
  props: {
    msg: String,
    todoText: String,
  },
  data: () => ({
    text: "",
    iseditible: true,
    
  }),

  methods: {

    makeReadonly (){
      this.iseditible = false
    },

    makeEditible (){
      this.iseditible = true
    },

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

input {
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border:1px solid #e2a140;
  border-radius: 1em;
  
  
}

input:focus {
  box-shadow: 0 0 5px rgb(238, 175, 81);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgb(238, 175, 81);
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
