<template>
  <ion-page>
    <ion-content>
      <div class="grid mb-0" style="border: 1px solid red;">
        <div class="col-5">
          <div class="text-start text-xl px-3 pt-3 border-round-sm font-semibold" style="color: #4F4F4F;">
            <!-- <ion-icon :icon="navigate" /> -->
            Lipa City, Batangas
            Philippines
          </div>
        </div>
        <div class="col-7">
          <!-- <div class="text-end p-3 border-round-sm bg-primary font-bold ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123911.53933867977!2d121.01227609966392!3d13.9445724775512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd13576170055f%3A0xe6da25b39082662a!2sLipa%2C%20Batangas!5e0!3m2!1sfil!2sph!4v1709954443373!5m2!1sfil!2sph"
              width="100" height="60" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> -->
        </div>
      </div>
      <ion-card class="weather-card" v-if="weatherDatav2">
        <ion-card-content>
          <div class="grid">
            <div class="col-6 relative" v-if="weather">
              <div class=" pt-0">
                <ion-img class="weather-icon" v-if="weatherDatav2"
                  :src="`/weather_icons/set01/big/${weatherDatav2.current.icon_num}.png`" alt="weather-icon"></ion-img>
                <ion-label class="text-3xl text-white font-bold" style="color: #FBE1E2;">
                  {{ weatherDatav2.current.summary }}
                </ion-label>
                <ion-label class="text-2xl text-white" style="color: #FBE1E2;">
                  Today
                </ion-label>
              </div>
            </div>
            <div class="col-6" v-if="weatherDatav2">
              <div class=" flex flex-column justify-content-end">
                <ion-label class="text-6xl text-white font-bold" style="color: #FBE1E2;">{{
        weatherDatav2.current.temperature
      }}°C</ion-label>
                <div>
                </div>
                <ion-label class="text-l text-white font-bold" style="color: #FBE1E2;">
                  Wind
                </ion-label>
                <ion-label class="text-xs text-white font-bold" style="color: #FBE1E2;">
                  Speed: {{ weatherDatav2.current.wind.speed }}
                </ion-label>
                <ion-label class="text-xs text-white font-bold" style="color: #FBE1E2;">
                  Angle: {{ weatherDatav2.current.wind.angle }}
                </ion-label>
                <ion-label class="text-xs text-white font-bold" style="color: #FBE1E2;">
                  Direction: {{ weatherDatav2.current.wind.dir }}°
                </ion-label>
                <ion-label class="text-xs text-white font-bold" style="color: #FBE1E2;">
                  Cloud Cover: {{ weatherDatav2.current.cloud_cover }}
                </ion-label>
                <ion-label class="text-xs text-white font-bold" style="color: #FBE1E2;">
                  Precipitation: {{ weatherDatav2.current.precipitation.total }}
                </ion-label>
              </div>

            </div>

          </div>
        </ion-card-content>
      </ion-card>
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
} from "@ionic/vue";
import { navigate } from "ionicons/icons"
import { onMounted, ref, computed } from "vue";
import api from "@/api";
import axios from 'axios';

const weather = ref(null);
const fetchData = async () => {
  const response = await api.get(
    "/weather?lat=13.940776257881716&lon=121.16507619074791&appid=2de3397f7de9039ea1c0523d3c605269"
  );
  weather.value = response.data;
};

const weatherDatav2 = ref(null)
const fetchWeatherv2 = async () => {
  const response = await axios.get('https://www.meteosource.com/api/v1/free/point?lat=13.9411N&lon=120.4623E&sections=current%2Chourly&timezone=Asia%2FManila&language=en&units=auto&key=8vwl8c5n7nyjkk4vsdsngykg33wx699w8mqstkgs');
  weatherDatav2.value = response.data
}


onMounted(async () => {
  await fetchData();
  await fetchWeatherv2();
});
</script>

<style scoped>
.weather-card {
  background: radial-gradient(ellipse at 67% 82%, #5988F9, rgba(117, 156, 241, 1));
  border-radius: 15px !important;
  padding: 10px;
}

.text-white {
  color: #fff !important;
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
    max-width: 30%;
    /* Adjust as needed */
  }
}
</style>
