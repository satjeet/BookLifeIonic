<template>
  <ion-list-header>
    <h2 class="ion-text-capitalize">
      {{ nombrePilar }}
    </h2>
  </ion-list-header>
  <ion-list>
    <form class="ion-padding" @submit.prevent="enviarPilar">
      <ion-item>
        <ion-label position="floating">Ingrese sus {{ nombrePilar }}</ion-label>
        <ion-input type="text" required v-model="inputPilar" />
        <ion-button color="tertiary" type="submit" slot="end"
          >Agregar {{ nombrePilar }}</ion-button
        >
      </ion-item>
    </form>
    <pilar-list-item
      :categoriaPilarFiltrada="this.pilares"
      :nombrePilar="nombrePilar"
      :nombreCategoria="nombreCategoria"
    ></pilar-list-item>
  </ion-list>
</template>

<script>
import {
  IonListHeader,
  IonList,
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { mapState } from "vuex";
import PilarListItem from "./PilarListItem";
export default {
  props: ["nombrePilar", "nombreCategoria"],
  components: {
    PilarListItem,
    IonListHeader,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonInput,
  },
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
  methods: {
    editarItemPilar(pilar) {
      console.log(pilar);
      console.log(pilar.id);

      this.editInputPilar = pilar;
      this.claseEditar = "";

      //return PilarActual;
    },
    pilarActual() {
      let PilarActual = this.pilares.premisas;
      return PilarActual;
    },
    enviarPilar() {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
      };
      //this.pilares = this.pilares.unshift(pilarData.inputPilar);
      this.$store.dispatch("actualizarPilarLibro", pilarData);
      this.inputPilar = "";
    },
    obtenerPilar() {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
      };
      this.$store.dispatch("obtenerPilares", pilarData);
    },
  },
  mounted() {
    // invocar pilar
    this.obtenerPilar();
  },
  computed: {
    ...mapState(["pilares"]),
    categoriaPilarFiltrada() {
      let algo = this.nombrePilar;
      console.log("que tiene pilaes", this.pilares);
      console.log("que tiene algo de pilares", this.pilares[algo]);
      return this.pilares[algo];
    },
    /*
    categoriaPilarFiltrada() {
      var difficult_tasks = this.categorias.filter(
        (categoria) => (categoria.name = this.nombreCategoria)
      );
      console.log("lololol", difficult_tasks);
      return difficult_tasks;
    },
    */
  },
};
</script>

<style></style>
