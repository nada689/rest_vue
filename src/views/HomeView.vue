<template>
  <v-layout>
    <v-app-bar color="grey-darken-4">
      <v-app-bar-nav-icon
        variant="text"
        @click="drawer = !drawer"
        prominent
        @click.="onOpen"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>My App</v-app-bar-title>

      <v-chip-group>
        <v-chip>Chip 1</v-chip>

        <v-chip>Chip 2</v-chip>

        <v-chip>Chip 3</v-chip>
      </v-chip-group>
      <v-spacer></v-spacer>

      <v-btn class="icons" icon="mdi-magnify" variant="text"></v-btn>

      <v-btn class="icons" icon="mdi-filter-outline" variant="text"></v-btn>

      <v-btn class="icons" variant="text"
        ><v-badge content="3" color="error" offset-x="-8"
          ><v-icon size="25">mdi-heart-outline</v-icon></v-badge
        ></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary left>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-layout>
  <v-container class="mt-4">
    <v-carousel
      height="400"
      show-arrows="hover"
      cycle
      hide-delimiter-background
      interval="3000"
    >
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container
    class="card_container d-flex align-center flex-row mt-3 justify-around"
  >
    <v-card
      v-for="i in 5"
      :key="i"
      class="card d-flex align-center flex-column"
      elevation="10"
    >
      <v-avatar color="grey-darken-3" class="mt-4"><p>NK</p></v-avatar>
      <v-rating
        v-model="rating"
        length="5"
        color="warning"
        half-increments
      ></v-rating>
      <v-card-title>This is title</v-card-title>
      <v-card-text
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sequi
        consequuntur aspernatur veritatis culpa at corrupti incidunt fuga, modi
        harum nostrum molestias alias sit similique delectus deleniti temporibus
        iusto tempore!</v-card-text
      >
    </v-card>
  </v-container>
  <v-layout>
    <v-footer class="bg-grey-darken-3 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="icon mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>

      <div class="footer pt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit
        veritatis fugiat excepturi? Commodi neque odit esse incidunt distinctio
        nesciunt impedit voluptas beatae ipsum, corrupti nobis modi qui aliquid
        doloremque Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        atque ipsam nobis rem velit?
      </div>
    </v-footer>
  </v-layout>
</template>
<style lang="scss">
form {
  width: 50% !important;
}
.card_container {
  gap: 5px !important;
}
</style>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      drawer: false,
      group: null, // Placeholder for your 'group' reactive property
      items: [
        { title: "Home", value: "home" },
        { title: "Account", value: "account" },
        { title: "Blog", value: "blog" },
        { title: "Image", value: "image" },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  mounted() {
    // Example GSAP animations
    gsap.to(".v-rating", {
      duration: 3,
      ease: "power3.out",
      scale: 0.95,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    gsap.fromTo(
      ".v-card-title,.icon",
      {
        y: 1,
      },
      {
        duration: 1,
        ease: "power3.out",
        y: -4,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.2,
      }
    );
    gsap.fromTo(
      ".icons",
      {
        scale: 1,
      },
      {
        duration: 3,
        ease: "power3.out",
        scale: 0.85,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.2,
      }
    );
    gsap.from(".footer", {
      opacity: 0,
      x: -50,
      duration: 3,
      ease: "power3.out",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    gsap.from(".v-app-bar-title,.v-chip,.v-card", {
      opacity: 0,
      x: -50,
      duration: 3,
      ease: "power3.out",
    });
  },
  methods: {
    onOpen() {
      gsap.fromTo(
        ".v-list-item",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 3,
          ease: "power3.out",
        }
      );
    },
  },
};
</script>
