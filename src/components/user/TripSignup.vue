<template>


  <header class="pt-5 pb-1">
    <div class="container-xxl bd-gutter pt-md-3 pb-md-5 pr-3 pl-md-3">
      <form>
        <h1 id="title" class="h3 mb-5 fw-normal">Sign up</h1>

        <div id="board">
          
          <div class="mx-auto p-2 mt-5 mb-2" style="width: 70%;">
            <p class="text-start">아이디</p>
            <div class="d-flex ">
              <input type="text" class="form-control form-control-lg vertical-center-input" id="id" v-model="id">
              <a class="ms-2 rounded-pill btn btn-dark col-2 h-100" id="dupCheck" @click="dupCheck">중복확인</a>
            </div>
            <!--<label for="floatingInput">Email address</label>-->
          </div>
          
          <div class="mx-auto p-2  mb-2" style="width: 70%;">
            <p type="password" style="float:left">비밀번호</p>
            <input type="password" class="form-control form-control-lg vertical-center-input" id="password" v-model="password">
          </div>

          <div class="mx-auto p-2  mb-2" style="width: 70%;">
            <p type="password" style="float:left">비밀번호 확인</p>
            <input type="password" class="form-control form-control-lg vertical-center-input" id="password" v-model="password2">
            <p v-if="pwChk == false" class="text-danger text-start">비밀번호가 맞지 않습니다!</p>
          </div>

          

          <div class="mx-auto p-2  mb-2" style="width: 70%;">
            <p style="float:left">이름</p>
            <input type="text" class="form-control form-control-lg vertical-center-input" id="name" v-model="username">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
  
          <div class="mx-auto p-2  mb-2" style="width: 70%;">
            <p style="float:left">이메일</p>
            <input type="email" class="form-control form-control-lg vertical-center-input" id="email" v-model="email">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
  
          <div class="mx-auto p-2 mb-5" style="width: 70%;">
            <p style="float:left">주소</p>
            <input type="text" class="form-control form-control-lg vertical-center-input" id="address" v-model="address">
            <!--<label for="floatingInput">Email address</label>-->
          </div>

        </div>


        <button class="btn btn-lg btn-primary mb-2 rounded-pill" style="width: 15%;" id="submit" @click="signUp">회원가입</button>
      </form>
    </div>
  </header>
</template>

<script>
import http from "@/axios/axios-common.js"
export default {
  name: 'TripSignup',
  data(){
    return{
      id:"",
      username:"",
      password:"",
      password2: "",
      email:"",
      address: "",
      dupChk: false,
      pwChk:true
    }
  },
  watch: {
		id: {
				immediate: true,
				handler() {
					this.dupChk = false
				},
		},
    password: {
				immediate: true,
				handler() {
					if(this.password == this.password2)
            this.pwChk = true
          else
            this.pwChk = false
				},
		},
    password2: {
				immediate: true,
				handler() {
          if(this.password == this.password2)
            this.pwChk = true
          else
            this.pwChk = false
				},
		},

	},
  methods: {
    signUp(){
      if (this.id == undefined || this.id == "")
        alert('아이디를 입력해주세요')
      else if (this.dupCheck == false)
        alert('아이디 중복체크를 해주세요')
      else if (this.username == undefined || this.username == "")
        alert('이름을 입력해주세요')
      else if (this.password == undefined || this.password == "")
        alert('비밀번호를 입력해주세요')
      else if (this.pwChk == false)
        alert('비밀번호를 확인해주세요.')
      else if (this.email == undefined || this.email == "")
        alert('이메일을 입력해주세요')
      else if (this.address == undefined || this.address == "")
        alert('주소를 입력해주세요')
      else {
        http.post("/users", {
          id: this.id,
          name: this.username,
          pass: this.password,
          email: this.email,
          address: this.address

        })
        .then((response) => 
        {
          response;
          this.$router.push({name:"home"})
        })
        .catch(function(error){
          alert(error)
        })        
      }

		},

    dupCheck(){
      if (this.id == undefined || this.id == "")
        alert('아이디를 입력해주세요')
      else{
        http.get("/users/check/" + this.id)
        .then((response) => 
        {
          if (response.data) {
            this.dupChk = response.data
            alert('사용할 수 있는 아이디입니다.')
          }
          else
            alert('이미 존재하는 아이디입니다.')
        })
        .catch(function(error){
          alert(error)
        })
      }

		},
  }
}
</script>

<style>
#need {
text-decoration: underline;
}

button#signin {
  border: none;
  color: black;
}

#submit {
  border: none;
  color: black;
  font-weight: bold;
  background-color: rgb(124, 224, 194);
}

#title{
  font-size: 30px;
  font-weight: bold;
  font-family: Impact;
}

#board{
  font-weight: bold;
}

.vertical-center-input {
    display: flex;
    align-items: center;
}



</style>