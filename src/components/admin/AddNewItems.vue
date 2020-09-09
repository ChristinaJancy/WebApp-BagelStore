<template>
  <section class="about">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="../../assets/bagelshop/bagel-back.jpg"
      cover
    >
      <v-theme-provider>
        <v-container>
          <v-row>
            <v-col offset-md="1" md="5">
              <h1>Add new item</h1>
              <div class="pa-2" id="info">
                <v-text-field label="Name of Bagel" required v-model="name"></v-text-field>
                <v-text-field label="Description" required v-model="description"></v-text-field>
                <v-text-field label="Price" required v-model="price"></v-text-field>
                <v-btn color="success" class="black--text" depressed v-on:click="addNewMenuItem()">Add Item</v-btn>
                <v-btn color="error" class="black--text" depressed>Cancel</v-btn>
              </div>
            </v-col>

            <v-col offset-md="1" md="4">
              <h1>PREVIEW</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="menu-table">
                  <thead>
                    <tr>
                      <th class="text-left" style="width70%">Name</th>
                      <th class="text-left" style="width70%">Price DKK</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span id="td_name">{{name}}</span>
                        <br />
                        <span id="menu_item_description">{{description}}</span>
                      </td>
                      <td id="preview_menuitem_price">{{price}}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
  </section>
</template>

<script>
import { dbMenuAdd } from '../../../firebase.js'

export default {
  data() {
    return {
    name: '',
    description: '',
    price: '',
    // image: null, //var to store image url in
    //btnDisable: true //disable btn before image is uploaded
    
    }
  },
  methods: {  
    // uploadImage(e) { //e is event
    //   //store file in variable
    //    let file = e; 
    //    console.log(file); //check console.log
    // }, 
     
      addNewMenuItem (){
        //debugger
          dbMenuAdd.add({
              name: this.name,
              description: this.description,
              price: this.price,
              // image: this.image //Add new property 
          })
      }
  }
}
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

.col h1 {
  text-align: right;
}

.col:last-child h1 {
  text-align: left;
}

#basket-checkout {
  font-size: 13px;
}

#basket-checkout {
  line-height: 2px;
}
</style>

