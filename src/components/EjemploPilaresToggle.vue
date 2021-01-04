<template>
  <ion-item>
    <ion-label>Ejemplos</ion-label>
    <ion-toggle
      @ionChange="EjemplosPilarChanged($event)"
      slot="start"
      name="ejemplos"
      color="secondary"
    ></ion-toggle>
  </ion-item>
  <ion-item :class="showEjemplosToggle">
    <ion-label>ejemplo 1 </ion-label>
  </ion-item>
  <ion-item :class="showEjemplosToggle">
    <ion-label>ejemplo 2 </ion-label>
  </ion-item>
  <ion-item :class="showEjemplosToggle">
    <ion-label>ejemplo 3 </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonToggle } from "@ionic/vue";
export default {
  props: ["nombrePilar", "nombreCategoria"],
  components: {
    IonItem,
    IonLabel,
    IonToggle,
  },
  data() {
    return {
      toggleChecked: false,
    };
  },
  methods: {
    EjemplosPilarChanged(ev) {
      console.log("Segment changed", ev);
      console.log("detalle del segmento selecionado", ev.detail);
      console.log("detalle del segmento selecionado", ev.detail.checked);
      if (ev.detail.checked) {
        this.toggleChecked = true;
      } else {
        this.toggleChecked = false;
      }
    },
  },
  computed: {
    showEjemplosToggle() {
      if (this.toggleChecked) {
        // this.hideCloseSesion = "";
        console.log("encontre usuario en header");
        return "";
      } else {
        console.log("No hay usuario en header");
        //this.hideCloseSesion = "ion-hide";

        return "ion-hide";
      }
    },
  },
};
</script>

<style></style>
