<template>


  <header class="pt-5 pb-1">
    <div class="container-xxl bd-gutter pt-md-3 pb-md-5 pr-3 pl-md-3">
      <form>
        <h1 id="title" class="h3 mb-5 fw-normal">Login</h1>


        <div id="board">

          <div class="form-floating mx-auto p-2 mt-5 mb-2" style="width: 70%;">
            <p style="float:left">Id</p>
            <input type="text" class="form-control" id="id" v-model="user.userid" placeholder="ssafy" @keyup.enter="confirm">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
          
          <div class="form-floating mx-auto p-2" style="width: 70%;">
            <p type="password" style="float:left">Password</p>
            <input type="password" class="form-control" id="pass" v-model="user.userpwd" placeholder="Password" @keyup.enter="confirm">
          </div>
  
          
        </div>
        
        <div class="form-floating mx-auto p-2 mt-5 mb-2" id="need">
          <ul class="nav justify-content-center pb-3 mb-2">
            <li class="nav-item"><a class="nav-link px-2 text-body-secondary" id="sign"><router-link to="/signup">회원가입</router-link></a></li>
            <li class="nav-item"><a class="nav-link px-2 text-body-secondary" id="findpass"><router-link to="/signup">비밀번호 찾기</router-link></a></li>
          </ul>
        </div>


        <div class="checkbox mt-1 mb-3" >
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button id="submit" class="btn btn-lg btn-primary mb-2 rounded-pill" style="width: 15%;" type="button" @click="confirm"><router-link to="/">Login</router-link></button>
      </form>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "TripLogin",
  data() {
    return {
      // isLoginError: false,
      user: {
        userid: null,
        userpwd: null,
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      // console.log("1. confirm() token >> " + token);
      if (this.isLogin) {
        
        await this.getUserInfo(token);
        // console.log("4. confirm() userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },
    movePage() {
      this.$router.push({ name: "join" });
    },
  },
};

</script>

<style>
#need {
text-decoration: underline;
}



#title{
  font-size: 30px;
  font-weight: bold;
  font-family: Impact;
}

#board{
  font-weight: bold;
}

#sign > a, #findpass > a{
  text-decoration: none !important;
  color: black !important;
}

#submit >a{
  text-decoration: none !important;
  border: none;
  color: black;
  font-weight: bold;
  background-color: rgb(124, 224, 194);
}
</style>