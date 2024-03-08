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
        <ion-title>Safety Guidelines</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">Read me :)</div>
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

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
