<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Sign In</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- <ion-menu-toggle>
        <ion-button>Click to close the menu</ion-button>
      </ion-menu-toggle> -->
      <div class="sign-content">
        <ion-label><h2>Sign In</h2></ion-label>
        <ion-input
          label="Phone"
          label-placement="floating"
          fill="outline"
          type="number"
          placeholder="Enter text"
          class="my-3"
        ></ion-input>
        <ion-input
          label="Password"
          label-placement="floating"
          fill="outline"
          type="password"
          placeholder="Enter text"
          class="mb-3"
        ></ion-input>
        <ion-button color="primary">
          <ion-icon slot="start" :icon="logIn"></ion-icon> Sign In</ion-button
        >
      </div>
    </ion-content>
  </ion-menu>
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
  IonButtons,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenuToggle,
  IonInput,
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
  cog,
  logIn,
} from "ionicons/icons";
</script>

<style scoped>
.sign-content {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  /* justify-content: center !important; */
  height: 100% !important;
}

.btn {
  background: #5988f9 !important;
}
</style>
