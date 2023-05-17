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



  
  <!-- footer -->
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img src="./assets/logo.png" class="fs-4 w-50"/>
      </a>
      <p class="text-body-secondary" align="left">© MinTrip 2023</p>
    </div>

    <div class="col mb-3" style="width: 120px;">
    </div>

    <div class="col mb-3 img-responsive center-block d-flex" style="width: 170px; height: 100px; ">
      <h5></h5>
      <a href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" >
        <img src="./assets/ssafy-logo-small.bd603755.png" class="fs-4 w-100"/>
      </a>
    </div>

    <div class="col mb-3 img-responsive center-block d-flex" style="width: 190px; height: 100px ">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img src="./assets/문화체육관광부.png" class="fs-5 w-100 "/>
      </a>
    </div>

    <div class="col mb-3 img-responsive center-block d-flex" style="width: 190px; height: 100px">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img src="./assets/tour-api-logo.ebcb1140.png" class="fs-5 w-100"/>
      </a>
    </div>

    <div class="col mb-3" style="width: 120px;">
    </div>

    <div class="col mb-3">
      <h5>고객 센터 </h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp" class="nav-link p-0 text-body-secondary">문의 페이지: ssafy.com</a></li>
        <li class="nav-item mb-2"><a class="nav-link p-0 text-body-secondary">이메일 문의: ssafy@ssafy.com</a></li>
        <li class="nav-item mb-2"><a class="nav-link p-0 text-body-secondary">전화 문의: 02-3429-5100</a></li>
      </ul>
    </div>
  </footer>
</div>



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
