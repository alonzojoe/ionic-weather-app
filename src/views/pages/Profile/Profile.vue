<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.bg-blue {
  background: #5988f9 !important;
  color: #fff;
}
</style>

<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Profile Account</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import Card from "primevue/card";
</script>
