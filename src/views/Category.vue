<template>
  <base-layout page-title="Categorias">
    <template v-slot:actions-end>
      {{ CategoryValue }}
    </template>

    <div id="selector-componente-dinamico">
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
        <component
          v-bind:is="ComponentPilarOverview"
          :nombrePilar="currentPilar"
          :nombreCategoria="nombreCategoria"
        ></component>
      </keep-alive>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
//import CategoriesList from "../components/CategoriesList";
import { IonButton, IonIcon, IonLabel, IonSegment, IonSegmentButton } from "@ionic/vue";
import { add } from "ionicons/icons";

//componente dinamico
import PilarOverview from "../components/PilarOverview.vue";

export default {
  components: {
    PilarOverview,
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
      ComponentPilarOverview: "pilar-overview",
      currentPilar: "premisas",
      nombreCategoria: this.$route.params.category,
      CategoryValue: this.$route.params.category.toUpperCase(),
    };
  },
  methods: {
    segmentChanged(ev) {
      console.log("Segment changed", ev);
      console.log("detalle del segmento selecionado", ev.detail);
      this.currentPilar = ev.detail.value;
      //guardar el pilarActual en la store

      //aqui voy a grabar el pilar en donde estoy y la categoria
    },
  },
  computed: {},
};
</script>

<style></style>
