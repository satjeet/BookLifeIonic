<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBack"></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ pageTitle }}
        </ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-button size="small" slot="end" @click="openModal"
          >Ingresar</ion-button
        >
        <ion-button size="small" slot="end" @click="cerrarSesion"
          >Cerrar Sesion</ion-button
        >
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  modalController,
  IonButton,
} from "@ionic/vue";
import ModalIngreso from "../auth/Ingreso";
//import { mapActions } from "vuex";

export default {
  props: ["pageTitle", "pageDefaultBack"],
  data() {
    return {
      isOpen: false,
      modal: null,
    };
  },
  components: {
    IonBackButton,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonButtons,
    IonButton,
  },
  methods: {
    async CrearModal() {
      this.modal = await modalController.create({
        component: ModalIngreso,
        componentProps: {
          // title: 'New Title'
        },
      });
    },
    async openModal() {
      await this.CrearModal();
      this.isOpen = true;
      this.modal.present();
    },
    cerrarSesion() {
      this.$store.dispatch("cerrarSesion");
    },
  },
};
</script>

<style></style>
