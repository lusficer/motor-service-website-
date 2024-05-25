<template>
  <div v-if="isHomePage()">
    <div v-if="isSection1()" class="section-wrapper">
      <div class="image" :style="backgroundImageStyle">
        <h1 class="about-header flex text-white pt-7 text-6xl text-left">
          Professional Car Repair and Mantainance
        </h1>
        <div
          class="about-content absolute font-light flex justify-content-center text-white text-base text-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
        <Button
          class="about-button flex relative align-items-center text-white"
          label="Read More"
        />
      </div>
    </div>

    <div v-if="isSection2()" class="section2-wrapper">
      <div class="image2" :style="backgroundImageStyle2">
        <p class="flex relative justify-content-center text-s">GREAT CAR SERVICE</p>
        <h1 class="about2-header flex justify-content-center text-white text-5xl text-center">
          Premium car service matched with great workmanship. Best services you can count on
        </h1>
        <Button
          class="about2-button flex relative align-items-center text-orange-400 border-orange-400 text-sm line-height-3"
          label="Get Started"
        />
      </div>
    </div>
    <div v-if="isSection3()" id="contact" class="section3-wrapper" :class="[{ dark: isDarkmode }]">
      <div
        class="image3 flex"
        :style="isDarkMode ? backgroundImageStyle3Dark : backgroundImageStyle3"
      ></div>
      <div
        class="contact-container flex flex-column"
        :style="{ backgroundColor: isDarkMode ? '#3b3a3a' : '#e5e7eb' }"
      >
        <h2 class="pb-5 text-4xl font-medium" :style="{ color: isDarkMode ? 'white' : 'initial' }">
          Book a trusted mechanic
        </h2>
        <p class="font-light text-lg" :style="{ color: isDarkMode ? 'white' : 'initial' }">
          Call us now
        </p>
        <div class="flex pb-4 align-items-center">
          <i
            class="pi pi-phone flex align-items-center pr-3 text-6xl"
            :style="{ color: isDarkMode ? 'white' : 'initial' }"
          ></i>
          <h1 class="font-medium text-6xl" :style="{ color: isDarkMode ? 'white' : 'initial' }">
            +1(12) 366 411 4999
          </h1>
        </div>
        <p class="font-light text-lg" :style="{ color: isDarkMode ? 'white' : 'initial' }">
          Or Email us
        </p>
        <div class="flex align-items-center">
          <i
            class="pi pi-envelope flex align-items-center pr-3 text-6xl"
            :style="{ color: isDarkMode ? 'white' : 'initial' }"
          ></i>
          <h1 class="font-medium text-6xl" :style="{ color: isDarkMode ? 'white' : 'initial' }">
            support@ahamay.vn
          </h1>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isAboutPage()">
    <div v-if="isSection1()" class="section-wrapper">
      <div class="image4" :style="backgroundImageStyle4">
        <div
          class="container-ubanner"
          :style="{ borderBottom: isDarkMode ? '1px solid white' : 'initial' }"
        >
          <Breadcrumb :home="home" :model="items" class=""></Breadcrumb>
          <div class="content-ubanner">
            Passionate
            <div class="pl-0 text-white pt-0">And Subtainable</div>
          </div>
          <div class="img-cut-off"></div>
        </div>
        <div class="story-content w-full grid pt-7 absolute">
          <div
            class="col pl-7 text-xl line-height-3 custom-letter-spacing"
            :style="{ color: isDarkMode ? 'white' : 'initial' }"
          >
            Experience the difference with Ahamay and discover why we're the preferred choice for
            discerning drivers who demand nothing but the best. Trust us to keep you moving forward
            with confidence, reliability, and peace of mind. When it comes to automotive care,
            accept nothing less than perfection—choose Ahamay today.
          </div>
          <div
            class="col flex flex-column-reverse bottom-0 ml-2 text-lg line-height-3 pr-6 custom-letter-spacing"
            :style="{ color: isDarkMode ? 'white' : 'initial' }"
          >
            We understand that your vehicle is an integral part of your daily life. That's why our
            team of dedicated professionals is committed to delivering excellence at every turn.
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSection2()" class="section2-wrapper-about">
      <div class="image5" :style="backgroundImageStyle5"></div>
      <div class="grid h-full mt-6">
        <div
          class="col text-5xl flex align-items-center font-medium"
          :style="{ color: isDarkMode ? 'white' : 'initial' }"
        >
          "Drive with confidence, trust Ahamay to keep you safe on the road."
        </div>
        <div class="rating-wrapper grid col pl-7">
          <div class="rating-header text-6xl w-full p-0 text-orange-500">Numbers</div>
          <div class="grid w-full">
            <div
              class="col text-2xl font-medium"
              :style="{ color: isDarkMode ? 'white' : 'initial' }"
            >
              Customer satisfaction rate
              <div class="pt-3 text-orange-500 text-5xl p-0 line-height-3 custom-letter-spacing">
                97.5%
              </div>
            </div>
            <div
              class="col text-2xl font-medium"
              :style="{ color: isDarkMode ? 'white' : 'initial' }"
            >
              Task received
              <div class="pt-3 text-orange-500 text-5xl p-0 line-height-3 custom-letter-spacing">
                100.000+
              </div>
            </div>
          </div>
          <div class="grid w-full">
            <div
              class="col text-2xl font-medium"
              :style="{ color: isDarkMode ? 'white' : 'initial' }"
            >
              Loyal customers
              <div class="pt-3 text-orange-500 text-5xl p-0 line-height-3 custom-letter-spacing">
                50,000+
              </div>
            </div>
            <div
              class="col text-2xl font-medium"
              :style="{ color: isDarkMode ? 'white' : 'initial' }"
            >
              Customer rentation rate
              <div class="pt-3 text-orange-500 text-5xl p-0 line-height-3 custom-letter-spacing">
                86.3%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSection3()" class="section3-wrapper-about">
      <div class="image6 flex" :style="backgroundImageStyle6"></div>
      <div>
        <div
          class="flex justify-content-center mt-8 text-3xl text-center"
          :style="{ color: isDarkMode ? 'white' : 'initial' }"
        >
          “We don't just fix cars; we build trust and peace of mind with every mile you drive. Join
          us on the journey towards automotive excellence!”
        </div>
        <div
          class="flex justify-content-center mt-3 text-3xl text-center"
          :style="{ color: isDarkMode ? 'white' : 'initial' }"
        >
          - AHAMAY -
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
export default {
  props: {
    types: Number,
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Button,
    Breadcrumb
  },
  data() {
    return {
      imgURL: '/bannerbg.png',
      imgURL2: '/banner2.png',
      imgURL3: '/logo.png',
      imgURL3_dark: '/logo-dark.png',
      imgURL4: '/ubanner_about.png',
      imgURL5: '/section_about-2.png',
      imgURL6: '/section_about-3.png',
      home: { label: ' Home', url: '/' },
      items: [{ label: 'About Us', url: '/about' }]
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.imgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    },
    backgroundImageStyle2() {
      return {
        backgroundImage: `url(${this.imgURL2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }
    },
    backgroundImageStyle3() {
      return {
        backgroundImage: `url(${this.imgURL3})`,
        backgroundSize: 'contain'
      }
    },
    backgroundImageStyle3Dark() {
      return {
        backgroundImage: `url(${this.imgURL3_dark})`,
        backgroundSize: 'contain'
      }
    },
    backgroundImageStyle4() {
      return {
        backgroundImage: `url(${this.imgURL4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }
    },
    backgroundImageStyle5() {
      return {
        backgroundImage: `url(${this.imgURL5})`,
        backgroundSize: 'cover'
      }
    },
    backgroundImageStyle6() {
      return {
        backgroundImage: `url(${this.imgURL6})`,
        backgroundSize: 'cover'
      }
    }
  },
  methods: {
    isSection1() {
      if (this.types === 1) return true
    },
    isSection2() {
      if (this.types === 2) return true
    },
    isSection3() {
      if (this.types === 3) return true
    },
    isHomePage() {
      return this.$route.path === '/'
    },
    isAboutPage() {
      return this.$route.path === '/about'
    }
  }
}
</script>

<style scoped>
.section-wrapper {
  position: absolute;
  width: 100%;
  height: 31.6rem;
}

.section-wrapper div {
  height: 100%;
}

.image {
  filter: blur(0.4px);
  width: 100vw;
  height: 100%;
}

.image2 {
  filter: blur(0.4px);
  width: 100%;
  height: 31.6rem;
  align-content: center;
}

.image2 p {
  top: 17%;
  letter-spacing: 2px;
  color: #ffff;
}

.image3 {
  width: 40vw;
  height: 80%;
  margin: 0rem 0rem 0 11%;
  background-repeat: no-repeat;
}

.image4 .container-ubanner {
  background: rgba(0, 0, 0, 0.613);
  padding-top: 60px;
}

.image4 .p-breadcrumb {
  background-color: transparent;
  border: transparent;
  padding-left: 7%;
  padding-top: 7%;
}

.image5 {
  width: 100%;
  height: 31.6rem;
  background-repeat: no-repeat;
}

.image6 {
  width: 100%;
  height: 31.6rem;
  background-repeat: no-repeat;
}

::v-deep(.p-breadcrumb) .p-menuitem-text {
  color: white !important;
  font-size: 1rem;
}

::v-deep(.p-breadcrumb) .p-menuitem-separator {
  color: white !important;
}

.container-ubanner div {
  display: block;
  font-size: 4.5rem;
  color: #fe7a36;
  padding-left: 7%;
}

.content-ubanner div {
  height: 69%;
}

.contact-container {
  padding: 2% 5% 2% 1%;
}

.contact .dark {
  background-color: #212121;
}

.section2-wrapper .info-wrapper {
  height: 50rem;
}

.section2-wrapper {
  width: 100vw;
  height: 100%;
}

.section-wrapper div .about-content {
  height: 38.5%;
  padding-left: 16vw !important;
  padding-right: 25vw !important;
}

.section-wrapper div .about-header {
  font-weight: 600;
  padding-left: 16vw !important;
  padding-right: 25vw !important;
}

.section2-wrapper div .about2-header {
  font-weight: 600;
  padding-left: 14vw !important;
  padding-right: 14vw !important;
}

.section-wrapper div .about-button {
  top: 9rem;
  left: 16vw;
  background-color: #fe7a36;
  border: solid 1px #fe7a36;
}

.section2-wrapper div .about2-button {
  left: 44%;
  letter-spacing: 3px;
  background-color: #ffff;
  border: solid 1px #ffff;
}

.section2-wrapper .iamge2 .about2-button .p-button-label {
  color: #fe7a36;
}

.section2-wrapper div .about2-button span {
  color: #fe7a36;
}

.section2-wrapper-about {
  width: 100vw;
  height: 100%;
  padding: 4%;
}

.section3-wrapper {
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
}

.section3-wrapper-about {
  width: 100vw;
  height: 100%;
  padding: 4%;
}

.text-6xl {
  font-size: 3rem !important;
}

.text-5xl {
  font-size: 2.5rem !important;
  padding-top: 90px;
  padding-bottom: 4rem;
}

.pb-8 {
  padding-bottom: 5vw !important;
}

.img-cut-off {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffff;
  height: 7% !important;
  width: 50%;
}

.img-cut-off::before {
  content: '';
  position: absolute;
  border-width: 35.5px;
  border-style: solid;
  border-color: transparent transparent #ffff transparent;
  bottom: 0px;
  left: -35px;
}

.rating-header {
  height: 10%;
}

/* .img-cut-off::after {
  content: '';
  background-color: #ffff;
  width: 80%;
  height: 20px;
} */

.custom-letter-spacing {
  letter-spacing: 2px;
}

* {
  color: black;
}

@media (min-width: 2000px) {
  .section2-wrapper div .about2-button {
    left: 47%;
    letter-spacing: 3px;
    background-color: #ffff;
    border: solid 1px #ffff;
  }
}
</style>
