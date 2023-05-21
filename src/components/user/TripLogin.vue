<template>


  <header class="pt-5 pb-1">
    <div class="container-xxl bd-gutter pt-md-3 pb-md-5 pr-3 pl-md-3">
      <form>
        <h1 id="title" class="h3 mb-5 fw-normal">Login</h1>


        <div id="board">

          <div class="form-floating mx-auto p-2 mt-5 mb-2" style="width: 70%;">
            <p style="float:left">Id</p>
            <input type="text" class="form-control" id="id" placeholder="ssafy">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
          
          <div class="form-floating mx-auto p-2" style="width: 70%;">
            <p type="password" style="float:left">Password</p>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
  
          
        </div>
        
        <div class="form-floating mx-auto p-2 mt-5 mb-2" id="need">
          <ul class="nav justify-content-center pb-3 mb-2">
            <li class="nav-item"><a class="nav-link px-2 text-body-secondary" id="sign"><router-link to="/signup">회원가입</router-link></a></li>
            <li class="nav-item"><a class="nav-link px-2 text-body-secondary" id="pass"><router-link to="/signup">비밀번호 찾기</router-link></a></li>
          </ul>
        </div>


        <div class="checkbox mt-1 mb-3" >
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button id="submit" class="btn btn-lg btn-primary mb-2 rounded-pill" style="width: 15%;" type="submit">Login</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TripLogin',
}
</script>

<style>
#need {
text-decoration: underline;
}

#submit {
  border: none;
  color: black;
  font-weight: bold;
}

#title{
  font-size: 30px;
  font-weight: bold;
  font-family: Impact;
}

#board{
  font-weight: bold;
}

#sign > a, #pass > a{
  text-decoration: none !important;
  color: black !important;
}

#submit {
  border: none;
  color: black;
  font-weight: bold;
  background-color: rgb(124, 224, 194);
}
</style>