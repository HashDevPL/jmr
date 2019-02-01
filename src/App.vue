<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style lang="less">
* {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	height: 100vh;
	font-family: 'Josefin Sans', sans-serif;
}
#app {
	background: url(assets/background.jpg) no-repeat;
	background-position: bottom;
	background-size: cover;
	height: 100vh;
	overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
	opacity: 0
}
</style>