<template>
    <div class="messagewrapper">
       <div class="sidebar">
           <Self class="self" />
           <div class="iconwrapper">
                 <i class="iconfont icon-liaotian"></i>
               <router-link class="chatBtn" to="/">
                 <i class="iconfont icon-setting"></i>
               </router-link>
           </div>
           
       </div>
       <Friend class="friend" />
       <Chat class="chat" />
    </div>
</template>
<script>
import Friend from '../components/Friend'
import Chat from '../components/Chat'
import Self from '../components/Self'
export default {
    name: 'Message',
    components:{
        Friend,
        Chat,
        Self
    }
}
</script>
<style scoped>
.messagewrapper {
    display: flex;
}
.sidebar {
 width: 80px;
 height: 100vh;
 background: rgb(146, 139, 139);
 position: relative;
}
.self { 
    position: relative;
    left:15px ;
    top: 30px;
}
.iconwrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    
}
.chatBtn {
    color: black;
    text-decoration: none;
}
i {
    font-size: 40px;
    margin: 25px 0;
    
}
.icon-liaotian {
    font-size: 45px;
}
.friend{
    flex-grow: 1;
    background: rgb(192, 186, 186);
}
.chat{
    flex-grow: 2;
    background: brown;
}
</style>