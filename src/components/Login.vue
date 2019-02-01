<template>
    <div class="login-wrapper" @click="clickedOutside">
        <div v-if="!succes" class="login" >
            <h3>Are you a Mountain Knight?</h3>
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button class="btn-login" @click="login">LOG IN</button>
            <div v-if="showError" class="error">{{error}}</div>
        </div>
        <div v-if="succes" class="loged">{{message}}</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            succes: false,
            showError: false,
            message: '',
            error: ''
        }
    },
    methods: {
        login: function() {
            axios.post('https://recruitment-api.pyt1.stg.jmr.pl/login',{
                login: this.email,
                password: this.password
            }).then((response) => {
                if(response.data.status=="error") {
                    this.error=response.data.message;
                    this.showError=true;
                } else if(response.data.status=="ok") {
                    this.message = response.data.message;
                    this.succes=!this.succes;
                } else {
                    this.error="Something went wrong";
                    this.showError=!this.showError;
                }
            })
        },
        close: function() {
            this.$emit('close');
        },
        clickedOutside: function(e) {
            if (!e.target.closest(".login, .loged")) {
                this.close();
            }
        }
    }
}
</script>

<style <style lang="less">
.login-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.79);
    .login {
        background: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 45px;
        h3 {
            margin: 0 0 40px 0;
        }
        input {
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1px solid #292d2f;
            border-radius: 0;
            padding: 10px;
            text-align: center;
            margin-bottom: 30px;
            outline: none;
            width: 100%;
        }
        .btn-login {
            padding: 17px 95px;
            margin-top: 20px;
            background: #ddbe5c;
            border: none;
            letter-spacing: 2px;
            font-size: 14px;
            color: #ffffff;
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
        .error {
            color: #ff0000;
            margin-top: 30px;
        }
    }
    .loged {
        background: #ffffff;
        padding: 45px;
        position: relative;
        .close {
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
}

@media (max-width:500px) {
    .login-wrapper {
        .login {
            padding: 20px;
            .btn-login {
                padding: 12px 65px;
                margin-top: 0;
            }
        }
    }
}
</style>