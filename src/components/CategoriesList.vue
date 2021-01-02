// mostrare las 12 categorias. podria aprovechar de cargar el libro de firebase
<template>
  <IonGrid>
    <IonRow>
      <IonCol
        v-for="(categoria, index) in categorias"
        :key="index"
        size="6"
        size-md="3"
        offset-md="1"
        size-lg="2"
        offset-lg="1"
      >
        <ion-card color="secondary" :router-link="`/booklife/${categoria.value}`">
          <ion-card-header>
            <ion-card-subtitle class="ion-text-center">
              {{ categoria.text }}</ion-card-subtitle
            >
          </ion-card-header>
          <ion-card-content>
            <ion-img :src="categoria.imageURL" :alt="categoria.text"></ion-img>
          </ion-card-content>
        </ion-card>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script>
//import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonImg,
} from "@ionic/vue";
export default {
  name: "Categorias",
  props: ["category"],
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
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
            "https://cdn.pixabay.com/photo/2015/12/23/14/03/vegetables-1105700__340.jpg",
          value: "salud",
        },
        {
          text: "Intelectualidad",
          imageURL:
            "https://cdn.pixabay.com/photo/2017/02/13/08/54/brain-2062057__340.jpg",
          value: "intelectual",
        },
        {
          text: "Emocionalidad",
          imageURL:
            "https://cdn.pixabay.com/photo/2019/05/27/19/22/rose-4233418__340.jpg",
          value: "emocional",
        },
        {
          text: "Caracter",
          imageURL:
            "https://cdn.pixabay.com/photo/2020/10/29/05/32/woman-5695265__340.jpg",
          value: "caracter",
        },
        {
          text: "Espiritualidad",
          imageURL:
            "https://cdn.pixabay.com/photo/2017/11/23/09/37/chakra-2972452__340.jpg",
          value: "espiritualidad",
        },
        {
          text: "Relaciones amorosas",
          imageURL:
            "https://cdn.pixabay.com/photo/2020/05/12/04/39/lovebirds-5161262__340.png",
          value: "amor",
        },
        {
          text: "Crianza",
          imageURL:
            "https://cdn.pixabay.com/photo/2020/06/21/22/20/deer-5326958__340.jpg",
          value: "crianza",
        },
        {
          text: "Socialización",
          imageURL: "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673__340.jpg",
          value: "social",
        },
        {
          text: "Finanzas",
          imageURL:
            "https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228__340.jpg",
          value: "finanzas",
        },
        {
          text: "Carrera ",
          imageURL:
            "https://cdn.pixabay.com/photo/2016/11/08/05/20/adventure-1807524__340.jpg",
          value: "carrera",
        },
        {
          text: "Calidad de Vida",
          imageURL:
            "https://cdn.pixabay.com/photo/2020/01/07/06/22/peacock-4746848__340.jpg",
          value: "calidad",
        },
        {
          text: "Vision",
          imageURL: "https://cdn.pixabay.com/photo/2015/03/11/20/12/eye-669157__340.jpg",
          value: "vision",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
