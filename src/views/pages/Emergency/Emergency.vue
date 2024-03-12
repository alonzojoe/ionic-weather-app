<style scoped>
.contact {
  text-decoration: none;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Emergency Hotlines</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item-group>
        <ion-item class="mt-3">
          <div class="grid">
            <div class="col-12">
              <ion-label>Lipa City Mayor’s Office</ion-label>
            </div>
            <div class="col-12">
              <a href="tel:(043)7745169" class="contact"
                ><ion-icon :icon="call" /> (043)7745169</a
              >
            </div>
          </div>
        </ion-item>
        <ion-item class="mt-3">
          <div class="grid">
            <div class="col-12">
              <ion-label>Lipa City District Hospital</ion-label>
            </div>
            <div class="col-12">
              <a href="tel:(043)7561313" class="contact"
                ><ion-icon :icon="call" /> (043)7561313</a
              >
            </div>
          </div>
        </ion-item>
        <ion-item class="mt-3">
          <div class="grid">
            <div class="col-12">
              <ion-label>Philippine National Police</ion-label>
            </div>
            <div class="col-12">
              <a href="tel:09777749692" class="contact"
                ><ion-icon :icon="call" /> 09777749692</a
              >
            </div>
          </div>
        </ion-item>
        <ion-item class="mt-3">
          <div class="grid">
            <div class="col-12">
              <ion-label>Bureau of Fire Protection</ion-label>
            </div>
            <div class="col-12">
              <a href="tel:09275758065" class="contact"
                ><ion-icon :icon="call" /> 09275758065</a
              >
            </div>
          </div>
        </ion-item>
        <ion-item class="mt-3">
          <div class="grid">
            <div class="col-12">
              <ion-label
                >Lipa City Disaster Risk Reduction and Management</ion-label
              >
            </div>
            <div class="col-12">
              <a href="tel:(043)7575164" class="contact"
                ><ion-icon :icon="call" /> (043)7575164</a
              >
            </div>
          </div>
        </ion-item>
        <ion-item class="mt-3">
          <div class="grid">
            <div class="col-12">
              <ion-label>National Emergency</ion-label>
            </div>
            <div class="col-12">
              <a href="tel:911" class="contact"
                ><ion-icon :icon="call" /> 911</a
              >
            </div>
          </div>
        </ion-item>
      </ion-item-group>
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
import { call } from "ionicons/icons";
</script>
