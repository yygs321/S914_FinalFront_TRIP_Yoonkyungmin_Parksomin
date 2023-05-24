<template>
  <div id="app">
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="./assets/logo.png" class="fs-4 w-25"/>
        </a>
        <ul class="nav nav-pills" >
          <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="loginBtn" aria-current="page"><router-link to="/login">로그인</router-link></a></li>
          <li class="nav-item"><a class="nav-link mx-1 rounded-pill" id="signBtn"><router-link to="/signup">회원가입</router-link></a></li>
        </ul>
      </header>
    </div>

    <router-view/>


    <trip-footer></trip-footer>
  

    
  </div>
</template>

<script>
  import TripFooter from './components/layout/TripFooter.vue'

	export default{
		components: {TripFooter}
	}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  width: 70%;
  margin: 0 auto !important;
}

.d-flex{
  align-items: center;
}

.d-flex > button {
  width: 10%;
}

.nav-pills > .nav-item > .nav-link {
  color: white;
  background-color: black !important;
}

#loginBtn > a, #signBtn > a{
  text-decoration: none !important;
  color: white !important;
}


</style>
