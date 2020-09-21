import Vue from 'vue'
import Vuex from 'vuex'

import 'firebase/firestore'
// import { dbMenuAdd } from '../../firebase.js'
import { dbMenuAdd } from '../firebase.js'
/* eslint-disable */

import firebase from 'firebase'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [
      // {
      //   name: "Bagel bagel",
      //   description: "Best one so far",
      //   price: 70,
      //   quantity: 1
      // },
    ],
    menuItems: [],
    currentUser: null
  },
  mutations: {
    addBasketItems: (state, basketItems) => {
      if (basketItems instanceof Array) {
        basketItems.forEach(item => {
          if (state.basketItems.find((itemInArray) => item.name === itemInArray.name)) {
            item = state.basketItems.find(
              (itemInArray) => item.name === itemInArray.name
            )
            item.quantity++;
          } else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
              quantity: 1,
            });
          }
        })
      }
    },

    userStatus(state, user) {
      if (user) {
        state.currentUser = user
        console.log("UsernameStore", state.currentUser)
      } else {
        state.currentUser = null
      }
    },

    setMenuItems: state => {
      let menuItems = []

      dbMenuAdd.onSnapshot((snapshotItems) => {
       
        snapshotItems.forEach((doc) => {
          var menuItemData = doc.data();
          menuItems.push({
            ...menuItemData,
            id: doc.id
          })
        })
        console.log(menuItems)
        state.menuItems = menuItems;
        menuItems = []

      }
    )}
  },

  actions: {
    setUser(context, user) {
      context.commit('userStatus', user)
    },
    setMenuItems: context => {
      context.commit('setMenuItems')
    }
  },

  modules: {
  },

  getters: {
    getBasketItems: state => state.basketItems,
    currentUser: state => state.currentUser,
    getMenuItems: state => state.menuItems
  },

})
