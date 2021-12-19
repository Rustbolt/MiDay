<template>


  <div class="grats">
    <textarea v-model="text" v-if="iseditible"></textarea>
    <p v-else>{{text}}</p>
    <button @click="makeReadonly">Save</button>
    
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

textarea {
  border: 2px solid orange;
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
</style>
