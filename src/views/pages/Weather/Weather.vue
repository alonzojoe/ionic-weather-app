<template>
  <ion-page id="main-content">
    <ion-content class="ion-padding">
      <ion-refresher slot="fixed" @ionRefresh="refresher($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div class="grid mb-0">
        <div class="col-8">
          <div class="text-end text-xl px-3 pt-3 border-round-sm font-semibold">
            E-Weather <ion-icon :icon="cloudyNight" />
          </div>
        </div>
        <div class="col-4">
          <div
            class="text-right px-3 pt-2 border-round-sm bg-primary font-bold"
          >
            <ion-menu-toggle>
              <!-- <button class="btn-sign"><ion-icon :icon="logIn" /></button> -->
              <ion-button><ion-icon :icon="logIn" /></ion-button>
            </ion-menu-toggle>
          </div>
        </div>
      </div>
      <ion-card class="weather-card" v-if="weatherDatav2 && !isLoading">
        <ion-card-header class="p-0 m-0">
          <div class="flex">
            <div class="col-12">
              <div class="text-left p-0">
                <ion-card-title class="text-white"
                  >Lipa City
                  <span style="font-size: 15px"
                    >Batangas Philippines</span
                  ></ion-card-title
                >
                <ion-card-subtitle class="text-white mt-1" v-if="currdate">{{
                  currdate.date
                }}</ion-card-subtitle>
              </div>
            </div>
          </div>
        </ion-card-header>
        <ion-card-content>
          <div class="grid">
            <div class="col-6 relative" v-if="weatherDatav2">
              <div class="pt-0">
                <ion-img
                  class="weather-icon"
                  v-if="weatherDatav2"
                  :src="`/weather_icons/set01/big/${weatherDatav2.current.icon_num}.png`"
                  alt="weather-icon"
                ></ion-img>
                <ion-label
                  class="text-2xl text-white font-bold"
                  style="color: #fbe1e2"
                >
                  {{ weatherDatav2.current.summary }}
                </ion-label>
              </div>
            </div>
            <div class="col-6" v-if="weatherDatav2">
              <div class="flex flex-column justify-content-end">
                <ion-label
                  class="text-6xl text-white font-bold"
                  style="color: #fbe1e2"
                  >{{
                    Math.floor(weatherDatav2.current.temperature)
                  }}°C</ion-label
                >
                <div></div>
                <ion-label
                  class="text-l text-white font-bold"
                  style="color: #fbe1e2"
                >
                  Wind
                </ion-label>
                <ion-label
                  class="text-xs text-white font-bold"
                  style="color: #fbe1e2"
                >
                  Speed: {{ weatherDatav2.current.wind.speed }}
                </ion-label>
                <ion-label
                  class="text-xs text-white font-bold"
                  style="color: #fbe1e2"
                >
                  Angle: {{ weatherDatav2.current.wind.angle }}
                </ion-label>
                <ion-label
                  class="text-xs text-white font-bold"
                  style="color: #fbe1e2"
                >
                  Direction: {{ weatherDatav2.current.wind.dir }}°
                </ion-label>
                <ion-label
                  class="text-xs text-white font-bold"
                  style="color: #fbe1e2"
                >
                  Cloud Cover: {{ weatherDatav2.current.cloud_cover }}
                </ion-label>
                <ion-label
                  class="text-xs text-white font-bold"
                  style="color: #fbe1e2"
                >
                  Precipitation: {{ weatherDatav2.current.precipitation.total }}
                </ion-label>
              </div>
            </div>
          </div>
        </ion-card-content>
      </ion-card>
      <ion-card style="box-shadow: none; border: 4px" v-if="isLoading">
        <ion-skeleton-text
          :animated="true"
          style="height: 280px"
        ></ion-skeleton-text>
      </ion-card>
      <div class="mt-2">
        <div class="grid">
          <div class="col-8">
            <div
              class="text-end text-xl px-3 pt-3 border-round-sm font-semibold"
            >
              Hourly
            </div>
          </div>
          <div class="col-4">
            <div
              class="text-right px-3 pt-3 border-round-sm bg-primary font-bold"
            >
              <!-- <button class="btn-sign"><ion-icon :icon="chevronDown" /></button> -->
              <ion-icon :icon="chevronDown" />
            </div>
          </div>
          <div class="col-12" v-if="isLoading">
            <ion-card
              v-for="(i, index) in 6"
              :key="index"
              style="box-shadow: none; border: 4px"
            >
              <ion-skeleton-text
                :animated="true"
                style="height: 70px"
              ></ion-skeleton-text>
            </ion-card>
          </div>
          <div class="col-12" v-if="weatherDatav2 && !isLoading">
            <ion-card
              class="weather-card"
              v-for="(h, index) in weatherDatav2.hourly"
              :key="index"
            >
              <div class="grid">
                <div class="col">
                  <div class="text-center border-round-sm bg-primary font-bold">
                    <div class="flex p-0 m-0 flex-column align-items-center">
                      <div class="grid p-0 m-0">
                        <div class="col-6">
                          <div
                            class="text-left text-white border-round-sm bg-primary font-bold"
                          >
                            {{ Math.floor(h.temperature) }}°C
                          </div>
                        </div>
                        <div class="col-6 p-0 m-0">
                          <div
                            class="text-right border-round-sm bg-primary font-bold"
                          >
                            <ion-img
                              class="weather-icon-hourly"
                              :src="`/weather_icons/set01/big/${h.icon}.png`"
                              alt="weather-icon"
                            ></ion-img>
                          </div>
                        </div>
                        <div class="col-12 p-0 m-0">
                          <ion-label
                            class="text-xs text-white"
                            style="color: #fbe1e2"
                          >
                            {{ h.summary }}
                          </ion-label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="text-center border-round-sm bg-primary font-bold"
                  ></div>
                </div>
                <div class="col">
                  <div class="text-center border-round-sm bg-primary font-bold">
                    <div class="flex p-0 m-0 flex-column align-items-center">
                      <div class="grid p-0 m-0">
                        <div class="col-12">
                          <div
                            class="text-right text-xs text-white border-round-sm bg-primary font-bold"
                          >
                            {{ h.date }}
                          </div>
                        </div>
                        <div class="col-2 p-0 m-0">
                          <div
                            class="text-right border-round-sm bg-primary font-bold"
                          >
                            <!-- <ion-img class="weather-icon-hourly" :src="`/weather_icons/set01/big/${h.icon}.png`"
                              alt="weather-icon"></ion-img> -->
                          </div>
                        </div>
                        <div class="col-12 p-0 m-0">
                          <div
                            class="text-right mr-2 text-xs text-white border-round-sm bg-primary font-bold"
                          >
                            <ion-label
                              class="text-xs text-white"
                              style="color: #fbe1e2"
                            >
                              {{ h.time }}
                            </ion-label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ion-card>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
  IonRefresher,
  IonRefresherContent,
  IonMenuToggle,
} from "@ionic/vue";
import {
  navigate,
  logIn,
  cloudyNight,
  time,
  chevronDown,
} from "ionicons/icons";
import { onMounted, ref, computed } from "vue";
import api from "@/api";
import axios from "axios";
import moment from "moment";

