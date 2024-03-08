<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="cloudy" />
          <ion-label>Weather</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/radio">
          <ion-icon :icon="call" />
          <ion-label>Emergency</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="warning" />
          <ion-label>Guidelines</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
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
} from "@ionic/vue";
import {
  playCircle,
  radio,
  library,
  search,
  cloudy,
  person,
  call,
  warning,
} from "ionicons/icons";
import { onMounted, ref } from "vue";
import api from "@/api";

const weatherData = ref([]);
const fetchData = async () => {
  const response = await api.get(
    "/weather?lat=13.940776257881716&lon=121.16507619074791&appid=2de3397f7de9039ea1c0523d3c605269"
  );
  weatherData.value = response.data;
};

onMounted(async () => {
  await fetchData();
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
