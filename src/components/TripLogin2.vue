<template>


<form>
  
  <div class="segment">
    <h1>Sign up</h1>
  </div>
  
  <label>
    <input type="text" placeholder="Email Address"/>
  </label>
  <label>
    <input type="password" placeholder="Password"/>
  </label>
  <button class="red" type="button"><i class="icon ion-md-lock"></i> Log in</button>
  
  <div class="segment">
    <button class="unit" type="button"><i class="icon ion-md-arrow-back"></i></button>
    <button class="unit" type="button"><i class="icon ion-md-bookmark"></i></button>
    <button class="unit" type="button"><i class="icon ion-md-settings"></i></button>
  </div>
  
  <div class="input-group">
    <label>
      <input type="text" placeholder="Email Address"/>
    </label>
    <button class="unit" type="button"><i class="icon ion-md-search"></i></button>
  </div>
  
</form>
</template>

<script>
export default {
  name: 'TripLogin',
}
</script>

<style>


body, html {
  background-color:#EBECF0;
}

body, p, input, select, textarea, button {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.2px;
    font-size: 16px;
}

div, p {
  color: #BABECC;
  text-shadow: 1px 1px 1px #FFF;
}


form {
  padding: 16px;
  width: 16px*20;
  margin: 0 auto;
}

.segment {
  padding: 16px*2 0;
  text-align: center;
}

button, input {
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 16px*20;
  padding: 16px;
  background-color:#EBECF0;
  text-shadow: 1px 1px 0 #FFF;
}

label {
  display: block;
  margin-bottom: 16px*1.5;
  width: 100%;
}

input {
  margin-right: 16px/2;
  box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
  }
}

button {
  color:#61677C;
  font-weight: bold;
  box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
  }
  
  .icon {
    margin-right: 16px/2;
  }
  
  &.unit {
    border-radius: 16px/2;
    line-height: 0;
    width: 16px*3;
    height: 16px*3;
    display:inline-flex;
    justify-content: center;
    align-items:center;
    margin: 0 16px/2;
    font-size: 16px*1.2;
    
    .icon {
      margin-right: 0; 
    }
  }
  
  &.red {
    display: block;
    width: 100%;
    color:#AE1100;
  }
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  label {
    margin: 0;
    flex: 1;
  }
}

</style>