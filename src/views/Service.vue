<template>
  <div>
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
                    <Button
                      type="button"
                      label="Add to cart"
                      class="bg-orange-500 text-white border-orange-500 w-3"
                      @click="addToCart"
                    ></Button>
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
  </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import DataView from 'primevue/dataview'
import Dropdown from 'primevue/dropdown'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import servicesData from '@/services/data'
import EventBus from '@/utils/Eventbus'
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
      imgURL2: '/banner2.png',
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
      successUrl: 'http://localhost:5173/',
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
      console.log('Selected filter:', this.selectedFilter)

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
    addToCart() {
      if (this.selectedBrand) {
        const productToAdd = {
          ...this.selectedService,
          selectedBrand: this.selectedBrand
        }
        EventBus.emit('add-to-cart', productToAdd)
        this.visible = false
        console.log(productToAdd)
      }
    },
    navigateRoute() {
      this.$router.push('/appointment')
      window.scrollTo(0, 0)
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
      try {
        const result = await this.$refs.checkoutRef.redirectToCheckout({
          lineItems: this.lineItems,
          mode: 'payment',
          successUrl: this.successUrl,
          cancelUrl: this.cancelUrl
        })
        alert(result)

        if (result.error) {
          console.error('Error during checkout:', result.error)
        }
      } catch (error) {
        console.error('Error during checkout:', error)
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
