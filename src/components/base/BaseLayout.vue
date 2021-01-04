<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ pageTitle }}
        </ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-button
          color="secondary"
          :class="hideIngresarButton"
          size="small"
          slot="end"
          @click="openModal"
          >Ingresar</ion-button
        >
        <ion-button
          color="secondary"
          :class="hideCloseSesion"
          size="small"
          slot="end"
          @click="cerrarSesion"
          ><ion-icon name="exit-outline"></ion-icon> Cerrar Sesion</ion-button
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
  IonIcon,
} from "@ionic/vue";
import ModalIngreso from "../auth/Ingreso";
//import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  props: ["pageTitle", "pageDefaultBack"],
  data() {
    return {
      isOpen: false,
      modal: null,
      // hideCloseSesion: "ion-hide",
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
    IonIcon,
  },
  computed: {
    ...mapState(["usuario"]),
    hideCloseSesion() {
      if (this.usuario) {
        // this.hideCloseSesion = "";
        console.log("encontre usuario en header");
        return "";
      } else {
        console.log("No hay usuario en header");
        //this.hideCloseSesion = "ion-hide";

        return "ion-hide";
      }
    },
    hideIngresarButton() {
      if (this.usuario) {
        // this.hideCloseSesion = "";
        console.log("encontre usuario en header");
        return "ion-hide";
      } else {
        console.log("No hay usuario en header");
        //this.hideCloseSesion = "ion-hide";
        return "";
      }
    },
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
