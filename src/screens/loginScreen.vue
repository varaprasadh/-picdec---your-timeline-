<template>
      <div class="container">
            <div class="form">
                <div class="tabs">
                    <div @click="changeTab('signin')"  :class="{'signin':true,'active':(tab=='signin')}">sign in</div>
                    <div @click="changeTab('signup')" :class="{'signup':true,'active':(tab=='signup')}">sign up</div>
                </div>
                <form class="form-container">
                    <input v-model="username" v-on:keydown.enter="checkUname" type="text" placeholder="enter username" name="userid">
                    <div class="error" v-if="uerror">
                        username already taken!
                    </div>
                    <input v-model="password" v-on:input="checkpassword" type="text" placeholder="enter password" name="password">
                    <div class="error" v-if='passError'>
                        password should atleast contain 4 characters
                    </div>
                    <div class="btn" @click="submit"><div class="text">{{tab}}</div></div>
                </form>
            </div>
      </div>
</template>
<script>
import axios from 'axios';
  const url='http://localhost:3000'
export default {
    name:"loginscreen",
    data(){
        return {
            test:"test text",
            tab:'signin',
            username:'',
            password:'',
            uerror:'',
            passError:''
        }
    },
   
   
    methods:{
        
        
        changeTab:function(curtab){
            this.tab=(this.tab=='signin' && curtab!='signin')?'signup':'signin'
        },
        checkUname(){
            //find in db and set
        },
        checkpassword(){
        this.passError=(this.password.length<4)?true:false;
        },
        submit(){
           if(!this.passError && !this.uerror){
                if(this.tab=='signin'){
                  //signin into the page
                axios.post(url+'/signin',{
                    name:this.username,
                    password:this.password
                }).then(res=>{
                   var valid=res.data.valid;
                   if(valid){
                       //save and redirect
                       var auth={name:this.username,
                            password:this.password }
                       localStorage.setItem('auth',JSON.stringify(auth));
                       this.$router.push('/user');
                   }
                   else{
                       alert("invalid entery")
                   }

                }).catch(err=>{
                    console.log(err)
                })
                }
                else{
                  //create user then sign into the page
                }
           }
        }
    }
}
</script>
<style>
.container{
   font-weight: bold;
   font-family: Arial, Helvetica, sans-serif;
   justify-content: center;
   align-items: center;
   display: flex;
   height: 100vh;
   background: linear-gradient(45deg,red,blue);
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(255, 255, 255);
    padding: 0px 0px 10px 0px;
    border-radius: 0px 0px 10px 10px;
    filter: drop-shadow(2px 2px 10px black);
    
}
.form>div{
    align-self: stretch;
}
.tabs{
    display: flex;
    justify-content: space-around;
}
.tabs>div{
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
}
.tabs .active{
    background: orange;
    color: white;
}
  .form-container{ 
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px;
  }
  .form-container>*{
    align-self: stretch;
  }
  input{
      border: none;
      outline: none;
      border-bottom: 2px solid rgb(100, 95, 95);
      padding: 10px 30px;

  }
  input:focus{
      outline: none;
  }
  .error{
       font-size: .8em;
       color:red;
  }
  .btn{
      padding: 10px;
      background: rgb(13, 153, 0);
      text-align: center;
      color:white;
      cursor: pointer;
      margin: 10px;
      filter: drop-shadow(5px 5px 10px black);
  }
  .btn:hover{
       filter: drop-shadow(1px 1px 5px black);
  }
</style>
