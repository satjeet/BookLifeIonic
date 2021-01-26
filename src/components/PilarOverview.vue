<template>
  <ion-list-header>
    <h2 class="ion-text-capitalize">
      {{ nombrePilar }}
    </h2>

    <ion-button color="tertiary" @click="descripcionAlert">
      <ion-icon color="tertiary" name="help-outline"></ion-icon>
    </ion-button>
  </ion-list-header>
  <ion-list>
    <keep-alive>
      <component
        v-bind:is="ejemploPilaresToggle"
        :nombrePilar="this.nombrePilar"
        :nombreCategoria="this.nombreCategoria"
      ></component>
    </keep-alive>

    <form class="ion-padding" @submit.prevent="enviarPilar">
      <ion-item>
        <ion-label position="floating">Ingrese sus {{ nombrePilar }}</ion-label>
        <ion-input type="text" required v-model="inputPilar" />
        <ion-button color="tertiary" type="submit" slot="end">
          Agregar {{ nombrePilar }}
        </ion-button>
      </ion-item>
    </form>
    <pilar-list-item
      :categoriaPilarFiltrada="this.pilares"
      :nombrePilar="nombrePilar"
      :nombreCategoria="nombreCategoria"
    ></pilar-list-item>
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
  IonIcon,
  alertController,
} from "@ionic/vue";
import { mapState } from "vuex";
import PilarListItem from "./PilarListItem";
import EjemploPilaresToggle from "./EjemploPilaresToggle.vue";

export default {
  props: ["nombrePilar", "nombreCategoria"],
  components: {
    PilarListItem,
    EjemploPilaresToggle,
    IonListHeader,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonInput,
    IonIcon,
  },
  data() {
    return {
      inputPilar: "",
      algo: this.nombrePilar,
      editando: false,
      editInputPilar: "",
      claseEditar: "ion-hide",
      ejemploPilaresToggle: "ejemplo-pilares-toggle",
      //help-outline,
      //pilares: [],
    };
  },
  methods: {
    async descripcionAlert() {
      let mensajeAlerta =
        " ¿Qué crees? ¿Qué creencias profundamente arraigadas están dando forma a tu vida? ¿Son tus creencias fortalecedoras? ¿Te mueven a un nivel profundo o te están frenando? ¿Cuál es tu premisa para esta área de tu vida, o cuál le gustaría que fuera?";
      let tituloAlerta = "Que son las premisas?";
      let subTituloAlerta =
        "Las premisas son las creencias fundamentales que tienes sobre esta categoría";

      console.log(this.nombrePilar);
      switch (this.nombrePilar) {
        case "premisas":
          mensajeAlerta =
            "¿Qué crees? <br/>¿Qué creencias profundamente arraigadas están dando forma a tu vida?<br/> ¿Son sus creencias fortalecedoras? <br/>¿Te impulsan o te están frenando? <br/>¿Cuál es tu premisa para esta área de tu vida, o cuál le gustaría que fuera?";
          tituloAlerta = "¿Que son las premisas?";
          subTituloAlerta =
            "Las premisas son las creencias fundamentales que tienes sobre esta categoría";
          break;
        case "visiones":
          mensajeAlerta =
            "Pregúntese:<br/>¿Cómo quieres que se sienta esta área de tu vida? <br/>¿Cómo quieres que se vea?¿Qué quieres hacer de forma constante? <br/>Describe claramente tu Visión ideal.";
          tituloAlerta = "¿Que son las visiones?";
          subTituloAlerta =
            "Las visiones son el estado ideal que te gustaría alcanzar en esta importante categoría";

          break;
        case "propositos":
          mensajeAlerta =
            "¿Qué te da energía? <br/> ¿Qué te empodera para actuar? <br/>¿Qué te motiva a lograr tu Visión?<br/> Describe POR QUÉ quieres aprovechar al máximo esta área de tu vida.";
          tituloAlerta = "¿Que son los propositos?";
          subTituloAlerta =
            "Los propositos se refieren a las razones de peso detrás de lo que deseas en esta categoría";

          break;
        case "estrategias":
          mensajeAlerta =
            "¿Cómo harás realidad tu visión?<br/> Pregúntese qué tipo de hábitos, actitudes y pasos de acción positivos puedes implementar. <br/>¿Cuál es la RECETA para la Visión que deseas crear?";
          tituloAlerta = "¿Que son las estrategias?";
          subTituloAlerta =
            "Las estrategias se refieren a las acciones específicas que te llevarán de donde estás ahora, a donde quieres estar";

          break;
        default:
          break;
      }
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: tituloAlerta,
        subHeader: subTituloAlerta,
        message: mensajeAlerta,
        buttons: ["GRACIAS"],
      });
      return alert.present();
    },
    editarItemPilar(pilar) {
      console.log(pilar);
      console.log(pilar.id);

      this.editInputPilar = pilar;
      this.claseEditar = "";

      //return PilarActual;
    },
    pilarActual() {
      let PilarActual = this.pilares.premisas;
      return PilarActual;
    },
    enviarPilar() {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
      };
      //this.pilares = this.pilares.unshift(pilarData.inputPilar);
      this.$store.dispatch("actualizarPilarLibro", pilarData);
      this.inputPilar = "";
    },
    obtenerPilar() {
      const pilarData = {
        nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
      };
      this.$store.dispatch("obtenerPilares", pilarData);
    },
  },
  mounted() {
    // invocar pilar
    this.obtenerPilar();
  },
  computed: {
    ...mapState(["pilares"]),
    categoriaPilarFiltrada() {
      let algo = this.nombrePilar;
      console.log("que tiene pilaes", this.pilares);
      console.log("que tiene algo de pilares", this.pilares[algo]);
      return this.pilares[algo];
    },

    /*
    categoriaPilarFiltrada() {
      var difficult_tasks = this.categorias.filter(
        (categoria) => (categoria.name = this.nombreCategoria)
      );
      console.log("lololol", difficult_tasks);
      return difficult_tasks;
    },
    */
  },
};
</script>

<style></style>
