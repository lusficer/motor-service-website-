<template>
  <div :class="['section2-wrapper', { dark: isDarkMode }]">
    <div class="image2" :style="backgroundImageStyle2">
      <p class="flex relative justify-content-center text-xs">GREAT CAR SERVICE</p>
      <h1 class="about2-header flex justify-content-center text-white text-5xl text-center">
        Premium car service matched with great workmanship. Best services you can count on
      </h1>
    </div>
    <div class="services-content" :class="[{ dark: isDarkMode }]">
      <Breadcrumb
        :home="home"
        :model="items"
        class="pl-7"
        :class="{ dark: isDarkMode }"
      ></Breadcrumb>
      <div>
        <h1
          class="content-header flex justify-content-center text-blue-700 text-5xl"
          :class="[{ dark: isDarkMode }]"
        >
          All SERVICES
        </h1>
        <DataView :value="filteredServices">
          <template #header>
            <Dropdown
              :options="filterOptions"
              v-model="selectedFilter"
              optionLabel="label"
              placeholder="All Services"
            />
          </template>
          <template #list="slotProps">
            <div v-for="(item, index) in slotProps.items" :key="index">
              <div
                class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3 border-1 p-7"
                :style="{ backgroundColor: isDarkMode ? '#212121' : 'initial' }"
              >
                <div class="md:w-12rem relative">
                  <img
                    class="block xl:block mx-auto border-round w-full"
                    :style="{ border: isDarkMode ? '1px solid white' : 'initial' }"
                    :src="item.image"
                    :alt="item.name"
                  />
                </div>
                <div
                  class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"
                >
                  <div
                    class="flex flex-row md:flex-column justify-content-between align-items-start gap-2"
                  >
                    <div>
                      <div
                        class="text-5xl font-medium"
                        :style="{ color: isDarkMode ? 'white' : 'initial' }"
                      >
                        {{ item.label }}
                      </div>
                      <span
                        class="font-medium text-secondary text-base"
                        :style="{ color: isDarkMode ? 'white' : 'initial' }"
                        >{{ item.description }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-5">
                  <Button
                    @click="showDialog(item)"
                    class="w-full h-3rem text-xl font-semibold bg-white border-round-xs border-1"
                    :style="{ color: isDarkMode ? 'black' : '#303F9F' }"
                    >Make Order</Button
                  >
                  <Button
                    class="text-xl w-full h-3rem font-semibold text-white"
                    :style="{
                      border: isDarkMode ? '1px solid white' : 'initial',
                      backgroundColor: isDarkMode ? '#6E6E6D' : '#FE7A36'
                    }"
                    @click="navigateRoute"
                    >Set Appointment</Button
                  >
                </div>
              </div>
            </div>
            <Dialog
              v-model:visible="visible"
              modal
              class="custom-dialog custom-placeholder"
              :style="{ width: '35em', border: '10px' }"
            >
              <template #header>
                <div class="w-full flex justify-content-center custom-border">
                  <h2>{{ selectedService.label }}</h2>
                </div>
              </template>
              <div
                v-if="selectedService"
                class="flex flex-wrap flex-column align-items-center justify-content-center w-full"
              >
                <Dropdown
                  v-model="selectedBrand"
                  :options="selectedService.prices"
                  optionLabel="brand"
                  placeholder="Select a brand"
                  class="flex w-9"
                />
                <div
                  v-if="selectedBrand"
                  class="flex mt-6 surface-300 w-6 h-4rem text-xl align-items-center justify-content-center"
                >
                  <p class="font-semibold">Price: {{ selectedBrand.price }}</p>
                </div>
              </div>
              <template #footer
                ><div class="flex w-full justify-content-end justify-content-center gap-7">
                  <Button
                    type="button"
                    label="Buy Now"
                    severity="secondary"
                    class="bg-white text-blue-500 border-orange-500 w-3"
                    @click="submit"
                  ></Button>
                  <button class="CartBtn" @click="addToCart()">
                    <span class="IconContainer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                        fill="rgb(17, 17, 17)"
                        class="cart"
                      >
                        <path
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                      </svg>
                    </span>
                    <p class="text">Add to Cart</p>
                  </button>
                </div>
              </template>
            </Dialog>
          </template>
        </DataView>
      </div>
    </div>
    <stripe-checkout
      ref="checkoutRef"
      mode="subscription"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successUrl"
      :cancel-url="cancelUrl"
    ></stripe-checkout>
  </div>
  <Toast ref="toast" :group="false" position="top-right" />
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import DataView from 'primevue/dataview'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import servicesData from '@/services/data'
import Toast from 'primevue/toast'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
export default {
  components: {
    Breadcrumb,
    DataView,
    Dropdown,
    Dialog,
    Button,
    StripeCheckout,
    Toast
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      imgURL2: 'banner2.png',
      home: { icon: 'pi pi-home', url: '/' },
      items: [{ label: 'Services', url: '/#' }],
      services: [],
      filterOptions: [
        { label: 'All Service', value: 'all' },
        { label: 'Car Service', value: 'car' },
        { label: 'Tire Service', value: 'tire' }
      ],
      selectedFilter: '',
      visible: false,
      selectedService: null,
      selectedBrand: null,
      lineItems: [],
      publishableKey:
        'pk_test_51PIpED01HTEsX8gXhs9HBmHQl16bAZYyvArNfoLvILs5DO7IoIC6uqG7uqiHMkjCwu5EZF5VYu9JSvkBJoALW0kw00qNCZMn76',
      successUrl: 'https://localhost:5173',
      cancelUrl: 'http://localhost:5173/services'
    }
  },
  mounted() {
    this.services = servicesData
  },
  computed: {
    backgroundImageStyle2() {
      return {
        backgroundImage: `url(${this.imgURL2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }
    },
    filteredServices() {
      if (!this.selectedFilter || Object.keys(this.selectedFilter).length === 0) {
        return this.services
      } else {
        return this.services.filter((service) => {
          if (this.selectedFilter.value === 'all') {
            return this.services
          } else {
            return service.category === this.selectedFilter.value
          }
        })
      }
    }
  },
  methods: {
    showDialog(service) {
      this.selectedService = service
      this.selectedBrand = null
      this.visible = true
    },
    async addToCart() {
      if (!this.selectedBrand) {
        console.error('No brand selected')
        this.$refs.toast.add({
          severity: 'warn',
          summary: 'Please select a brand',
          life: 1200
        })
        return
      }

      const productToAdd = {
        ...this.selectedService,
        selectedBrand: this.selectedBrand
      }

      try {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || []

        const exists = cartItems.some(
          (item) =>
            item.id === productToAdd.id &&
            item.selectedBrand.brand === productToAdd.selectedBrand.brand
        )

        if (exists) {
          this.$refs.toast.add({
            severity: 'info',
            summary: 'Item already in cart',
            life: 1200
          })
        } else {
          cartItems.push(productToAdd)
          localStorage.setItem('cart', JSON.stringify(cartItems))
          this.$refs.toast.add({
            severity: 'success',
            summary: 'Item added to cart',
            life: 1200
          })
        }

        this.visible = false
        console.log('Cart items:', cartItems)
      } catch (error) {
        console.error('Error adding to cart:', error)
        this.$refs.toast.add({
          severity: 'error',
          summary: 'Error adding to cart',
          life: 1200
        })
      }
    },
    navigateRoute() {
      window.location.href = '/appointment'
    },
    async submit() {
      if (!this.selectedBrand) {
        console.error('No brand selected')
        this.$refs.toast.add({
          severity: 'warn',
          summary: 'Please select a brand',
          life: 1200
        })
        return
      }
      this.lineItems = [
        {
          price: this.selectedBrand.priceId,
          quantity: 1
        }
      ]
      console.log(this.$refs.checkoutRef)
      try {
        const result = await this.$refs.checkoutRef.redirectToCheckout({
          lineItems: this.lineItems,
          mode: 'payment',
          successUrl: this.successUrl,
          cancelUrl: this.cancelUrl
        })
        console.log(result)

        if (result.error) {
          console.error('Error during checkout:', result.error)
        }
      } catch (error) {
        console.log('Error during checkout:', error)
      }
    }
  }
}
</script>

<style>
.section2-wrapper.dark {
  background-color: #212121;
  color: #ffffff;
}

.image2 {
  height: 19rem;
}

.image2 .p-breadcrumb {
  background-color: transparent;
  border: 0px transparent;
}

.p-breadcrumb {
  border: none;
}

.p-breadcrumb.dark {
  background-color: #212121;
}

.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:hover {
  background-color: #fe7a36;
}

.p-breadcrumb.dark .p-breadcrumb-list .p-menuitem-icon {
  color: white !important;
}

.p-breadcrumb.dark .p-breadcrumb-list li .p-menuitem-text {
  color: white !important;
}

.p-breadcrumb.dark .p-breadcrumb-list li.p-menuitem-separator {
  color: white !important;
}
.p-dataview {
  margin: 0 10rem 0 10rem;
}

.p-dataview-header {
  background-color: #fe7a36;
  margin-bottom: 3rem;
  border: none;
}

.services-content.dark .p-dataview-header {
  background-color: #6e6e6d !important;
}
.image2 p {
  top: 50px;
  letter-spacing: 2px;
  color: #ffff;
}

.section2-wrapper .info-wrapper {
  height: 27rem;
}

.section2-wrapper {
  width: 100vw;
}
.section2-wrapper div .about2-header {
  font-weight: 600;
  padding-left: 16rem !important;
  padding-right: 14rem !important;
  padding-top: 4rem;
}
.section2-wrapper div .about2-button {
  letter-spacing: 3px;
  top: 3rem;
  left: 42rem;
  background-color: #ffff;
  border: solid 1px #ffff;
}

.section2-wrapper .image2 .about2-button .p-button-label {
  color: #fe7a36;
}

.section2-wrapper div .about2-button span {
  color: #fe7a36;
}

.CartBtn {
  width: 25%;
  border-radius: 4px;
  border: none;
  background-color: #fe7a36;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.5s;
  overflow: hidden;
  position: relative;
}

.IconContainer {
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: 0.5s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(17, 17, 17);
  z-index: 1;
  transition-duration: 0.5s;
  font-size: 1.04em;
  font-weight: 600;
}

.CartBtn:hover .IconContainer {
  transform: translateX(58px);
  border-radius: 40px;
  transition-duration: 0.5s;
}

.CartBtn:hover .text {
  transform: translate(10px, 0px);
  transition-duration: 0.5s;
}

.CartBtn:active {
  transform: scale(0.95);
  transition-duration: 0.5s;
}

.custom-placeholder .p-dropdown-label:not(.p-placeholder-visible) {
  display: block;
  color: #303f9f;
  font-weight: bold;
  visibility: visible;
}

.custom-dialog .p-dialog-header {
  border-top-left-radius: 30px !important;
  border-top-right-radius: 30px !important;
}

.custom-dialog .p-dialog-footer {
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
}

.content-header.dark {
  color: white !important;
}

.custom-dialog {
  box-shadow: none;
}
</style>
