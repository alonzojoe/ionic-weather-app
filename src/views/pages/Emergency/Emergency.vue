<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Emergency Hotlines</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">Call 09051234567</div>
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
} from "@ionic/vue";

</script>
