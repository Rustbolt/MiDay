<template>


<div class="widget">
  {{selectPage}}
  <h3>{{title}}</h3>
  <slot name="page1" v-if="selectPage === 'page1'"></slot>
  <slot name="page2" v-if="selectPage === 'page2'"></slot>
  <!-- <div v-if="selectPage === 'page2'">page 22f fjfjf</div> -->
  <button @click="pageClickhandler('page1')"></button>
  <button @click="pageClickhandler('page2')"></button>
  
  
  </div>
</template>

<script>
export default {
  name: 'widget',
  props: {
    title: String, 

  },
  data: () => ({
      selectPage: 'page1'

  }),

  methods: {
    pageClickhandler (pageclicked) {
      this.selectPage= pageclicked

    }

  
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.widget {
  /* flex: auto; */
  padding:6px;
  background-color: rgb(185, 180, 180);
  /* border-radius: 4px; */
  color: #4d4343;
  max-width: 15em;
  
}

button {
  border: 2px solid orange;
  border-radius: 50%;
  padding: 5px;
  
}

</style>
