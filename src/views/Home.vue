<template>
  <div class="home">
    <div class="headline">Mountain kingdom</div>
    <button class="enter" @click="showLogin=true">ENTER THE GATES</button>
    <Login v-if="showLogin" @close="showLogin=false"></Login>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  },
  data() {
    return {
      showLogin: false
    }
  }
}
</script>

<style lang="less">
.home {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.headline {
		font-family: 'Lobster', cursive;
		font-size: 72px;
		color: #ffffff;
		margin-bottom: 60px;
	}
	.enter {
		display: block;
		padding: 17px 45px;
		background: #ddbe5c;
		border: none;
		font-size: 14px;
		color: #ffffff;
		letter-spacing: 2px;
		outline: none;
		border-radius: 24px;
		background: linear-gradient(to right, #ddbe5c 0%,#cda628 100%);
		background-size: 100%;
		transition: all .3s ease-in-out;
		&:hover {
			cursor: pointer;
			background-size: 200%;
			transform: scale(1.05);
		}
	}
}
@media (max-width:500px) {
	.home {
		.headline {
			font-size: 38px;
			margin-bottom: 30px;
		}
		.enter {
			padding: 12px 30px;
		}
	}
}
</style>