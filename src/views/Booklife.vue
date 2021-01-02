<template>
  <base-layout page-title="Book Life">
    <template v-slot:actions-end> </template>
    <ion-card>
      <ion-card-header color="tertiary" class="ion-text-center">
        <ion-card-title> Lista de categorias</ion-card-title>
      </ion-card-header>
    </ion-card>
    <categories-list></categories-list>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import CategoriesList from "../components/CategoriesList";
import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/vue";
import { add } from "ionicons/icons";
//import { mapState } from "vuex";

export default {
  components: {
    CategoriesList,
    BaseLayout,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  data() {
    return { add };
  },
  mounted() {
    // this.$store.dispatch("obtenerCategorias");
  },
  computed: {
    //...mapState(["categorias"]),
  },
};
</script>

<style></style>
