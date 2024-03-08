<template>
  <!-- <ion-page id="main-content">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Card Title</ion-card-title>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <pre>{{ weatherData }}</pre>
      </ion-card-content>
    </ion-card>
  </ion-page> -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Listen now</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">Listen now content</div>
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
} from "@ionic/vue";
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

<style lang="scss" scoped></style>
