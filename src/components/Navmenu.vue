<template>
    <div>
    <div class="burger">
      <h1>To Do<p>{{userName}}</p></h1>
      <transition name="burger">
        <div class="burger__body" @click="show = !show" key='a' v-if="!show" >       
            <button class="burger__btn"></button>   
        </div> 
        <div class="burger__body2" @click="show = !show" key='b' v-else>       
            <button class="burger__btn2"></button>   
        </div> 
     </transition> 
    </div>
    <transition name="header">
      <header class="header" v-if="show">
        <div class="fonColor">
            <nav>
              <router-link tag="p" to="/home" class="btn"><HomePage class="Svg" /><h3>Home</h3></router-link>
              <router-link tag="p" to="/calculator" class="btn"><CalculatorSvg class="Svg"/><h3>Calculator</h3></router-link>
              <router-link tag="p" to="/TodoApp" class="btn"><ListSvg class="Svg" /><h3>Todo list</h3></router-link>
              <router-link tag="p" to="/" class="btn"><ExitPage class="Svg"/><h3>Exit</h3></router-link>
            </nav>
        </div>
      </header>
    </transition>
      <div class="nav-wide-screen">
            <h2>To Do</h2>
            <nav> 
                <router-link to="/home" class="btn"><p  ><HomePage class="Svg" /></p></router-link>
                <router-link to="/calculator" class="btn"><p  ><CalculatorSvg class="Svg"/></p></router-link>
                <router-link to="/TodoApp" class="btn"><p  ><ListSvg class="Svg" /></p></router-link>
                <router-link tag="p" to="/" class="btn"><h3 class="NameUser">{{userName}}</h3><ExitPage class="Svg"/></router-link>
            </nav>
      </div>
  </div>
</template>

<script>
import ListSvg from './svgComponents/ListSvg'
import CalculatorSvg from './svgComponents/CalculatorSvg'
import HomePage from './svgComponents/HomePageSvg'
import ExitPage from './svgComponents/ExitSvg'

export default {
  data(){
    return{
      show: false,
    }
  },
  props: ['userName'],
  components:{
    ListSvg, CalculatorSvg, HomePage, ExitPage
  }
}
</script>

<style scoped>
nav{
  display: flex;
  justify-content: flex-end;
  width: 85%;
}
.nav-wide-screen{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #0dbcd2;
  z-index: 101;
}
p{
  margin: 0;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 20%;
  cursor: pointer;
  transition: background-color 0.2s linear;
}
.btn:hover {
  background: aqua;
}

.btn:hover .Svg{
transform: scale(1.1);
}
.Svg{
  width: 50px;
  transition: transform .15s linear;
}

.header-enter {
  transform: translateY(0);
}
.header-enter-active {
  transform: translateY(-500px);
  transition: all 0.3s linear;
}
.header-enter-to {
  transform: translateY(0);
}

.header-leave-active {
  transition: all 0.3s linear;
}
.header-leave-to{
 transform: translateY(-500px);
}
.bodyApp{
  padding: 0 20px;
}
.header{
  position: absolute;
  height: auto;
  width: 100%;
  background-image: url('../assets/BgApp.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.95;
  z-index: 100;
}

.burger {
  display: flex;
  align-items: center;
  position: relative;
  height: 80px;
  width: 100%;
  background-color: #0dbcd2;
  z-index: 101;
}
.burger__body{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%; 
  background-color: rgba(77, 49, 29, 0.123);
  cursor: pointer;
}
.burger__body2{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%; 
  background-color: rgba(250, 21, 21, 0.295);
  cursor: pointer;
  transform: rotate(45deg);
}

.burger__btn {
  width: 30px;
  height: 3px;
  position: relative;
  background-color: rgb(2, 2, 2);
  border: none;
  outline: none;
  cursor: pointer;
}
.burger__btn::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  width: 30px;
  height: 3px;
  background-color: rgb(2, 2, 2);
}
.burger__btn::before {
  content: "";
  top: 10px;
  left: 0;
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: rgb(2, 2, 2);
}
.burger__btn2 {
  width: 30px;
  height: 3px;
  position: relative;
  background-color: rgb(2, 2, 2);
  border: none;
  outline: none;
  cursor: pointer;
  transform: rotate(90deg);
}
.burger__btn2::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background-color: rgb(2, 2, 2);
  transform: rotate(90deg);
}

.burger-enter-active{
  animation: burger 0.3s linear;
}
.burger-leqane-active{
  animation: burger2 0.3s linear;
}

@keyframes burger {
  from{
    transform: rotate(120deg);
  }
  to{
    transform: rotate(-30deg);
  }
}

h2, h1{
  margin: 0 auto;
  font-size: 40px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: rgb(255, 255, 255);
}
h1 p{
  font-size: 19px;
  color: #f0f8ff;
}

.fonColor{
  width: 100%;
  height: 100%;
  background-color: rgba(2, 197, 197, 0.9);
}
.burger{
  display: none;
}
.NameUser{
  margin-right: 20px;
  font-size: 22px;
  color: #f0f8ff;
}

@media(max-width: 1024px) {
.burger{
  display: flex;
}
.btn {
  display: flex;
  justify-content: center;
  width: 100%;
}
.nav-wide-screen{
  display: none;
}
nav{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
nav h3{
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 10px;
}
h2{
  margin-left: 20px;
}
}

</style>
