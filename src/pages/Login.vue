<template>
      <div class="empti">
      <form class="form" @submit.prevent="onSubmit">
         <div class="headerForm"><p>Авторизация</p></div>
            <div class="input-wraper">
               <div class="name input">
                  <input 
                     type="text" 
                     placeholder="Ваше имя" 
                     id="inputName" 
                     class="valid"
                     v-model.trim="name"
                     :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength) || ($v.name.$dirty && !$v.name.maxLength)}"
                  >
                  <span 
                     class="descriptions"
                     v-if="$v.name.$dirty && !$v.name.required"
                  >Поле имя не должно быть пустым
                  </span>
                  <span 
                     class="descriptions"
                     v-if="$v.name.$dirty && !$v.name.minLength"
                  >Поле имя должно быть не менее {{$v.name.$params.minLength.min}} символов
                  </span>
                  <span 
                     class="descriptions"
                     v-if="$v.name.$dirty && !$v.name.maxLength"
                  >Поле имя должно быть менее {{$v.name.$params.maxLength.max}} символов
                  </span>
               </div>
               <div class="password input">
                  <input 
                     type="password" 
                     placeholder="Пароль" 
                     id="inputPass" 
                     class="valid"
                     v-model.trim="password"
                     :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) || ($v.password.$dirty && !$v.password.alphaNum)}"
                  >
                  <span  
                     class="descriptions"
                     v-if="$v.password.$dirty && !$v.password.required"
                  >Поле пароль не должно быть пустым
                  </span>
                  <span  
                     class="descriptions"
                     v-if="$v.password.$dirty && !$v.password.alphaNum"
                  >Пароль должен состоять с (a-z, A-Z, 0-9)
                  </span>
                  <span  
                     class="descriptions"
                     v-else-if="$v.password.$dirty && !$v.password.minLength"
                  >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов
                  </span>
                  
               </div>
               <div class="btn"><button class="submitBtn" type="submit" @click="UserName">Воти</button></div>
            </div>
         <div class="footerForm"><router-link tag="p" to="/home">Пропустить &rsaquo;</router-link></div>
      </form>
   </div>
</template>
<script>
import { required, minLength, maxLength, alphaNum} from 'vuelidate/lib/validators/'

export default {
   name: 'login',
   data: () => ({
      name: '',
      password: '',
   }),
  methods: {
      onSubmit(){
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      };
      this.$router.push('/home') 
    },
    UserName(name){
      this.$emit('user-name', this.name)
    }
   },
   validations:{
      name: {
         required,
         minLength: minLength(3),
         maxLength: maxLength(15)
      },
      password: {
         required,
         minLength: minLength(5),
         alphaNum
      }
   }
}
</script>

<style scoped>
.empti{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.445);
   margin: 0;
}

.form{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   position: relative;
   width: 500px;
   height: 450px;
   background-color: #ffffff;
   font-family: Arial,
   sans-serif;
}
.input-wraper{
   width: 100%;
   height: 300px;
}

.input{
   display: flex;
   align-items: center;
   position: relative;
   flex-direction: column;
   padding: 0 10px 0 40px;
   width: 100%;
   height: 100px;
}
.descriptions{
   position: absolute;
   bottom: 5px;
   left: 60px;
   font-size: 15px;
   color: #dc143c;
}

.valid{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 400px;
   height: 40px;
   border: 1px solid rgb(39, 39, 39);
   border-radius: 3px;
   padding: 0 10px;
   outline: rgb(0, 0, 0);
   font-size: 18px;
}
.invalid{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 400px;
   height: 40px;
   border: 1px solid rgb(248, 3, 3);
   border-radius: 3px;
   padding: 0 10px;
   outline: rgb(0, 0, 0);
   font-size: 18px;
}
.valid:focus{
   outline: #008000;
   border: 1px #008000 solid;
   background-color: rgba(124, 255, 130, 0.185);
} 

.invalid:focus{
   border: 1px #d12d04 solid;
   background-color: rgba(255, 73, 27, 0.096);
   outline: #db1818;
}
.btn{
   display: flex;
   justify-content: center;
   width: 100%;
   height: 50px;
   margin-top: 30px;
}
.submitBtn{
   height: 80%;
   width: 160px;
   font-size: 18px;
   outline: none;
   background-color: rgba(44, 116, 209, 0.788);
   border: 1px solid blue;
   border-radius: 50px;
   cursor: pointer;
   transition: all .1s linear;
}
.submitBtn:hover{
   background-color: rgb(4, 84, 189);
   border: 1px solid rgb(0, 0, 126);
   color: cornsilk;
}

.headerForm{
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: -10px;
   height: 50px;
   width: 100%;
   background-color: rgb(44, 116, 209);
   border-end-end-radius: 30px;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
}
.headerForm p{
   font-size: 30px;
   color: #fff;
   margin: 0;
}

.footerForm{
   position: absolute;
   bottom: -10px;
   height: 50px;
   width: 100%;
   background-color: rgb(230, 230, 230);
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
}
.footerForm p{
   font-size: 18px;
   cursor: pointer;
   color: rgb(133, 123, 123);
   transition: color 0.1s linear;
}
.footerForm p:hover{
   color: #000;
}

@media (max-width: 515px){
   .valid{
      width: 300px;
   }
   .invalid{
      width: 300px;
   }
}
@media(max-width: 420px){
  .descriptions{
    position: absolute;
    bottom: 6px;
    left: 33px;
    font-size: 14px;
  }
}


</style>