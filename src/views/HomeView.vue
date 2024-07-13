<template>
  <section class="parallax">
    <h1 id="text">parallax website</h1>
    <img src="../assets/gate-left.png" id="gate-left" />
    <img src="../assets/gate-right.png" id="gate-right" />
    <img src="../assets/tree-left.png" id="tree-left" />
    <img src="../assets/tree-right.png" id="tree-right" />
    <img src="../assets/grass.png" id="grass" />
  </section>
  <section class="sec">
    <h2>parallax scrolling website</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies
      sem ut est cursus molestie. Sed quis elit aliquet, efficitur nisi eu,
      dignissim leo. Phasellus a convallis dui. Proin feugiat ac massa sed
      porttitor. Donec eu sem sagittis, condimentum ex id, aliquet est. Maecenas
      condimentum egestas odio, a consectetur metus tempus ut. Morbi metus ante,
      malesuada vitae sodales vitae, feugiat vel quam. Quisque egestas commodo
      ex. Nulla porttitor tortor velit, quis sodales leo lobortis sit amet.
      Donec quis nibh quis ante fermentum vulputate at quis nisl. Phasellus
      egestas ligula ut convallis egestas. Integer porttitor finibus dui
      eleifend mattis. Integer pharetra eleifend accumsan. Quisque placerat
      dolor vitae elementum imperdiet. Curabitur lorem nibh, pretium vitae
      mattis a, ornare et odio. Maecenas non ullamcorper tortor. Vestibulum at
      quam dignissim, iaculis quam nec, imperdiet diam. Praesent tincidunt sit
      amet arcu vitae sagittis. Integer non volutpat ante, non ultrices purus.
      Nam faucibus justo in leo consectetur, a suscipit metus aliquam. Nunc id
      malesuada augue. Nullam consequat fermentum lorem, vel efficitur erat
      tristique nec. Morbi tempor lorem velit, ut mollis elit tincidunt a. Ut
      mollis mi euismod diam aliquam, quis fringilla leo ornare. Donec nec enim
      cursus, luctus est in, maximus metus. Phasellus congue quam at faucibus
      malesuada. Mauris ultrices orci ac dictum dapibus. Vivamus viverra lacus
      felis. Integer lorem velit, placerat vitae ligula vel, fermentum bibendum
      velit.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies
      sem ut est cursus molestie. Sed quis elit aliquet, efficitur nisi eu,
      dignissim leo. Phasellus a convallis dui. Proin feugiat ac massa sed
      porttitor. Donec eu sem sagittis, condimentum ex id, aliquet est. Maecenas
      condimentum egestas odio, a consectetur metus tempus ut. Morbi metus ante,
      malesuada vitae sodales vitae, feugiat vel quam. Quisque egestas commodo
      ex. Nulla porttitor tortor velit, quis sodales leo lobortis sit amet.
      Donec quis nibh quis ante fermentum vulputate at quis nisl. Phasellus
      egestas ligula ut convallis egestas. Integer porttitor finibus dui
      eleifend mattis. Integer pharetra eleifend accumsan. Quisque placerat
      dolor vitae elementum imperdiet. Curabitur lorem nibh, pretium vitae
      mattis a, ornare et odio. Maecenas non ullamcorper tortor. Vestibulum at
      quam dignissim, iaculis quam nec, imperdiet diam. Praesent tincidunt sit
      amet arcu vitae sagittis. Integer non volutpat ante, non ultrices purus.
      Nam faucibus justo in leo consectetur, a suscipit metus aliquam. Nunc id
      malesuada augue. Nullam consequat fermentum lorem, vel efficitur erat
      tristique nec. Morbi tempor lorem velit, ut mollis elit tincidunt a. Ut
      mollis mi euismod diam aliquam, quis fringilla leo ornare. Donec nec enim
      cursus, luctus est in, maximus metus. Phasellus congue quam at faucibus
      malesuada. Mauris ultrices orci ac dictum dapibus. Vivamus viverra lacus
      felis. Integer lorem velit, placerat vitae ligula vel, fermentum bibendum
      velit.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies
      sem ut est cursus molestie. Sed quis elit aliquet, efficitur nisi eu,
      dignissim leo. Phasellus a convallis dui. Proin feugiat ac massa sed
      porttitor. Donec eu sem sagittis, condimentum ex id, aliquet est. Maecenas
      condimentum egestas odio, a consectetur metus tempus ut. Morbi metus ante,
      malesuada vitae sodales vitae, feugiat vel quam. Quisque egestas commodo
      ex. Nulla porttitor tortor velit, quis sodales leo lobortis sit amet.
      Donec quis nibh quis ante fermentum vulputate at quis nisl. Phasellus
      egestas ligula ut convallis egestas. Integer porttitor finibus dui
      eleifend mattis. Integer pharetra eleifend accumsan. Quisque placerat
      dolor vitae elementum imperdiet. Curabitur lorem nibh, pretium vitae
      mattis a, ornare et odio. Maecenas non ullamcorper tortor. Vestibulum at
      quam dignissim, iaculis quam nec, imperdiet diam. Praesent tincidunt sit
      amet arcu vitae sagittis. Integer non volutpat ante, non ultrices purus.
      Nam faucibus justo in leo consectetur, a suscipit metus aliquam. Nunc id
      malesuada augue. Nullam consequat fermentum lorem, vel efficitur erat
      tristique nec. Morbi tempor lorem velit, ut mollis elit tincidunt a. Ut
      mollis mi euismod diam aliquam, quis fringilla leo ornare. Donec nec enim
      cursus, luctus est in, maximus metus. Phasellus congue quam at faucibus
      malesuada. Mauris ultrices orci ac dictum dapibus. Vivamus viverra lacus
      felis. Integer lorem velit, placerat vitae ligula vel, fermentum bibendum
      velit.
    </p>
  </section>
</template>

<script>
export default {
  mounted() {
    this.moveText();
  },
  methods: {
    moveText() {
      let text = document.getElementById("text");
      let tree_left = document.getElementById("tree-left");
      let tree_right = document.getElementById("tree-right");
      let gate_left = document.getElementById("gate-left");
      let gate_right = document.getElementById("gate-right");
      window.addEventListener("scroll", () => {
        let value = window.scrollY;
        text.style.marginTop = value * 2.5 + `px`;
        tree_left.style.left = value * -1.5 + `px`;
        tree_right.style.left = value * 1.5 + `px`;
        gate_left.style.left = value * 0.3 + `px`;
        gate_right.style.left = value * -0.3 + `px`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.parallax {
  position: relative;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/background.png") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  #text {
    position: absolute;
    font-size: 5em;
    color: #1b283a;
    text-shadow: 2px 4px 5px #f9f9f9;
  }
  img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  #gate-left {
    position: absolute;
    transform: translateX(-282px);
  }
  #gate-right {
    position: absolute;
    transform: translateX(305px);
  }
}
.sec {
  background-color: #020912;
  position: relative;
  padding: 30px 100px;
  h2 {
    color: #fff;
    font-size: 3em;
  }
  p {
    color: #fff;
    font-size: 1em;
    text-align: justify;
  }
}
</style>
