<template>
  <v-app id="app">
    <Navigation></Navigation>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
  created() {
    this.$vuetify.theme.light = true;
  },
};
</script>


<style lang="scss">
#app {
  // background-image: url('/assets/bagelshop/bagel-back.jpg');
  // background-size: cover;
  margin: 0 auto;
  padding: 0 auto;
}

.h1 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a {
  color: rgb(255, 255, 255);
  text-decoration: none;

  &.router-link-exact-active {
    text-decoration: none;
    color: white;
  }
}

</style>

