<template>
  <section class="home">
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../assets/bagelshop/bagel-back.jpg"
        cover
      >
        <v-theme-provider dark>
          <v-container align="center" fill-height>
              <v-row align="center" class="title--text ma-0">
                <v-col class="text-left my-auto" cols="12" md="3" sm="12" xs="12" offset-md="10">
                  <h1 class="infobox-h1">Bagel Shop</h1>
                  <div class="infobox pa-5">
                    <p>Buy out magnificient bagels they taste nice.</p>
                  </div>
                </v-col>
              </v-row>

              <v-row align="center" class="title--text ma-0">
                <v-col class="text-left " cols="12" md="3"  sm="4" xs="12">
                  <h1 class="infobox-h1">Bagel Shop</h1>
                  <div class="infobox">
                    <p>Buy out magnificient bagels they taste nice.</p>
                  </div>
                </v-col>
                <v-col class="text-left" cols="12" md="3" sm="4" xs="12">
                  <h1 class="infobox-h1">Bagel Shop</h1>
                  <div class="infobox">
                    <p>Buy out magnificient bagels they taste nice.</p>
                  </div>
                </v-col>
                <v-col class="text-left"  cols="12" md="3" sm="4" xs="12">
                  <h1 class="infobox-h1">Bagel Shop</h1>
                  <div class="infobox" >
                    <p>Buy out magnificient bagels they taste nice.</p>
                  </div>
                </v-col>
              </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
  </section>
</template>

<script scoped>
export default {
  name: "Home",
  show: true,

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>


@mixin infobox_mixin($border-radius, $border-color, $padding, $margin-bottom, $color){
    border:$border-radius solid $border-color;
    padding:$padding;
    margin-bottom:$margin-bottom;
    color:$color;
};

.infobox{
  padding:20px;
}

.infobox-h1{
    @include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
    font-weight: bold;
    text-transform: uppercase;
    font-size:16px;
    text-align: center;
}

</style>

<script>

</script>