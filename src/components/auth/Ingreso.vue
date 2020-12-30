<template>
  <ion-header>
    <ion-toolbar>
      <ion-title slot="start">Ingrese</ion-title>
      <ion-icon @click="modalClose" slot="end" size="large" name="close" />
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <section>
      <ion-button :size="sizeIngresar" :color="colorIngresar" @click="EstiloIngreso"
        >Ingresar</ion-button
      >
      <ion-button :size="sizeRegistrar" @click="EstiloRegistro" :color="colorRegistrar"
        >Registrar</ion-button
      >
    </section>
    <form class="ion-padding" @submit.prevent="enviarFormulario">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Ingrese su Correo</ion-label>
          <ion-input type="email" required v-model="ingresoCorreo" />
        </ion-item>

        <ion-item>
          <ion-label position="floating">Ingrese su clave</ion-label>
          <ion-input type="password" required v-model="ingresoClave" />
        </ion-item>
        <ion-item :class="claseRegistro">
          <ion-label position="floating">Confirme su clave</ion-label>
          <ion-input type="password" v-model="ingresoClaveConfirmacion" />
        </ion-item>
      </ion-list>
      <ion-button type="submit" :disabled="disableRule" expand="block">{{
        botonEnvio
      }}</ion-button>
    </form>
  </ion-content>
  <ion-button @click="modalClose"> Cerrar</ion-button>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonLabel,
  IonInput,
  IonList,
  IonItem,
  modalController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",

  data() {
    return {
      sizeIngresar: "large",
      sizeRegistrar: "small",
      colorIngresar: "primary",
      colorRegistrar: "secondary",
      claseRegistro: "ion-hide",
      ingresoCorreo: "",
      ingresoClave: "",
      ingresoClaveConfirmacion: "",
      botonEnvio: "Ingresar Ahora!",
      formularioRegistro: false,
    };
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonLabel,
    IonInput,
    IonList,
    IonItem,
  },
  computed: {
    disableRule() {
      if (this.formularioRegistro) {
        if (
          this.ingresoClave !== "" &&
          this.ingresoClave === this.ingresoClaveConfirmacion
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        if (this.ingresoClave !== "") {
          return false;
        }
        return true;
      }
    },
  },
  methods: {
    modalClose: function () {
      //this.$emit("close", { foo: "bar" });
      modalController.dismiss();
    },
    enviarFormulario() {
      const usuarioData = {
        email: this.ingresoCorreo,
        password: this.ingresoClave,
      };
      if (this.formularioRegistro) {
        console.log("estoy en el registro");
        this.$store.dispatch("crearUsuario", usuarioData);
        this.modalClose();
      } else {
        console.log("estoy en el login");
        this.$store.dispatch("ingresarUsuario", usuarioData);
        this.modalClose();
      }
    },
    EstiloIngreso: function () {
      this.sizeIngresar = "large";
      this.sizeRegistrar = "small";
      this.colorIngresar = "primary";
      this.colorRegistrar = "secondary";
      this.claseRegistro = "ion-hide";
      this.botonEnvio = "Ingresar Ahora!";
      this.formularioRegistro = false;
    },
    EstiloRegistro: function () {
      this.sizeIngresar = "small";
      this.sizeRegistrar = "large";
      this.colorRegistrar = "primary";
      this.colorIngresar = "secondary";
      this.claseRegistro = "";
      this.botonEnvio = "Registrate ahora!";
      this.formularioRegistro = true;
    },
  },
});
</script>
