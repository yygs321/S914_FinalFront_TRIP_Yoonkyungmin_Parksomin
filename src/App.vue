<template>
  <div id="app">
    <div class="container">
      <main-header></main-header>
      
    </div>

    <router-view/>


    <trip-footer></trip-footer>
  

    
  </div>
</template>

<script>
import MainHeader from './components/layout/mainHeader.vue'
import TripFooter from './components/layout/TripFooter.vue'


	export default{
		components: {TripFooter, MainHeader}
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