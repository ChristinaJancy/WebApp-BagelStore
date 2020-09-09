<template>
  <section class="login">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="../../assets/bagelshop/bagel-back.jpg"
      cover
    >
      <v-theme-provider>
        <v-container align="center">
          <!--fill height-->
          <v-row>
            <v-col offset-md="3" md="6" xs="12">
              <h1>Administator login</h1>
              <div id="info" class="px-2 pb-2">
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field v-model="password" label="Password" required></v-text-field>
                <v-row>
                  <v-col cols="6" align="right">
                    <v-btn v-on:click.prevent="signOut()" color="error" x-large>Sign Out</v-btn>
                  </v-col>
                  <v-col cols="6" align="left">
                    <v-btn v-on:click.prevent="signIn()" color="success" x-large>Login</v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      //console.log("Test user login info: ", this.email, this.password)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("/admin");
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("wrong password");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },

    signOut() {
      firebase.auth().signOut().then(() => {
          alert("Logged Out");
          this.$router.replace("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin infobox_mixin(
  $border-radius,
  $border-color,
  $padding,
  $margin-bottom,
  $color
) {
  border: $border-radius solid $border-color;
  padding: $padding;
  margin-bottom: $margin-bottom;
  color: $color;
}

h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    5px,
    map-get($colorz, white)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}

// Starts here:
#info {
  background-color: rgb(255, 255, 255);
  padding: 20px;
}

tr th {
  font-weight: bold;
}

#td_name {
  font-weight: bold;
}
#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: black;
  font-size: 13px;
}
</style>

