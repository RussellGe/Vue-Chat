<template>
    <div class="homewrapper">
        <div class="showAd">
            <img src="../assets/images/building.jpg" alt="">
        </div>
        <div class="login">
            <span class="title">Chat Room</span>
            <input class="name" type="text" v-model='account' placeholder="account"/>
            <input class="password" type="password" v-model='password' placeholder="password">
            <div class="btnwrapper">
                <div @click="handleLogin" class="button">Login</div>
                <router-link to="register" class="button">Register</router-link>
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
            account:'',
            password: '',
            err: '',
            user: null,
        }
    },
    methods: {
        async handleLogin() {
            console.log(this.account,this.password)
            try {
                this.user = await UserService.userLogin(this.account, this.password)
                
            if(!this.user.account) {
                this.err = 'Account is not right'
            }
            console.log(this.user)
            this.$router.push({path:'message',query:{user:this.user.account}})
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
.showAd {
    height: 600px;
    width: 400px;
    overflow: hidden;
    border-radius: 20px;
    margin-right: 60px;
}
.showAd img {
    height: 600px;
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
@media screen and (max-width: 900px){
    .showAd{
        display: none;
    }
    
}

</style>