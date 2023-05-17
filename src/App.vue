<template>
  <div id="app">
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="./assets/logo.png" class="fs-4 w-25"/>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link mx-1" aria-current="page">로그인</a></li>
          <li class="nav-item"><a href="#" class="nav-link mx-1">회원가입</a></li>
        </ul>
      </header>
        <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">관광지</span><i class="fa-solid fa-map-location-dot"></i></button>
        <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">숙박</span><i class="fa-solid fa-hotel"></i></button>
        <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">쇼핑</span><i class="fa-solid fa-cart-shopping"></i></button>
        <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">문화시설</span><i class="fa-solid fa-gamepad"></i></button>
        <button type="button" class="btn btn-outline-dark d-flex justify-content-between"><span class="me-2">축제</span><i class="fa-solid fa-ticket"></i></button>
      </nav>
    </div>
    </div>
    <router-view/>
  </div>
</template>

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
  width: 15%;
}

.nav-pills > .nav-item > .nav-link {
  color: white;
  background-color: black !important;
}


</style>
