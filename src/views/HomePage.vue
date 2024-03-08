<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>E-Weather</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

        <ion-card>
          <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
           <pre>{{ weatherData }}</pre>
          </ion-card-content>
        </ion-card>

        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import {onMounted, ref} from 'vue'
import api from "@/api"

const weatherData = ref([])
const fetchData = async () => {
    const response = await api.get('/weather?lat=13.940776257881716&lon=121.16507619074791&appid=2de3397f7de9039ea1c0523d3c605269')
    weatherData.value = response.data
}

onMounted(async () => {
  await fetchData()
})

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
