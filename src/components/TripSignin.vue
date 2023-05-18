<template>


  <header class="pt-5 pb-1">
    <div class="container-xxl bd-gutter pt-md-3 pb-md-5 pr-3 pl-md-3">
      <form>
        <h1 id="title" class="h3 mb-5 fw-normal">Sign in</h1>

        <div id="board">
          
          <div class="form-floating mx-auto p-2 mt-5 mb-2" style="width: 70%;">
            <p style="float:left">Id</p>
            <input type="text" class="form-control" id="id" placeholder="ssafy">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
  
          <div class="form-floating mx-auto p-2  mb-2" style="width: 70%;">
            <p style="float:left">Email</p>
            <input type="email" class="form-control" id="email" placeholder="ssafy@ssafy.com">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
  
          <div class="form-floating mx-auto p-2  mb-2" style="width: 70%;">
            <p style="float:left">Name</p>
            <input type="text" class="form-control" id="name" placeholder="김싸피">
            <!--<label for="floatingInput">Email address</label>-->
          </div>
          
          <div class="form-floating mx-auto p-2  mb-2" style="width: 70%;">
            <p type="password" style="float:left">Password</p>
            <input type="password" class="form-control" id="password" placeholder="password">
          </div>
  
          <div class="form-floating mx-auto p-2 mb-5" style="width: 70%;">
            <p style="float:left">Address</p>
            <input type="text" class="form-control" id="address" placeholder="서울시 강남구 역삼동">
            <!--<label for="floatingInput">Email address</label>-->
          </div>

        </div>


        <button id="signin" class="btn btn-lg btn-primary mb-2" style="width: 15%; background-color: rgb(124, 224, 194)" type="submit">Sign in</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TripSignin',
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

#title{
  font-size: 30px;
  font-weight: bold;
  font-family: Impact;
}

#board{
  font-weight: bold;
}

</style>