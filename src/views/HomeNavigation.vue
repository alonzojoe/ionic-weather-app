<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/weather">
          <ion-icon :icon="cloudy" />
          <ion-label>Weather</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/emergency">
          <ion-icon :icon="call" />
          <ion-label>Emergency</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/guidelines">
          <ion-icon :icon="warning" />
          <ion-label>Guidelines</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/profile">
          <ion-icon :icon="cog" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
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
  cog
} from "ionicons/icons";
</script>
