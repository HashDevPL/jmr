<template>
    <header>
        <nav v-if="!mobile">
            <router-link to="/about">about</router-link>
            <router-link to="/offer">offer</router-link>
            <router-link class="logo" to="/"></router-link>
            <router-link to="/gallery">gallery</router-link>
            <router-link to="/contact">contact</router-link>
        </nav>
        <template v-if="mobile">
            <router-link class="logo" to="/"></router-link>
            <nav :class="{'active':openBurger}">
                <router-link @click.native="showMenu" to="/about">about</router-link>
                <router-link @click.native="showMenu" to="/offer">offer</router-link>
                <router-link @click.native="showMenu" to="/gallery">gallery</router-link>
                <router-link @click.native="showMenu" to="/contact">contact</router-link>
            </nav>
            <div class="burger" :class="{'open':openBurger}" @click="showMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </template>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            openBurger: false
        }
    },
    methods: {
        showMenu: function() {
            this.openBurger=!this.openBurger;
        }
    },
    computed: {
        mobile: function() {
            if(window.innerWidth<500) {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style lang="less">
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    nav {
        display: flex;
        align-items: center;
        a {
            font-size: 14px;
            color: #ffffff;
            font-weight: 300;
            text-transform: uppercase;
            text-decoration: none;
            padding: 0 40px;
            transition: all .3s ease-in-out;
            &:hover {
                color: #000000;
                .logo {
                    background: url(../assets/logohover.png) center no-repeat;
                }
            }
        }
        .logo {
            display: block;
            background: url(../assets/logo.png) center no-repeat;
            width: 56px;
            height: 55px;
            padding: 0;
            transition: all .3s ease-in-out;
            &:hover {
                background: url(../assets/logohover.png) center no-repeat;
            }
        }
    }
}
@media (max-width:500px) {
    header {
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        .logo {
            display: block;
            background: url(../assets/logo.png) center no-repeat;
            width: 56px;
            height: 55px;
            padding: 0;
            z-index: 999;
        }
        nav {
            display: none;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            background: #000000;
            a {
                font-size: 20px;
                padding: 20px 0;
            }
        }
        nav.active {
            display: flex;
        }
        .burger {
            width: 35px;
            height: 20px;
            transform: rotate(0deg);
            transition: 0.5s ease-in-out;
            cursor: pointer;
			span {
			    display: block;
				position: absolute;
				height: 3px;
				width: 100%;
				background: #ffffff;
				border-radius: 9px;
				opacity: 1;
				left: 0;
				transform: rotate(0deg);
				transition: 0.25s ease-in-out;
			}
			span:nth-child(1) {
				top: 0px;
			}
			span:nth-child(2) {
				top: 7px;
			}
			span:nth-child(3) {
				top: 14px;
			}
        }
        .burger.open span:nth-child(1) {
            top: 8px;
            transform: rotate(135deg);
        }
        .burger.open span:nth-child(2) {
            opacity: 0;
        }
        .burger.open span:nth-child(3) {
            top: 8px;
            transform: rotate(-135deg);
        }
    }
}
</style>