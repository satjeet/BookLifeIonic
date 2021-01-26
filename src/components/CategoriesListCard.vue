<template>
  <ion-card color="secondary" :router-link="`/booklife/${categoria.value}`">
    <ion-card-header>
      <ion-card-subtitle class="ion-text-center"> {{ categoria.text }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-img :src="categoria.imageURL" :alt="categoria.text"></ion-img>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonImg,
} from "@ionic/vue";
export default {
  name: "CategoriesListCard",
  props: ["categoria"],
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonImg,
  },
};
</script>

<style></style>
