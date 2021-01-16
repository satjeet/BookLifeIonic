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
  <ion-item
    v-for="(ejemplo, index) in ejemplosFiltrados"
    :key="index"
    :class="showEjemplosToggle"
  >
    <ion-label>{{ ejemplo }} </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonToggle } from "@ionic/vue";

const ejemplos = {
  salud: {
    premisas: ["uno", "dos", "tres"],
    vision: ["3232", "d3232os", "tre3232s"],
  },
  intelectual: {
    premisas: ["00000", "22222", "333333"],
    vision: ["444444", "555555", "666666"],
  },
};
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
      ejemplos: ejemplos,
      nPilar: this.nombrePilar,
      nCategoria: this.nombreCategoria,
    };
  },
  methods: {
    EjemplosPilarChanged(ev) {
      console.log("Segment changed", ev);
      console.log("detalle del segmento selecionado", ev.detail.checked);
      if (ev.detail.checked) {
        this.toggleChecked = true;
      } else {
        this.toggleChecked = false;
      }
    },
  },
  computed: {
    ejemplosFiltrados() {
      //let filtro = `ejemplos.$this.nombrePilar`;
      let category = this.nCategoria;

      //let pilar = this.nombrePilar;
      console.log("categoria: ", category);
      let pilare = this.nPilar;
      console.log("pilare: ", pilare);

      let ejemplos = this.ejemplos;
      let ejemplosCategoria = this.ejemplos[category];
      console.log("dentro de categoria: ", ejemplosCategoria);

      let ejemplosPilarCategoria = ejemplosCategoria[pilare];

      console.log("que tengo en ele ejmplo filtrado", ejemplosPilarCategoria);
      return ejemplos[category][pilare];
    },
    showEjemplosToggle() {
      if (this.toggleChecked) {
        return "";
      } else {
        return "ion-hide";
      }
    },
  },
};
</script>

<style></style>
