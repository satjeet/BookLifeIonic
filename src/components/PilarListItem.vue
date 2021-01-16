<template>
  <ion-item v-for="(pilar, index) in categoriaPilarFiltrada[nombrePilar]" :key="index">
    <ion-label class="ion-text-wrap"> {{ pilar }}</ion-label>

    <ion-button
      color="warning"
      type="button"
      @click="eliminarItemPilar(pilar, index)"
      slot="end"
      >Eliminar
    </ion-button>
  </ion-item>
</template>

<script>
import { IonItem, IonButton, IonLabel } from "@ionic/vue";
export default {
  props: ["categoriaPilarFiltrada", "nombrePilar", "nombreCategoria"],
  data() {
    return {
      inputPilar: "",
      algo: this.nombrePilar,
      editando: false,
      editInputPilar: "",
      claseEditar: "ion-hide",
      //pilares: [],
    };
  },
  components: {
    IonItem,
    IonButton,
    IonLabel,
  },
  methods: {
    editarItemPilar(pilar) {
      console.log("que tiene dentro de item pilar", pilar);
      console.log(this.categoriaPilarFiltrada);

      this.editInputPilar = pilar;
      this.claseEditar = "";

      //return PilarActual;
    },
    eliminarItemPilar(pilar, index) {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: pilar,
        index: index,
      };
      console.log("el index", index);
      //this.categoriaPilarFiltrada.splice(index, 1);
      //this.pilares = this.pilares.unshift(pilarData.inputPilar);
      this.$store.dispatch("eliminarPilarLibro", pilarData);
      if (this.debug) {
        console.log("categoria pilar filtrada: ", this.categoriaPilarFiltrada);
      }
      //this.editInputPilar = pilar;
      //this.claseEditar = "";

      //return PilarActual;
    },
  },
};
</script>

<style></style>
