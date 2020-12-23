<template>
  <div>
    <div
      v-if="ingreso"
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md"
    >
      <h2 class="text-lg font-semibold text-gray-700 capitalize">
        Ingreso
      </h2>

      <form
        @submit.prevent="
          ingresoUsuario({
            email: email,
            password: pass,
          })
        "
      >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700" for="emailAddress"
              >Correo Electronico</label
            >
            <input
              id="emailAddress"
              type="email"
              v-model="email"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700" for="password">Clave Secreta</label>
            <input
              id="password"
              v-model="pass"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div class="flex mt-4 justify-self-start">
          <button
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            type="submit"
          >
            Ingresar
          </button>
        </div>

        <div class="flex justify-end mt-4">
          <button
            @click="toggleIngreso"
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>

    <div
      v-if="!ingreso"
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md"
    >
      <h2 class="text-lg font-semibold text-gray-700 capitalize">
        Account settings
      </h2>

      <form @submit.prevent="crearUsuario({ email: email, password: pass1 })">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700" for="emailAddress"
              >Correo Electronico</label
            >
            <input
              id="emailAddress"
              v-model="email"
              type="email"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700" for="password">Clave Secreta</label>
            <input
              id="password"
              type="password"
              v-model="pass1"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700" for="passwordConfirmation"
              >Password Confirmation</label
            >
            <input
              id="passwordConfirmation"
              type="password"
              v-model="pass2"
              class="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex mt-4 justify-self-start">
          <button
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            type="submit"
            :disabled="!desactivar"
          >
            Registrarse
          </button>
        </div>
        <p>{{ error }}</p>

        <div class="flex justify-end mt-4">
          <button
            @click="toggleIngreso"
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import firebase from "firebase/app";
//import router from "../../router";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    step: 1,
    absolute: true,
    overlay: true,
    modal: false,
    ingreso: true,
    email: "",
    pass: "",
    pass1: "",
    pass2: "",
  }),
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
    toggleIngreso() {
      this.ingreso = !this.ingreso;
    },

    ...mapActions(["crearUsuario", "ingresoUsuario"]),
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return this.pass1 === this.pass2 && this.pass1.trim() !== "";
    },
  },
};
</script>

<style>
.Ingreso {
  padding: 2em;
}

.modal {
  transition: opacity 0.25s ease;
}
body.modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
.opacity-95 {
  opacity: 0.95;
}
</style>
