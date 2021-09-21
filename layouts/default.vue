<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
    <div id="background-radial-gradient"></div>
  </div>
</template>


<style>
#background-radial-gradient {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  width: 200vw;
  height: 200vh;
  background: radial-gradient(50% 50% at 50% 50%,#fc077d10 0,rgba(255,255,255,0) 100%);
  transform: translate(-50vw,-100vh);
  z-index: -1;
}
</style>