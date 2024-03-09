<template>
  <ion-page>
    <ion-content>
      <ion-card class="weather-card" v-if="weatherDatav2">
        <ion-card-header>
          <ion-card-subtitle class="text-white" style="font-size: 17px">Lipa City, Batangas
            Philippines </ion-card-subtitle>
          <ion-row style="margin-top: 15px">
            <ion-col class="ion-text-start">
              <ion-card-title class="text-white" v-if="weatherDatav2" style="font-size: 40px">{{
        weatherDatav2.current.temperature
      }}°C</ion-card-title>
            </ion-col>
            <ion-col class="ion-text-center" v-if="weather">
              <ion-img class="weather-icon" v-if="weatherDatav2"
                :src="`/weather_icons/set01/big/${weatherDatav2.current.icon_num}.png`" alt="weather-icon"></ion-img>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <pre>{{ weatherDatav2 }}</pre>
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

const calculateBackgroundColor = computed(() => {
  const iconNumber = weatherDatav2.value.current.icon_num;

  // Define color ranges based on icon numbers
  if (iconNumber >= 1 && iconNumber <= 8) {
    return 'radial-gradient(ellipse at 67% 82%, #fa4d5e, rgba(250, 47, 179, 1))'; // Sunny
  } else if (iconNumber >= 9 && iconNumber <= 12) {
    return 'radial-gradient(ellipse at 67% 82%, #a5c7ff, #75a6e9)'; // Light Rain
  } else if (iconNumber >= 13 && iconNumber <= 15) {
    return 'radial-gradient(ellipse at 67% 82%, #2d3e7e, #141e45)'; // Thunderstorm
  } else if (iconNumber >= 16 && iconNumber <= 21) {
    return 'radial-gradient(ellipse at 67% 82%, #2b387c, #0c0f1f)'; // Heavy Rain
  } else if (iconNumber >= 22 && iconNumber <= 25) {
    return 'radial-gradient(ellipse at 67% 82%, #99a7d2, #6683ae)'; // Light Rain with Sun
  } else if (iconNumber >= 26 && iconNumber <= 31) {
    return 'radial-gradient(ellipse at 67% 82%, #ffdf61, #ffd000)'; // Sunny
  } else if (iconNumber >= 32 && iconNumber <= 36) {
    return 'radial-gradient(ellipse at 67% 82%, #ffdb7b, #ffa500)'; // Little Sunny
  } else {
    return 'radial-gradient(ellipse at 67% 82%, #808080, #555555)'; // Default color
  }
});

onMounted(async () => {
  await fetchData();
  await fetchWeatherv2();
});
</script>

<style scoped>
.weather-card {
  border-radius: 15px !important;
  padding: 10px;
}

.text-white {
  color: #fff !important;
}

/* For small screens */
.weather-icon {
  width: 100%;
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
