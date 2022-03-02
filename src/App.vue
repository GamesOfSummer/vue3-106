

<script lang="ts">


import { defineComponent, ref } from 'vue'
import { useTaskStore } from './store/index'

export default defineComponent({
  components: { },

  setup() {
   
    const tasks = useTaskStore()

    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return
      tasks.addItem({name:'22', value:'aaa'})
      itemName.value = ''
    }

    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        tasks.rawItems = []
      }
    }


    // @ts-ignore
    window.stores = { tasks }

    return {
      itemName,
      addItemToCart,
      tasks,
      clearCart,
    }
  },
})
</script>



<template>
  <Layout>
    <div>
      <div style="margin: 1rem 0;">
        <PiniaLogo />
      </div>

  

      <form @submit.prevent="addItemToCart" data-testid="add-items">
        <input type="text" v-model="itemName" />
        <button>Add</button>
      </form>

      <form >
        <ul data-testid="items">
          <li v-for="item in tasks.items" :key="item.name">
            {{ item.name }} ({{ item.value }})
           
          </li>
        </ul>

        <button >Buy</button>
        <button
          :disabled="!tasks.items.length"
          @click="clearCart"
          type="button"
          data-testid="clear"
        >Clear the cart</button>
      </form>
    </div>
  </Layout>
</template>


<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
