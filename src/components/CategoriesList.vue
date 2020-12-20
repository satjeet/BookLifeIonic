// mostrare las 12 categorias. podria aprovechar de cargar el libro de firebase
<template>
  <IonContent className="ion-padding">
    <IonGrid>
      <IonRow>
        <IonCol
          v-for="(item, index) in categorias"
          :key="index"
          size="6"
          size-md="3"
          offset-md="1"
          size-lg="2"
          offset-lg="1"
        >
          <ion-card :router-link="`/booklife/${item.value}`">
            <ion-card-header>
              <ion-card-subtitle> {{ item.text }}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-img :src="item.imageURL" :alt="item.text"></ion-img>
            </ion-card-content>
          </ion-card>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>

  <div class="gallery">
    <div v-for="(item, index) in categorias" :key="index">
      <div v-bind:class="classVariable(index)" class="card">
        <img
          v-bind:src="item.imageURL"
          alt="{{item.text}}"
          style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ item.text }}</b>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
} from "@ionic/vue";
export default {
  name: "Categorias",
  props: ["category"],
  components: {
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
  },

  methods: {
    classVariable(Index) {
      return "item" + (Index + 1);
    },
  },
  data() {
    return {
      categorias: [
        {
          text: "Salud Integral",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "salud",
        },
        {
          text: "Intelectualidad",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "intelectual",
        },
        {
          text: "Emocionalidad",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "emocional",
        },
        {
          text: "Caracter",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "caracter",
        },
        {
          text: "Espiritualidad",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "espiritualidad",
        },
        {
          text: "Relaciones amorosas",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "amor",
        },
        {
          text: "Crianza",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "crianza",
        },
        {
          text: "socialización",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "social",
        },
        {
          text: "Finanzas",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "finanzas",
        },
        {
          text: "Carrera ",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "carrera",
        },
        {
          text: "Calidad de Vida",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "calidad",
        },
        {
          text: "Vision",
          imageURL:
            "https://image.freepik.com/vector-gratis/dibujado-mano-dia-mundial-salud-mental_23-2148661951.jpg",
          value: "vision",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
