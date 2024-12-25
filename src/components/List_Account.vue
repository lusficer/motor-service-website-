<template>
  <div class="container-wrapper">
    <div id="container_list">
      <div
        class="element item_1"
        v-on:click="setActiveElement('item_1')"
        v-bind:class="{ active: activeElement === 'item_1' }"
        :style="{ color: isDarkMode ? 'white' : 'initial' }"
      >
        Account details
      </div>
      <!-- <div
        class="element item_2"
        v-on:click="setActiveElement('item_2')"
        v-bind:class="{ active: activeElement === 'item_2' }"
        :style="{ color: isDarkMode ? 'white' : 'initial' }"
      >
        My Orders
      </div> -->
      <div
        class="element item_3"
        v-on:click="setActiveElement('item_3')"
        v-bind:class="{ active: activeElement === 'item_3' }"
        :style="{ color: isDarkMode ? 'white' : 'initial' }"
      >
        Logout
      </div>
    </div>

    <div class="info" v-if="displayAccount">
      <Account :class="[{ dark: isDarkMode }]" :userData="userData"></Account>
    </div>

    <!-- <div class="info" v-if="displayOrders">
      <DataTable :value="products">
        <template #header>
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Products</span>
          </div>
        </template>
        <Column field="label" header="Name"></Column>
        <Column field="image" header="Image">
          <template #body="slotProps">
            <img :src="slotProps.data.image" alt="Product Image" width="50" />
          </template>
        </Column>
        <Column field="category" header="Category"></Column>
        <Column field="rating" header="Reviews">
          <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
          </template>
        </Column>
        <Column field="selectedBrand.brand" header="Brand"></Column>
        <Column field="selectedBrand.price" header="Price"></Column>
        <template #footer>
          <div class="flex justify-content-between align-items-center">
            In total there are {{ products ? products.length : 0 }} products.
            <Button class="" @click="editBtn()">Checkout </Button>
          </div>
        </template>
      </DataTable>
    </div> -->

    <div class="info" v-if="displayLogout">
      <p style="color: black">LOGING OUT...</p>
    </div>
  </div>
</template>

<script>
import Account from './Account.vue'
import Button from 'primevue/button'
import Breadcrumb from 'primevue/breadcrumb'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Rating from 'primevue/rating'
import servicesData from '../services/data'
import EventBus from '@/utils/Eventbus'
import axios from 'axios'
import StripeCheckout from 'vue-stripe-checkout'
export default {
  components: {
    Account,
    Breadcrumb,
    DataTable,
    Column,
    Rating,
    Button,
    StripeCheckout
  },
  data() {
    return {
      displayAccount: true,
      displayOrders: false,
      displayLogout: false,
      activeElement: 'item_1',
      products: servicesData,
      publishableKey:
        'pk_test_51PIpED01HTEsX8gXhs9HBmHQl16bAZYyvArNfoLvILs5DO7IoIC6uqG7uqiHMkjCwu5EZF5VYu9JSvkBJoALW0kw00qNCZMn76',
      session: {}
    }
  },
  props: {
    isDarkMode: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    setActiveElement(element) {
      this.activeElement = element

      this.displayAccount = false
      this.displayOrders = false
      this.displayLogout = false

      if (element === 'item_1') {
        this.displayAccount = true
      } else if (element === 'item_2') {
        this.displayOrders = true
      } else if (element === 'item_3') {
        this.displayLogout = true
      }
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    },
    editBtn() {
      console.log(this.products)
    },
    addProductToCart(product) {
      this.products.push(product)
    },
    async checkout() {
      try {
        const amount = 1000 // Amount in cents
        const response = await axios.post('https://motorss.vercel.app:3001/create-payment-intent', {
          amount
        })
        this.session = { id: response.data }
        this.$refs.checkoutRef.redirectToCheckout()
      } catch (error) {
        console.error('Error:', error)
      }
    },
    onSuccess() {
      console.log('Payment successful!')
    },
    onError() {
      console.error('Payment failed!')
    }
  },
  created() {
    EventBus.on('add-to-cart', this.addProductToCart)
  },
  beforeDestroy() {
    EventBus.off('add-to-cart', this.addProductToCart)
  }
}
</script>

<style scoped>
.container-wrapper {
  display: flex;
  padding-top: 50px;
  width: 1440px;
  padding-left: 40px;
}

#container_list {
  flex: 1;
  padding-right: 20px;
}
.active {
  background: linear-gradient(
    to right,
    rgba(189, 80, 19, 1) 3%,
    rgba(254, 106, 55, 1) 3%,
    rgba(254, 156, 106, 1) 37%,
    rgba(254, 181, 143, 1) 60%,
    rgba(255, 243, 237, 1) 84%,
    rgba(255, 255, 255, 1) 96%
  );
  color: white !important;
}

.info {
  flex: 2;
}

.element {
  padding: 20px;
  padding-left: 40px;
  font-size: 30px;
  font-weight: 600;
  width: 384px;
  color: black;
}

.element:hover {
  color: red;
}
</style>
