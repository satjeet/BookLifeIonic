import { auth, db } from "../firebase";
import router from "../router";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {createStore} from 'vuex';

const store=createStore({
  state() {
    return{
        secciones: [],
        usuario: null,
        error: "",
    }
  },
  mutations: {
    setSecciones(state, payload) {
      state.secciones = payload;
    },
    setUsuario(state, payload) {
      console.log("usuario seteado");
      state.usuario = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
   

  },
  actions: {
    crearUsuario({ commit }, usuario) {
      auth
        .createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          const usuario = {
            email: res.user.email,
            uid: res.user.uid,
          };
          commit("setUsuario", usuario);
          router.push({path:"/booklife"});
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error);
        });
    },
    async ingresarUsuario({ commit }, usuario) {
      
      //let trimEmail=usuario.email.toString().trim()
      await auth
        .signInWithEmailAndPassword(usuario.email, usuario.password)
        .then((res) => {
          console.log(res);
          console.log(res.user);
          console.log("correo");
          console.log(res.user.email);
          const usuario = {
            email: res.user.email,
            uid: res.user.uid,
          };
          commit("setUsuario", usuario);
          router.push({path:"/booklife"});
        })
        .catch((error) => {
          console.log(error);
          commit("setError", error);
        });
    },
    cerrarSesion() {
     // router.push("/booklife");
      auth.signOut();
    },
    detectarUsuario({
      commit
    }, usuario) {
      commit('setUsuario', usuario)
      if(usuario){
       // router.push({path:"/booklife"});
      }else{
        router.push("/booklife");

      }
    },
     obtenerSecciones({ state,commit },payload) {
      console.log(payload.categoria);
      //let seccionesObject={};
    //  const premisaArray = [];
     // const categoria = categoria;
      console.log("antes de hacer la consulta");
        db.collection("bookLife").doc(state.usuario.email).
        collection("categorias").get()
        .then(function(querySnapshot){
          querySnapshot.forEach(function(doc){
            console.log("haciendo pruebas")
            console.log(" => ", doc.data());
            commit("setSecciones", doc.data());
          })
        })
 
    },

    async actualizarLibro({
      
      state
    }, formulario) {
      //const data ={     }
      //await db.collection("bookLife").doc(state.usuario.email).collection("categorias").doc(formulario.categoria).collection("sistemas").add({
      /*  ({
          premisa: formulario.premisa,
          vision: formulario.vision,
          proposito: formulario.proposito,
          estrategia: formulario.estrategia
        })
*/
// arrayRemove va a ser util para eliminar
      let docRef = db.collection("bookLife").doc(state.usuario.email).collection("categorias").doc(formulario.categoria)
      await docRef.get().then(function(thisDoc){
        if(thisDoc.exists){
          docRef.update({
            premisa: firebase.firestore.FieldValue.arrayUnion(formulario.premisa),
            vision: firebase.firestore.FieldValue.arrayUnion(formulario.vision),
            proposito: firebase.firestore.FieldValue.arrayUnion(formulario.proposito),
            estrategia: firebase.firestore.FieldValue.arrayUnion(formulario.estrategia),
          
          })
        }else{
          docRef.set({
            premisa:[formulario.premisa],
            vision:[formulario.vision],
            proposito:[formulario.proposito],
            estrategia:[formulario.estrategia]
          })
        }
         alert("se subio")
      }).catch(error => console.log(error))
/*
      .update({
        premisa: firebase.firestore.FieldValue.arrayUnion(formulario.premisa),
        vision: firebase.firestore.FieldValue.arrayUnion(formulario.vision),
       
    }).then(function() {
      alert("actualizando")
         // console.log(doc)
          alert("se subio")
          router.push({
            name: 'BookLife'
          })
        })
        */
    },
  },
  modules: {
  }
})


export default store;