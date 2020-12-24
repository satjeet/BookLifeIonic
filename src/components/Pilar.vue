<template>
  <ion-list-header>
    <h2 class="ion-text-capitalize">
      {{ nombrePilar }}
    </h2>
  </ion-list-header>
  <ion-list>
    <form class="ion-padding" @submit.prevent="enviarPilar">
      <ion-item>
        <ion-label position="floating">Ingrese sus {{ nombrePilar }}</ion-label>
        <ion-input type="text" required v-model="inputPilar" />
        <ion-button type="submit" slot="end">Agregar {{ nombrePilar }}</ion-button>
      </ion-item>
    </form>
    <ion-item>
      {{ nombreCategoria }}
    </ion-item>
    <ion-item> item 2 </ion-item>
    <ion-item> item 3 </ion-item>
    <ion-item> item 4 </ion-item>
  </ion-list>
</template>

<script>
import {
  IonListHeader,
  IonList,
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
} from "@ionic/vue";
export default {
  props: ["nombrePilar", "nombreCategoria"],
  components: {
    IonListHeader,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonInput,
  },
  data() {
    return {
      inputPilar: "",
    };
  },
  methods: {
    enviarPilar() {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
      };
      switch (this.nombrePilar) {
        case "premisas":
          console.log("enviando premisa", pilarData);
          break;
        case "visiones":
          console.log("enviando visiones", pilarData);
          break;
        case "propositos":
          console.log("enviando propositos", pilarData);
          break;
        case "estrategias":
          console.log("enviando estrategias", pilarData);
          break;
        default:
          console.log("aun no registro el pilar", pilarData);
          break;
      }
    },
  },
};
</script>

<style></style>
