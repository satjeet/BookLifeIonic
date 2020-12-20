<template>
  <base-layout page-title="Book Life">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"> </ion-icon>
      </ion-button>
    </template>
    <h2>Lista de categorias</h2>
    <categories-list></categories-list>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import CategoriesList from "../components/CategoriesList";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  components: { CategoriesList, BaseLayout, IonButton, IonIcon },
  data() {
    return { add };
  },
};
</script>

<style></style>
