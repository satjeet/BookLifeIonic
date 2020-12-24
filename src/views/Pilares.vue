<template>
  <base-layout page-title="Pilares">
    <template v-slot:actions-end>
      {{ CategoryValue }}
    </template>

    <div id="dynamic-component-demo">
      <ion-segment @ionChange="segmentChanged($event)" value="premisas">
        <ion-segment-button value="premisas">
          <ion-label>I</ion-label>
        </ion-segment-button>
        <ion-segment-button value="visiones">
          <ion-label>II</ion-label>
        </ion-segment-button>
        <ion-segment-button value="propositos">
          <ion-label>III</ion-label>
        </ion-segment-button>
        <ion-segment-button value="estrategias">
          <ion-label>IV</ion-label>
        </ion-segment-button>
      </ion-segment>

      <keep-alive>
        <component v-bind:is="TabPilar" :nombrePilar="currentPilar" :nombreCategoria="nombreCategoria"></component>
      </keep-alive>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
//import CategoriesList from "../components/CategoriesList";
import {
  IonButton,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import TabPilar from "../components/Pilar.vue";

export default {
  components: {
    TabPilar,
    BaseLayout,
    IonButton,
    IonIcon,
    IonLabel,
    IonSegment,
    IonSegmentButton,
  },
  data() {
    return {
      add,
      TabPilar: "tab-pilar",
      currentPilar: "premisas",
      nombreCategoria:this.$route.params.category,
      CategoryValue: this.$route.params.category.toUpperCase(),
    };
  },
  methods: {
    segmentChanged(ev) {
      console.log("Segment changed", ev);
      console.log("detalle del segmento selecionado", ev.detail);
      this.currentPilar = ev.detail.value;
    },
  },
  computed: {},
};
</script>

<style></style>
