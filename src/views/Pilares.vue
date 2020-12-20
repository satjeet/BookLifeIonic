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
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab.props }}
      </button>

      <keep-alive>
        <component
          v-bind:is="currentTabComponent"
          :value="currentTab.props"
        ></component>
      </keep-alive>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
//import CategoriesList from "../components/CategoriesList";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
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
import TabPilar from "../components/Pilar.vue";
export default {
  components: { TabPilar, BaseLayout, IonButton, IonIcon },
  data() {
    return {
      add,
      tabs: tabs,
      currentTab: tabs[0],
      CategoryValue: this.$route.params.category,
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.name.toLowerCase();
    },
  },
};
</script>

<style></style>
