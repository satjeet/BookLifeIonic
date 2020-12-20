<template>
  <base-layout page-title="Pilares">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"> </ion-icon>
      </ion-button>
    </template>
    <h2>Pilares</h2>
    <h4>{{ CategoryValue }}</h4>

    <div id="dynamic-component-demo">
      <ion-segment @ionChange="segmentChanged($event)">
        <ion-segment-button value="premisas">
          <ion-label>Premisas</ion-label>
        </ion-segment-button>
        <ion-segment-button value="enemies">
          <ion-label>Enemies</ion-label>
        </ion-segment-button>
      </ion-segment>

      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab.props }}
      </button>

      <keep-alive>
        <component v-bind:is="TabPilar" :value="currentPilar"></component>
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

var tabs = [
  {
    name: "Pilar",
    props: "Premisa",
  },
  {
    name: "Pilar",
    props: "Posts",
  },
  {
    name: "Pilar",
    props: "Archive",
  },
  {
    name: "Pilar",
    props: "Estrategias",
  },
];
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
      tabs: tabs,
      TabPilar: "tab-pilar",
      currentPilar: "premisas",
      currentTab: tabs[0],
      CategoryValue: this.$route.params.category,
    };
  },
  methods: {
    segmentChanged(ev) {
      console.log("Segment changed", ev);
      console.log("detalle del segmento selecionado", ev.detail);
      this.currentPilar = ev.detail.value;
    },
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.name.toLowerCase();
    },
  },
};
</script>

<style></style>
