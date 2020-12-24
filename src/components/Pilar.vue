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
        <ion-button type="submit" slot="end">Agregar {{ nombrePilar }}</ion-button>
      </ion-item>
    </form>
    <ion-item>
      {{ nombreCategoria }}
    </ion-item>
    <ion-item> {{ categoriaPilarFiltrada }}</ion-item>
    <ion-item> item 3 </ion-item>
    <ion-item> item 4 </ion-item>
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

export default {
  props: ["nombrePilar", "nombreCategoria"],
  components: {
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
    };
  },
  methods: {
    enviarPilar() {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
      };
      this.$store.dispatch("actualizarPilarLibro", pilarData);
    },
  },
  computed: {
    ...mapState(["categorias"]),
    categoriaPilarFiltrada() {
      var difficult_tasks = this.categorias.filter(
        (categoria) => (categoria.name = this.nombreCategoria)
      );
      console.log("lololol", difficult_tasks);
      return difficult_tasks;
    },
  },
};
</script>

<style></style>
