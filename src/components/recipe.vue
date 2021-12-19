
<template>

   <!-- turn to component to use on other pages -->
  <div class="recipe">
    {{selectedPage}}
    <slot name="Breakfast" v-if="selectedPage === 'Breakfast'"></slot>
    <slot name="Lunch" v-if="selectedPage === 'Lunch'"></slot>
    <slot name="Dinner" v-if="selectedPage === 'Dinner'"></slot>
    <slot name="Baking" v-if="selectedPage === 'Baking'"></slot>
    <!-- <div v-if="selectPage === 'page2'">page 22f fjfjf</div> -->
    <div class="btn-group">
      <ul>
      <li><button @click="pageClickhandler('Breakfast')"><a class="text-orientation">Breakfast</a></button></li>
      <li><button @click="pageClickhandler('Lunch')"><a class="text-orientation">Lunch</a></button></li>
      <li><button @click="pageClickhandler('Dinner')"><a class="text-orientation">Dinner</a></button></li>
      <li><button @click="pageClickhandler('Baking')"><a class="text-orientation">Baking</a></button></li>
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  name: 'recipe',
  props: {
    title: String, 

  },
  data: () => ({
      selectedPage: ''

  }),

  methods: {
    pageClickhandler (pageclicked) {
      this.selectedPage= pageclicked

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.text-orientation {
  writing-mode: vertical-rl;
  text-orientation:sideways;
  
  
}

.btn-group button {
  margin: 0px 0px 0px 200px;
  padding: 10px;
  
  
  
  
}

ul {
  
  list-style-type: none;
  
}

</style>
