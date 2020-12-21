<template>
  <ion-list-header>
    <h2 class="ion-text-capitalize">
      {{ value }}
    </h2>
  </ion-list-header>
  <ion-list>
    <ion-item>
      agregar un nuevo elemento
    </ion-item>
    <ion-item>
      item 1
    </ion-item>
    <ion-item>
      item 2
    </ion-item>
    <ion-item>
      item 3
    </ion-item>
    <ion-item>
      item 4
    </ion-item>
  </ion-list>
</template>

<script>
import { IonListHeader, IonList, IonItem } from "@ionic/vue";
export default {
  props: ["value"],
  components: {
    IonListHeader,
    IonList,
    IonItem,
  },
};
</script>

<style></style>