const currdate = ref(null);
const getTime = async () => {
  const response = await axios.get(
    "http://worldtimeapi.org/api/timezone/Asia/Manila"
  );
  currdate.value = {
    ...response.data,
    date: moment(response.data.datetime).format("MMMM D, YYYY"),
  };
};

const weather = ref(null);
const isLoading = ref(false);
const fetchData = async () => {
  // const response = await api.get(
  //   "/weather?lat=13.940776257881716&lon=121.16507619074791&appid=2de3397f7de9039ea1c0523d3c605269"
  // );
  // weather.value = response.data;
};

const weatherDatav2 = ref(null);
const fetchWeatherv2 = async () => {
  const response = await axios.get(
    "https://www.meteosource.com/api/v1/free/point?lat=13.9411N&lon=120.4623E&sections=current%2Chourly&timezone=Asia%2FManila&language=en&units=auto&key=8vwl8c5n7nyjkk4vsdsngykg33wx699w8mqstkgs"
  );
  weatherDatav2.value = {
    ...response.data,
    hourly: response.data.hourly.data.map((h) => {
      return {
        ...h,
        date: moment(h.date).format("MMM D, YYYY"),
        time: moment(h.date).format("h:mm A"),
      };
    }),
  };
  console.log(weatherDatav2.value);
};

const loadAPI = async () => {
  isLoading.value = true;
  await fetchData();
  await fetchWeatherv2();
  isLoading.value = false;
};

const refresher = async (event) => {
  isLoading.value = true;
  setTimeout(async () => {
    await fetchData();
    await fetchWeatherv2();
    isLoading.value = false;
  }, 2000);
  event.target.complete();
};

onMounted(async () => {
  getTime();
  await loadAPI();
});
</script>

<style scoped>
.weather-card {
  background: #5988f9;
  border-radius: 15px !important;
  padding: 10px;
}

.text-white {
  color: #fff !important;
}

.btn-sign {
  background: #5988f9;
  color: #fff;
  text-align: center;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
}

.btn-sign:hover {
  background: #4c78d9;
}

/* For small screens */
.weather-icon {
  width: 80%;
}

/* For medium screens and above */
@media (min-width: 576px) {
  .weather-icon {
    max-width: 50%;
    /* Adjust as needed */
  }
}

/* For large screens and above */
@media (min-width: 768px) {
  .weather-icon {
    max-width: 40%;
    /* Adjust as needed */
  }
}

/* For small screens */
.weather-icon-hourly {
  width: 80%;
}

/* For medium screens and above */
@media (min-width: 576px) {
  .weather-icon-hourly {
    max-width: 30%;
    /* Adjust as needed */
  }
}

/* For large screens and above */
@media (min-width: 768px) {
  .weather-icon-hourly {
    max-width: 50%;
    /* Adjust as needed */
  }
}
</style>
