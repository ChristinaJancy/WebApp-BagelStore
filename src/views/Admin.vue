<template>
  <section class="about">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="../assets/bagelshop/bagel-back.jpg"
      cover
    >
      <v-theme-provider dark>
        <v-container>
          <v-row>
            <v-col offset-md="1" md="5">
              <h1>All Items</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="menu-table" light>
                  <thead>
                    <tr>
                      <th class="text-left" style="width:70%;">
                        Name
                        <v-btn small text to="/addnew">
                          <v-icon color="navdrawer">mdi-plus</v-icon>
                          <span style="padding:0 10px;">Add Item</span>
                        </v-btn>
                      </th>
                      <th class="text-left" style="width=100%;">Price</th>
                      <th class="text-left" style="width=100%">Edit</th>
                      <th class="text-left" style="width=100%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in menuItems" :key="item.name">
                      <td>
                        <span id="td_name">{{item.name}}</span>
                        <br />
                        <span id="menu_item_description">{{item.description}}</span>
                      </td>
                      <td>{{ item.price }}</td>

                      <td>
                        <v-btn depressed text small>
                          <v-icon color="navdrawer">mdi-pen</v-icon>
                        </v-btn>
                      </td>
                      <td>
                        <v-btn @click="deleteItem(item.id)" depressed text small>
                          <v-icon color="navdrawer">mdi-delete</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-col>

            <v-col offset-md="1" md="4">
              <h1>PREVIEW</h1>
              <div class="pa-2" id="info">Right</div>
            </v-col>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
    <!-- <v-parallax :height="$vuetify.breakpoint.smAndDown ? 300 : 300" src="../assets/home/home.jpg"></v-parallax> -->
  </section>
</template>

<script>
import { dbMenuAdd } from "../../firebase.js";

export default {
  data() {
    return {
      basket: [],
      menuItems: [],
    };
  },
  created() {
    dbMenuAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        var menuItemData = doc.data();
        this.menuItems.push({
          id: doc.id,
          name: menuItemData.name,
          description: menuItemData.description,
          price: menuItemData.price,
        });
      });
    });
  },
  methods: {
    deleteItem(id){ //we want to target/grab the id
        dbMenuAdd.doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
          }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    },
    addToBasket(item) {
      if (this.basket.find((itemInArray) => item.name === itemInArray.name)) {
        item = this.basket.find(
          (itemInArray) => item.name === itemInArray.name
        );
        this.increaseQnt(item);
      } else {
        this.basket.push({
          name: item.name,
          price: item.price,
          quantity: 1,
        });
      }
    },
    increaseQnt(item) {
      item.quantity++;
    },
    decreaseQnt(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },
  computed: {
    subTotal() {
      var subCost = 0;
      for (var items in this.basket) {
        var individualItem = this.basket[items];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    total() {
      var deliveryPrice = 10;
      var totalCost = this.subTotal;
      return totalCost + deliveryPrice;
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

