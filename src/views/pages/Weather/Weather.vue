<template>
  <ion-page>
    <ion-content>
      <ion-card class="weather-card">
        <ion-card-header>
          <ion-card-subtitle class="text-white" style="font-size: 17px"
            >Lipa City, Batangas Philippines</ion-card-subtitle
          >
          <ion-row style="margin-top: 15px">
            <ion-col class="ion-text-start">
              <ion-card-title class="text-white" style="font-size: 40px"
                >30°C</ion-card-title
              >
            </ion-col>
            <ion-col class="ion-text-center" v-if="weather">
              <ion-img
                :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                alt="weather-icon"
              ></ion-img>
              <!-- {{ weather.weather.icon }} -->
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <!-- <pre>{{ weather }}</pre> -->
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
import { onMounted, ref } from "vue";
import api from "@/api";
import axios from "axios";

const weather = ref(null);
const fetchData = async () => {
  const response = await axios.get(
    `https://api.weatherstack.com/current?access_key=${
      import.meta.env.VITE_API_KEY_SECONDARY
    }&query=Lipa`
  );
  weather.value = response.data;
};

onMounted(async () => {
  await fetchData();
});
</script>

<style scoped>
.weather-card {
  background: radial-gradient(
    ellipse at 67% 82%,
    #fa4d5e,
    rgba(250, 47, 179, 1)
  );
  border-radius: 15px !important;
  padding: 10px;
}

.text-white {
  color: #fff !important;
}
</style>
