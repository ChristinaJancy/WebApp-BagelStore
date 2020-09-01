<template>
  <div id="Navigation">

    <v-navigation-drawer v-model="drawer" app dark clipped>

      <v-list dense>
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="navdrawer--text">mdi-information-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="navdrawer--text">About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item link>
          <v-list-item-action>
            <v-icon class="navdrawer--text">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="navdrawer--text">Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-tool-bar-title>
          <span class="font-weight-black title--text h1">BAGELS BY </span>
          <span class="font-weight-light title--text h1">Chris</span>
        </v-tool-bar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!--
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      -->
    </v-app-bar>
  </div>
</template>


<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss" scoped>

</style>