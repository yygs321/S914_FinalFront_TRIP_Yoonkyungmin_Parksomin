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

.d-flex{
  align-items: center;
}

.nav-pills > .nav-item > .nav-link {
  color: white;
  background-color: black !important;
}

</style>
