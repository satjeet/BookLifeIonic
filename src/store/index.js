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
        categorias:null,
        pilares:[]
    }
  },
  mutations: {
    setSecciones(state, payload) {
      state.secciones = payload;
    },
    setCategorias(state, payload) {
      state.categorias = payload;
    },
    setPilares(state, payload) {
      console.log("quiero ver el payload", payload);
      state.pilares = payload;
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
        }).catch((error) => {
          console.log(error);
          commit("setError", error);
        });
        
 
    },   
    //OBTENER CATEGORIAS
    async obtenerCategorias({ state,commit }) {
     // console.log(payload.categoria);
      //let seccionesObject={};
    //  const premisaArray = [];
     // const categoria = categoria;
     let fullCategorias
      console.log("antes de hacer la consulta de categorias");
      let docRefCategorias=db.collection("bookLife").doc(state.usuario.email).collection("categorias");
        await docRefCategorias.get().then(function(querySnapshot){
          console.log("haciendo pruebas dentro de snbapshpot",querySnapshot.docs);
          fullCategorias=querySnapshot.docs.map(doc => doc.data());
        /*  querySnapshot.forEach(function(doc){
            console.log("haciendo pruebas")
            console.log(" => ", doc.data());
           // fullCategorias=doc.data();
          })*/
          console.log("yupiii",fullCategorias);
          commit("setCategorias", fullCategorias);

        })
 
    },   
     //OBTENER Pilares
     async obtenerPilares({ state,commit },pilarData) {
      // console.log(payload.categoria);
       //let seccionesObject={};
     //  const premisaArray = [];
      // const categoria = categoria;
     // let fullCategorias
       console.log("antes de hacer la consulta de categorias");
       let docRefCategorias=db.collection("bookLife").doc(state.usuario.email).collection("categorias");
       await  docRefCategorias.where("name", "==", pilarData.nombreCategoria).get().then(function(querySnapshot) {
        console.log( "fsdfsdfs=> ", querySnapshot);
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log(doc.id, " premisas=> ", doc.data().premisas);

           commit("setPilares", doc.data());

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
         //  console.log("haciendo pruebas dentro de snbapshpot",querySnapshot.docs);
         //*  console.log("haciendo pruebas")
         // * console.log(" => ", esteDocumento.data());
           //fullCategorias=querySnapshot.docs.map(doc => doc.data());
         /*  querySnapshot.forEach(function(doc){
             console.log("haciendo pruebas")
             console.log(" => ", doc.data());
            // fullCategorias=doc.data();
           })*/
         //  console.log("yupiii",fullCategorias);
         //*  commit("setCategorias", docRefCategorias);
 
        // })
  
     },   

    /* nombrePilar: this.nombrePilar,
        nombreCategoria: this.nombreCategoria,
        inputPilar: this.inputPilar,
        */
    async actualizarPilarLibro({state,commit}, pilarData) {
      let pilarcito=pilarData.nombrePilar;
      //commit("setUsuario", usuario);
      console.log("nombre pilarcito",pilarcito);
      console.log("que tiene this.pilaes y pilarcito",this.state.pilares[pilarcito]);
      if(this.state.pilares[pilarcito]){
        this.state.pilares[pilarcito] =[...this.state.pilares[pilarcito],pilarData.inputPilar];
        console.log(" y despues que tiene this.pilares",this.state.pilares);

      }else{
        this.state.pilares[pilarcito] =[pilarData.inputPilar];


      }
    commit("setPilares", this.state.pilares);
      let docRef = db.collection("bookLife").doc(state.usuario.email).collection("categorias").doc(pilarData.nombreCategoria)
      await docRef.get().then(function(esteDocumento){
        if(esteDocumento.exists){
          console.log("el documento existe",pilarcito)
          docRef.update({
            [pilarcito]: firebase.firestore.FieldValue.arrayUnion(pilarData.inputPilar),
          
          })
        }else{
          console.log("el documento no existe",pilarcito)

          docRef.set({
            name:pilarData.nombreCategoria,
            [pilarcito]:[pilarData.inputPilar],
          })

        }
         alert("se subio");
      }).catch(error => console.log(error))
    
    },

    async eliminarPilarLibro({state,commit}, pilarData) {
      let pilarcito=pilarData.nombrePilar;
      //commit("setUsuario", usuario);
      console.log("nombre pilarcito",pilarcito);
      console.log("que tiene this.pilaes y pilarcito",this.state.pilares[pilarcito]);

      if(this.state.pilares[pilarcito]){
        //this.state.pilares[pilarcito] =[...this.state.pilares[pilarcito],pilarData.inputPilar];
        console.log(" y despues que tiene this.pilares",this.state.pilares);
        console.log(" adentro esta el index que quiero eliminar",this.state.pilares[pilarcito]);
        console.log(" el index es ",pilarData.index);

let pilarTalado= this.state.pilares[pilarcito].splice(pilarData.index, 1);
console.log("quiero ver lo que se va a seterar ",pilarTalado);
console.log("quiero ver lo que se va a ppopopopopop ", this.state.pilares[pilarcito]);

commit("setPilares", this.state.pilares);

      }else{
        console.log(" entro al eslse");
        this.state.pilares[pilarcito] =[pilarData.inputPilar];


      }
      let docRef = db.collection("bookLife").doc(state.usuario.email).collection("categorias").doc(pilarData.nombreCategoria)
      await docRef.get().then(function(esteDocumento){
        if(esteDocumento.exists){
          console.log("el documento existe",pilarcito)

          docRef.update({
            [pilarcito]: firebase.firestore.FieldValue.arrayRemove(pilarData.inputPilar),
          
          })
        }else{
          console.log("algo salio mal al eliminar")

        }
    


         alert("se elimino correctamente");
      }).catch(error => console.log(error))
    
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
      await docRef.get().then(function(esteDocumento){
        if(esteDocumento.exists){
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
  modules:{
  },


})


export default store;