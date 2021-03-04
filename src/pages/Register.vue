<template>
    <div class="homewrapper">
        <div class="login">
            <span class="title">Register</span>
            <input class="name" type="text" v-model="account" placeholder="account"/>
            <input class="password" type="password" v-model="password" placeholder="password">
            <input class="password" type="password" v-model="passwordConfirm" placeholder="password again">
            <div class="btnwrapper">
                <router-link to="/" class="button">Back</router-link>
                <div class="button" @click="handleSubmit">Done</div>
            </div>
            <p>{{err}}</p>
        </div>
    </div>
</template>
<script>
import UserService from '../UserService'

export default {
    name: 'Home',
    data() {
        return {
            account: '',
            password: '',
            passwordConfirm: '',
            err: ''
        }
    },
    methods: {
        handleSubmit() {
            if(!(this.account&&this.password&&this.passwordConfirm)) {
                this.err = 'You should fill in all the information first'
                return
            }
            if(this.password != this.passwordConfirm) {
                this.err = 'You entered different Passwords'
                return
            }
            try {
              UserService.createUser(this.account, this.password)
              this.err = 'success'
            } catch(err) {
            this.error = err.message
        }
        }
    }
}
</script>
<style scoped>
.homewrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 100px 0;
    box-sizing: border-box;
    height: 600px;
    width: 400px;
    background: rgb(192, 186, 186);
    border-radius: 20px;
    font-family: 'Roboto Slab', serif;
}
.title {
    font-size: 40px;
    font-weight: 900;
}
input {
    height: 40px;
    width: 250px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    font-family: 'Roboto Slab', serif;
}
.btnwrapper {
    display:flex;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    padding:  0 30px;
}
.button {
    background: rgb(146, 139, 139);
    height: 40px;
    width: 100px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
}
.button:hover {
   background: rgb(97, 93, 93); 
}

</style>