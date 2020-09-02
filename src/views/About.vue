<template>
  <section class="about">
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../assets/bagelshop/bagel-back.jpg"
        cover
      >
        <v-theme-provider dark>
          <v-container align="center" fill-height>
              <v-row align="center" class="title--text ma-0">
                <v-col class="text-left ml-1" cols="12" md="6" sm="12" xs="12">
                  <h1 class="infobox-title">Bagel shop - About us</h1>
                </v-col>
              </v-row>

              <v-row align="center" class="title--text ma-0 pa-0">
                <v-col class="text-left" cols="12" md="3"  sm="4" xs="12">
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
                <v-col class="text-left" cols="12" md="3" sm="4" xs="12">
                  <h1 class="infobox-h1">Bagel Shop</h1>
                  <div class="infobox" >
                    <p>Buy out magnificient bagels they taste nice.</p>
                  </div>
                </v-col>
              </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    <!-- <v-parallax :height="$vuetify.breakpoint.smAndDown ? 300 : 300" src="../assets/home/home.jpg"></v-parallax> -->
  </section>
</template>

<script>
export default {
  name: "About",
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

.infobox-title{
    @include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
    font-weight: bold;
    text-transform: uppercase;
    font-size:150%;
    text-align: center;
    padding:50px;
}

</style>

<script>

</script>