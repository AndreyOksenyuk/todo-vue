<template>
<div class="">
  <!-- <NavMenu /> -->
  <div class="calcApp">
    <h2>Calculator</h2>
    <div class="calc">
      <div class="calc__body">
        <input class="calc__input" v-model="result" type="text">
        <button class="calc__nambers" 
          v-for='num in btnNambers' 
          @click="Input(num)"
        >
          {{num}}
        </button>
        <button class="calc__symbols" 
          v-for="simbol in btnSimbols"
          @click="Input(simbol)"
        >
            {{simbol}}
         </button>
         <button class="equally" @click="Calc">=</button>
        
      </div>
      <div class="calc__history">
        <button @click="DeleteHistory">Clear</button>
        <div class="" v-for="sum in equally">{{sum}}</div>
      </div>
    </div>
  </div>
</div> 
</template>

<script>
// import NavMenu from '../components/Navmenu'
export default {
  data(){
     return{ 
        result: '',
        btnNambers: [1,2,3,4,5,6,7,8,9,'(',0,')'],
        btnSimbols: ['*', '/', '.', '+','-', 'C'],
        equally: []
     } 
  },
  methods:{
    Input(value){
      this.result += value;

      if(value === "C"){
        this.result = ''
      }
    },
    Calc(){
      this.equally.push(eval(this.result));
      this.result = eval(this.result)
    },
    DeleteHistory(){
      this.equally = []
    }

  },
//   components:{
//   NavMenu
// }
 
}

</script>


<style scoped>

h2{
  background: rgba(255, 68, 0, 0.356);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 600;
}

.calcApp {
  max-width: 800px;
  margin: 0 auto;
  margin: 0 auto;
}

.calc {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: auto;
}
.calc__body {
  height: 300px;
  width: 250px;
  
}
.calc__input {
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-align: right;
  padding: 0 5px;
  margin-bottom: 5px;
}
.calc__nambers {
  width: 33.33%;
  height: 50px;
  font-size: 20px;
  background-color: cadetblue;
  border: 1px rgba(64, 119, 121, 0.767) solid;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.1s linear;
  
}
.calc__nambers:active {
  background-color: rgb(28, 137, 141);
  box-shadow: 0px 0px 18px -3px #000000 inset;
}
.calc__symbols {
  width: 33.33%;
  height: 45px;
  background-color: rgb(241, 140, 7);
  font-size: 18px;
  border: 1px rgb(168, 101, 14) solid;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.1s linear;
}
.calc__symbols:active {
  background-color: rgb(177, 108, 18);
  box-shadow: 0px 0px 10px -3px #000000 inset;
}
.calc__history {
  position: absolute;
  top: 0;
  right: 35px;
  margin-left: 15px;
}

.equally{
  width: 100%;
  height: 40px;
  font-size: 22px;
  background-color: darkgoldenrod;
  border: 1px rgb(168, 101, 14) solid;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s linear;
}
.equally:active {
  background-color: rgb(177, 108, 18);
  box-shadow: 0px 0px 10px -3px #000000 inset;
}
.calc__history button {
	box-shadow: -1px 4px 6px -2px #899599;
	background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
	background-color:#ededed;
	border-radius:14px;
	display:inline-block;
	cursor:pointer;
	color:#3a8a9e;
	font-family:Arial;
	font-size:18px;
	padding:7px 24px;
	text-decoration:none;
	text-shadow:-3px 0px 0px #e1e2ed;
  outline: none;
}
.calc__history button:hover {
	background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
	background-color:#bab1ba;
}
.calc__history button:active {
	position:relative;
	top:1px;
}

@media(max-width: 773px){
.calc__history {
  top: 406px;
  width: 100%;
}
.calc__history div{
  width: 100%;
  display: flex;
  justify-content: center;
}
.equally:active {
  background-color: rgb(177, 108, 18);
  box-shadow: 0px 0px 10px -3px #000000 inset;
}
.calc__symbols:active {
  background-color: rgb(177, 108, 18);
  box-shadow: 0px 0px 10px -3px #000000 inset;
}
.calc__nambers:active {
  background-color: rgb(28, 137, 141);
  box-shadow: 0px 0px 18px -3px #000000 inset;
}
}
</style>